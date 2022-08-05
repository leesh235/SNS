import { Server } from "socket.io";
import { event } from "../config/routes";
import { createChat } from "../services/chat.service";
import { verify } from "jsonwebtoken";
import { createAdapter } from "@socket.io/mongo-adapter";
import mongoose from "mongoose";

const collection = mongoose.connection.createCollection("ctartCapped", {
    capped: true,
    size: 1e6,
});

function publicRooms() {
    const {
        sockets: {
            adapter: { sids, rooms },
        },
    } = io;
    const publicRooms = [];
    rooms.forEach((_, key) => {
        if (sids.get(key) === undefined) {
            publicRooms.push(key);
        }
    });
    return publicRooms;
}

export default (server) => {
    const { FE_URL, JWT_SECRET } = process.env;
    const io = new Server(server, { cors: { origin: `${FE_URL}` } });

    collection
        .then((db) => io.adapter(createAdapter(db)))
        .catch((err) => console.log(err));

    io.use((socket, next) => {
        if (socket?.handshake?.query?.token) {
            verify(
                socket?.handshake?.query?.token,
                `${JWT_SECRET}`,
                (err, decoded) => {
                    if (err) return next(new Error(`Authentication error`));
                    socket.decoded = decoded;
                    console.log(socket.adapter.rooms);
                    next();
                }
            );
        } else {
            next(new Error(`Authentication error`));
        }
    }).on("connection", (socket) => {
        console.log("connection");

        socket.on(event.join, ({ roomId }) => {
            console.log("join: ", roomId);
            socket.join(roomId);
            console.log(publicRooms());
            // console.log(socket.adapter.rooms.get(roomId).size);
            // console.log(socket.adapter.rooms);
            // console.log(socket.adapter.sids);
        });

        socket.on(event.leave, async ({ roomId }) => {
            console.log("leave: ", roomId);
            socket.leave(roomId);
        });

        socket.on(event.chat, async ({ roomId, userId, nickName, msg }) => {
            const result = await createChat({
                body: {
                    roomId,
                    userId,
                    msg,
                    nickName,
                },
            });
            io.to(roomId).emit(event.message, {
                _id: result._id,
                userId: result.userId,
                nickName: result.nickName,
                message: result.message,
            });
            // console.log(socket.connected);
            io.emit("test2" | "test", { message: "success" });
        });

        socket.on("disconnect", () => {
            console.log("disconnect");
        });
    });
};

/*
            1.작동 방식
                -client의 최상단 component에서 websocket 연결
                -각 채팅방 입장 시 join event 발생
                -채팅 시 chat/message or alram event 발생
                -채팅방 간소화 시 simple/alram event(채팅방 default event/alram을 받아야함)
                -채팅방 퇴장 시 leave/message event
                -메신저 버튼 클릭 시 채팅창 오픈 -> 채팅 입력 시 room 생성/user_room 등록/message 저장/message list 가져오기
            2.채팅방 유무
                2-1.채팅방이 이미 존재할 때(채팅 리스트를 통해 websocket 접근)
                    -roomId를 통한 join event 발생
                2-2.채팅방이 존재하지 않을 때(메신지 버튼을 통해 websocket 접근)
                    -채팅창만 켜지고 room은 생성되지 않음
                    -채팅이 발생하면 room이 생성됨
                    -1:1 = 상대방의 nickName이 room title / user_room등록
                    -단체방 = 해당 참여자들의 nickName이 room title / user_room 등록
            3.message or alram
                -채팅방 join 시 message event 발생
                -채팅방 simple 시 alram event 발생
            4.api / socket
                4-1 socket
                    -connect/disconnect/join/simple/leave/chat/message/alram
                4-2 api
                    -user 생성/user nickName 수정/user 삭제
                    -room 생성/room title 변경/room 삭제
                    -user_room list 가져오기
                    -message 삭제/message list 가져오기
                4-3 service logic
                    -message저장
                    -user_room등록/user_room해제
        */
