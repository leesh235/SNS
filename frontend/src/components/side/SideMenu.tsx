import styled from "../../styles/theme-components";
import { Text } from "../common/Text";
import { routes } from "../../utils/routes";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import theme from "../../styles/theme";
import { useEffect } from "react";

const Wrapper = styled.ul`
    position: fixed;
    top: 56px;
    left: 0;
    max-width: 360px;
    width: 100%;
    height: calc(100vh - 72px);
    display: flex;
    margin-top: 16px;
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

const Menu = styled.li<{ backColor?: string }>`
    height: 52px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 8px;
    padding: 0 8px;
    cursor: pointer;
    background-color: ${(props) => props.backColor};
    &:hover {
        background-color: ${(props) => props.theme.color.lightGray};
        border-radius: 10px;
    }
`;

const AvatarIcon = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 18px;
    margin: 12px 18px 12px 0px;
    cursor: pointer;
`;

const Icon = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 18px;
    margin: 12px 18px 12px 0px;
    background-color: gray;
    cursor: pointer;
`;

//이름, 저장됨: 새 페이지 / 더보기: 리스트 추가 / 나머지 컴포넌트 교체
const menuList = [
    { name: "친구찾기", route: routes.friends },
    { name: "시작하기", route: routes.welcome },
    { name: "최신", route: "" },
    { name: "좋아요", route: "" },
];

interface Props {
    handleMenu: (id: number) => void;
}

export const SideMenu = ({ handleMenu }: Props) => {
    const location = useLocation();
    const { loading, data, error } = useSelector(
        (state: any) => state?.user?.loginInfo
    );

    useEffect(() => {}, [location?.state]);

    return (
        <Wrapper>
            <Link
                to={{
                    pathname: `${routes.userInfo}${data?.email}`,
                }}
                state={data?.email}
            >
                <Menu>
                    <AvatarIcon src={data?.profileImage} />
                    <Text
                        text={data?.nickName}
                        fs={"15px"}
                        fw={500}
                        lh={"20px"}
                        width={"auto"}
                    />
                </Menu>
            </Link>
            {menuList.map((val, idx) => {
                if (val.route !== "")
                    return (
                        <Link key={idx} to={{ pathname: `${val.route}` }}>
                            <Menu>
                                <Icon />
                                <Text
                                    text={val.name}
                                    fs={"15px"}
                                    fw={500}
                                    lh={"20px"}
                                    width={"auto"}
                                />
                            </Menu>
                        </Link>
                    );
                else
                    return (
                        <Menu
                            key={idx}
                            onClick={() => handleMenu(idx)}
                            backColor={
                                location.state !== null &&
                                location.state === idx
                                    ? theme.color.gray1
                                    : ""
                            }
                        >
                            <Icon />
                            <Text
                                text={val.name}
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
