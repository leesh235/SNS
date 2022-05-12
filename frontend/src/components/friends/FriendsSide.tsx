import { useState } from "react";
import styled from "../../styles/theme-components";
import { Text } from "../common/Text";

const Wrapper = styled.section`
    background-color: ${(props) => props.theme.color.white};
    max-width: 360px;
    min-height: calc(100vh - 56px);
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 16px 12px 16px;
`;

const MenuWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    padding: 0 8px;
`;

const Menu = styled.li<{ hover: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: calc(100% - 16px);
    height: 52px;
    border-radius: 6px;
    padding: 0 8px;
    cursor: pointer;
    background-color: ${(props) => props.hover && props.theme.color.gray};
    :hover {
        background-color: ${(props) => !props.hover && props.theme.color.gray};
    }
`;

const Icon = styled.div<{ hover: boolean }>`
    width: 36px;
    height: 36px;
    border-radius: 18px;
    background-color: ${(props) =>
        props.hover ? props.theme.color.seaBule : props.theme.color.gray};
    margin: 8px 12px 8px 0;
`;

interface Props {
    menu: number;
    handleMenu: any;
}

const menuList = ["홈", "친구 요청", "친구 대기", "모든 친구", "생일"];

export const FriendsSide = ({ menu, handleMenu }: Props) => {
    return (
        <Wrapper>
            <TitleWrapper>
                <Text
                    text={"친구"}
                    fs={"24px"}
                    fw={700}
                    lh={"28px"}
                    width={"auto"}
                />
            </TitleWrapper>
            <MenuWrapper>
                {menuList.map((val, idx) => {
                    if (menu === idx) {
                        return (
                            <Menu
                                hover={true}
                                key={idx}
                                onClick={() => {
                                    handleMenu(idx);
                                }}
                            >
                                <Icon hover={true} />
                                <Text
                                    text={val}
                                    fs={"17px"}
                                    fw={500}
                                    lh={"20px"}
                                    width={"auto"}
                                />
                            </Menu>
                        );
                    } else {
                        return (
                            <Menu
                                hover={false}
                                key={idx}
                                onClick={() => {
                                    handleMenu(idx);
                                }}
                            >
                                <Icon hover={false} />
                                <Text
                                    text={val}
                                    fs={"17px"}
                                    fw={500}
                                    lh={"20px"}
                                    width={"auto"}
                                />
                            </Menu>
                        );
                    }
                })}
            </MenuWrapper>
        </Wrapper>
    );
};
