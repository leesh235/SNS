import styled from "../../styles/theme-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { ChattingRoom } from "./ChattingRoom";
import { chatActionCreator } from "../../modules/action/chat";

const Wrapper = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: ${(props) => props.theme.color.lightGray};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    cursor: pointer;
    position: relative;
    z-index: 1;
`;

const IconDetail = styled.div`
    height: 38px;
    width: auto;
    background-color: ${(props) => props.theme.color.white};
    position: absolute;
    right: 68px;
    border-radius: 6px;
    padding: 5px;
`;

const IconCancleBtn = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.color.white};
    position: absolute;
    right: -5px;
    top: -5px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
`;

interface Props {
    id: String;
    title: String;
}

export const ChatIcon = ({ id, title }: Props) => {
    const dispatch = useDispatch();

    const [hover, setHover] = useState<boolean>(false);
    const [closeHover, setCloseHover] = useState<boolean>(false);

    const handleOpenRoom = () => {
        if (!closeHover) {
            dispatch(chatActionCreator.joinRoom({ id }));
            dispatch(chatActionCreator.leaveRoom(id));
        }
    };

    const handleMouseOver = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    const handleClose = () => {
        dispatch(chatActionCreator.leaveRoom(id));
    };

    return (
        <Wrapper
            onClick={handleOpenRoom}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        >
            {hover && (
                <>
                    <IconDetail>{title}</IconDetail>
                    <IconCancleBtn
                        onClick={handleClose}
                        onMouseOver={() => {
                            setCloseHover(true);
                        }}
                        onMouseLeave={() => {
                            setCloseHover(false);
                        }}
                    >
                        X
                    </IconCancleBtn>
                </>
            )}
        </Wrapper>
    );
};
