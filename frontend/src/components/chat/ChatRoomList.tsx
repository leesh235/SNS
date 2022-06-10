import styled from "../../styles/theme-components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ChattingRoom } from "./ChattingRoom";

const ChatList = styled.section`
    position: fixed;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: flex-end;
    width: auto;
    height: 540px;
    padding: 20px;
`;

export const ChatRoomList = () => {
    const { loading, data, error } = useSelector(
        (state: any) => state.chat.roomList
    );

    const [open, setOpen] = useState<any>();
    const [room, setRoom] = useState([]);

    const handleOpen = (room: any) => {
        console.log(room);
        setOpen(room);
    };

    const handleClose = () => {
        setOpen("");
    };

    const handleRoom = (room: any) => {
        setRoom((pre) => pre.concat(room));
    };

    useEffect(() => {
        console.log(data);
    }, [loading]);

    return (
        <ChatList>
            {data?.map((val: any, idx: number) => {
                if (open === val._id) {
                    return (
                        <ChattingRoom
                            key={val._id}
                            roomId={val._id}
                            roomName={val.title}
                            closeFunc={handleClose}
                        />
                    );
                }
            })}
        </ChatList>
    );
};
