import { Server } from "socket.io";
import { event } from "../config/routes";
import { findRoom, createRoom } from "../services/room.service";

export default (server) => {
    const { FE_URL, BE_URL } = process.env;
    const io = new Server(server, { cors: { origin: `${FE_URL}` } });

    io.on("connection", (socket) => {
        console.log("connection");
        console.log(socket.request.headers.referer);

        /*
            1) 1:1 채팅
                -친구클릭
                -채팅방 유무확인
                    -유
                        -채팅 리스트 불러오기
                    -무 
                        -채팅방 생성
                        -채팅방 이름은 default = 참여자 닉네임(자신 제외)
                -채팅 시 채팅 내역 저장 후 참여자들에게 알림
                    -종료중인 참여자에게도 알림
                -채팅 종료 시 참여자들에게 알림
                -채팅방 퇴장시 참여자들에게 알림
            2) 1:N 채팅
                -초대할 친구들 선택
                -채팅방 생성
                    -채팅방 이름은 default = 참여자 닉네임(자신 제외)
                -채팅 시 채팅 내역 저장 후 참여자들에게 알림
                    -종료중인 참여자에게도 알림
                -채팅 종료 시 참여자들에게 알림
                -채팅방 퇴장시 참여자들에게 알림

            *작동 방식
                -최상단 component에서 socket 연결
                -각 채팅방 입장 시 join event 발생
                -종료 시 leave event 발생
                -채팅방 퇴장 시 해당 채팅방에서 user정보 삭제
                -메세지 입력 시 채팅방 참여자들에게 전송
                -종료 중인 참여자들에게는 알림보내기

            **api
                -채팅방 삭제
                -채팅방 목록가져오기
                -채팅 목록 가져오기
        */

        socket.on(event.join, ({ roomId, userId }) => {
            console.log("join");
            //채팅방 존재유무 확인
            findRoom({ roomId }).then((data) => {
                if (!data) {
                    createRoom({ roomId });
                }
            });
            socket.join(roomId);
            io.to(roomId).emit(event.message, `${userId}님이 입장하셨습니다.`);
        });

        socket.on(event.leave, ({ roomId, userId }) => {
            console.log("leave");
            io.to(roomId).emit(event.message, `${userId}님이 퇴장하셨습니다.`);
            socket.leave(roomId);
        });

        socket.on(event.chat, ({ roomId, userId, msg }) => {
            console.log("message");
            io.to(roomId).emit(event.message, `${userId}: ${msg}`);
        });

        socket.on("disconnect", () => {
            console.log("disconnect");
        });
    });
};
