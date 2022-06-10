import theme from "../../styles/theme";
import styled from "../../styles/theme-components";
import { Text } from "../common/Text";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Wrapper = styled.section`
    position: fixed;
    top: 56px;
    right: 0;
    max-width: 360px;
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
    background-color: blueviolet;
    border-radius: 18px;
    margin: 12px 18px 12px 0px;
`;

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

export const ChattingList = () => {
    const { loading, data, error } = useSelector(
        (state: any) => state.chat.roomList
    );

    useEffect(() => {}, [loading]);

    return (
        <Wrapper>
            <Text
                text={"그룹 대화"}
                fs={"17px"}
                fw={600}
                lh={"20px"}
                fc={theme.color.lightBlack}
                margin={"0 0 10px 16px"}
            />
            {data?.map((val: any, idx: number) => {
                return (
                    <Menu key={val._id}>
                        <Icon />
                        <Text
                            text={val.title}
                            fs={"15px"}
                            fw={500}
                            lh={"20px"}
                            width={"auto"}
                        />
                    </Menu>
                );
            })}
        </Wrapper>
    );
};
