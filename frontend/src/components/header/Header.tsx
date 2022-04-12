import styled from "../../styles/theme-components";
import theme from "../../styles/theme";
import { useState } from "react";
import { SearchInput } from "../common/input/SearchInput";
import { IconButton } from "../common/button/IconButton";
import { Text } from "../common/Text";
import { BagicUser } from "../../assets/icon/BagicUser";
import { LogoIcon } from "../../assets/icon/LogoIcon";
import { AppIcon } from "../../assets/icon/AppIcon";
import { ArrowDIcon } from "../../assets/icon/ArrowDIcon";
import { BellIcon } from "../../assets/icon/BellIcon";
import { FriendIcon } from "../../assets/icon/FriendIcon";
import { GroubIcon } from "../../assets/icon/GroubIcon";
import { HomeIcon } from "../../assets/icon/HomeIcon";
import { MessageIcon } from "../../assets/icon/MessageIcon";

const Wrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding: 0 16px;
    height: 56px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 4px 8px rgb(0 0 0 / 20%);
    z-index: 100;
`;

const LeftWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    > :nth-child(1) {
        margin-right: 10px;
    }
`;

const CenterWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    > :nth-child(n + 2) {
        margin-left: 8px;
    }
    padding-top: 3px;
`;

const RightWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    > :nth-child(n) {
        margin-right: 8px;
    }
`;

const IconWrapper = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.color.gray};
    margin: 0px;
    :hover {
        background-color: ${(props) => props.theme.color.lightGray};
    }
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LongIcon = styled.div`
    width: 88px;
    height: 36px;
    border-radius: 18px;
    background-color: ${(props) => props.theme.color.gray};
    margin: 0px;
    :hover {
        background-color: ${(props) => props.theme.color.lightGray};
    }
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LongIcon2 = styled.div`
    width: 95px;
    height: 36px;
    border-radius: 18px;
    background-color: ${(props) => props.theme.color.white};
    margin: 0px;
    :hover {
        background-color: ${(props) => props.theme.color.lightGray};
    }
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ButtonWrapper = styled.div<{ color: string }>`
    width: auto;
    height: 200%;
    border-bottom: 3px solid ${(props) => props.color};
`;

const data = [
    <Div>
        <HomeIcon />
    </Div>,
    <Div>
        <FriendIcon />
    </Div>,
    <Div>
        <GroubIcon />
    </Div>,
];

const rightData = [<AppIcon />, <MessageIcon />, <BellIcon />, <ArrowDIcon />];

export const Header = () => {
    const [click, setClick] = useState<number>(0);

    const handleOnClick = ({ id }: { id: number }) => {
        setClick(id);
    };

    return (
        <Wrapper>
            <LeftWrapper>
                <LogoIcon />
                <SearchInput placeholder={"Facebook 검색"} />
            </LeftWrapper>
            <CenterWrapper>
                {data.map((val, idx) => {
                    if (idx === click) {
                        return (
                            <ButtonWrapper
                                color={theme.color.seaBule}
                                key={idx}
                                onClick={() => {
                                    handleOnClick({ id: idx });
                                }}
                            >
                                <IconButton>{val}</IconButton>
                            </ButtonWrapper>
                        );
                    } else {
                        return (
                            <ButtonWrapper
                                color={theme.color.white}
                                key={idx}
                                onClick={() => {
                                    handleOnClick({ id: idx });
                                }}
                            >
                                <IconButton>{val}</IconButton>
                            </ButtonWrapper>
                        );
                    }
                })}
            </CenterWrapper>
            <RightWrapper>
                <LongIcon>
                    <Text
                        text={"친구 찾기"}
                        fs={"15px"}
                        fw={600}
                        lh={"20px"}
                        width={"auto"}
                    />
                </LongIcon>
                <LongIcon2>
                    <BagicUser />
                    <Text
                        text={"이성호"}
                        fs={"15px"}
                        fw={600}
                        lh={"20px"}
                        width={"auto"}
                    />
                </LongIcon2>
                {rightData.map((val, idx) => {
                    return <IconWrapper key={idx}>{val}</IconWrapper>;
                })}
            </RightWrapper>
        </Wrapper>
    );
};
