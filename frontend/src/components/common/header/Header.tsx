import styled from "../../../styles/theme-components";
import theme from "../../../styles/theme";
import { useEffect, useState } from "react";
import { SearchInput } from "../input/SearchInput";
import { IconButton } from "../button/IconButton";
import { Text } from "../Text";
import { LogoIcon } from "../../../assets/icon/LogoIcon";
import { AppIcon } from "../../../assets/icon/AppIcon";
import { ArrowDIcon } from "../../../assets/icon/ArrowDIcon";
import { BellIcon } from "../../../assets/icon/BellIcon";
import { FriendIcon } from "../../../assets/icon/FriendIcon";
import { GroubIcon } from "../../../assets/icon/GroubIcon";
import { HomeIcon } from "../../../assets/icon/HomeIcon";
import { MessageIcon } from "../../../assets/icon/MessageIcon";
import { useSelector, useDispatch } from "react-redux";
import { setLogInInfo, setProfile } from "../../../modules/action/user";
import { Avatar } from "../Image/Avatar";
import { Link } from "react-router-dom";
import { routes } from "../../../utils/routes";
import { Button2 } from "../button/Button2";
import { SeeMore } from "./SeeMore";
import { logOut } from "../../../utils/authUtils";

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
    position: relative;
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
    display: grid;
    grid-template-columns: 38px auto;
    align-items: center;
    > :nth-child(n) {
        align-self: center;
        justify-self: center;
    }
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

const SeeMoreWrapper = styled.div`
    width: calc(200px - 30px);
    height: auto;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 4px 8px rgb(0 0 0 / 20%);
    background-color: ${(props) => props.theme.color.white};
    position: absolute;
    top: 45px;
    display: flex;
    flex-direction: column;
    > :nth-child(1) {
        border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
        padding-bottom: 8px;
        margin-bottom: 8px;
    }
`;

const list = [
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

const routeOpt = [routes.home, routes.friends, ""];

const rightData = [<AppIcon />, <MessageIcon />, <BellIcon />, <ArrowDIcon />];

export const Header = () => {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector(
        (state: any) => state?.user?.loginInfo
    );

    const [click, setClick] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);

    const handleOnClick = ({ id }: { id: number }) => {
        setClick(id);
    };

    const handleSeeMore = () => {
        console.log("handleSeeMore");
        if (!open) setOpen(true);
        else setOpen(false);
    };

    useEffect(() => {
        if (data === null) dispatch(setLogInInfo());
    }, []);

    return (
        <Wrapper>
            <LeftWrapper>
                <LogoIcon />
                <SearchInput placeholder={"Facebook 검색"} />
            </LeftWrapper>
            <CenterWrapper>
                {list.map((val, idx) => {
                    if (idx === click) {
                        return (
                            <ButtonWrapper
                                key={idx}
                                color={theme.color.seaBule}
                                onClick={() => {
                                    handleOnClick({ id: idx });
                                }}
                            >
                                <IconButton>{val}</IconButton>
                            </ButtonWrapper>
                        );
                    } else {
                        return (
                            <Link
                                key={idx}
                                to={{ pathname: `${routeOpt[idx]}` }}
                            >
                                <ButtonWrapper
                                    color={theme.color.white}
                                    key={idx}
                                    onClick={() => {
                                        handleOnClick({ id: idx });
                                    }}
                                >
                                    <IconButton>{val}</IconButton>
                                </ButtonWrapper>
                            </Link>
                        );
                    }
                })}
            </CenterWrapper>
            <RightWrapper>
                <Link
                    to={{
                        pathname: `${routes.friends}`,
                    }}
                >
                    <LongIcon>
                        <Text
                            text={"친구 찾기"}
                            fs={"15px"}
                            fw={600}
                            lh={"20px"}
                            width={"auto"}
                        />
                    </LongIcon>
                </Link>
                <Link
                    to={{
                        pathname: `${routes.userInfo}${data?.email}`,
                    }}
                    state={data?.email}
                >
                    <LongIcon2>
                        <Avatar src={data?.profileImage} />
                        <Text
                            text={data?.nickName}
                            fs={"15px"}
                            fw={600}
                            lh={"20px"}
                            width={"50px"}
                        />
                    </LongIcon2>
                </Link>
                {rightData.map((val, idx) => {
                    if (idx === 3)
                        return (
                            <IconWrapper key={idx} onClick={handleSeeMore}>
                                {val}
                            </IconWrapper>
                        );
                    else return <IconWrapper key={idx}>{val}</IconWrapper>;
                })}
                {open && <SeeMore closeFunc={handleSeeMore} />}
            </RightWrapper>
        </Wrapper>
    );
};
