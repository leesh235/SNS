import styled from "../../styles/theme-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//functions
import theme from "../../styles/theme";
import { chatActionCreator } from "../../modules/action/chat";
//components
import { Text } from "../common/Text";
import { CreateChatRoom } from "../chat/CreateChatRoom";

const Layout = styled.section`
    width: 100%;
    height: calc(100vh - 72px);
    display: flex;
    padding-top: 16px;
    flex-direction: column;
    justify-content: start;
    overflow-x: hidden;
    overflow-y: hidden;
    &:hover {
        overflow-y: auto;
    }
    ::-webkit-scrollbar {
        width: 8px; /*스크롤바의 너비*/
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 6px;
        width: 8px;
        height: 8px;
        background-color: ${(props) =>
            props.theme.color.lightBlack}; /*스크롤바의 색상*/
    }
    ::-webkit-scrollbar-track {
        background-color: ${(props) =>
            props.theme.color.gray}; /*스크롤바 트랙 색상*/
    }
`;

const Menu = styled.li`
    height: 52px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 8px;
    padding: 0 8px;
    cursor: pointer;
    &:hover {
        background-color: ${(props) => props.theme.color.lightGray};
        border-radius: 10px;
    }
`;

const Icon = styled.div`
    width: 36px;
    height: 36px;
    background-color: ${(props) => props.theme.color.white};
    border-radius: 18px;
    margin: 12px 18px 12px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ChattingList = () => {
    const dispatch = useDispatch();

    const { loading, data, error } = useSelector(
        (state: any) => state.chat.roomList
    );

    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenRoom = (id: string) => {
        dispatch(chatActionCreator.joinRoom({ id }));
        dispatch(chatActionCreator.leaveRoom(id));
    };

    useEffect(() => {
        dispatch(chatActionCreator.roomList());
    }, []);

    return (
        <>
            <Layout>
                <Text
                    text={"그룹 대화"}
                    cssObj={{
                        fontSize: "17px",
                        fontWeight: 600,
                        fontColor: theme.color.lightBlack,
                        margin: "0 0 10px 16px",
                    }}
                />
                {data?.map((val: any, idx: number) => {
                    return (
                        <Menu
                            key={val._id}
                            onClick={() => {
                                handleOpenRoom(val._id);
                            }}
                        >
                            <Icon />
                            <Text
                                text={val.title}
                                tag={"span"}
                                cssObj={{
                                    fontSize: "15px",
                                    fontWeight: 500,
                                }}
                            />
                        </Menu>
                    );
                })}
                <Menu onClick={() => handleOpen()}>
                    <Icon>+</Icon>
                    <Text
                        text={"새 그룹 만들기"}
                        tag={"span"}
                        cssObj={{
                            fontSize: "15px",
                            fontWeight: 500,
                        }}
                    />
                </Menu>
            </Layout>
            {open && <CreateChatRoom closeFunc={handleClose} />}
        </>
    );
};
