import styled from "../../../styles/theme-components";
import theme from "../../../styles/theme";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
//functions
import { routes } from "../../../utils/routes";
import { useMenuFunc } from "../../../hooks/common/useMenuFunc";
import { useUserInfo } from "../../../hooks/common/useUserInfo";
//components
import { LogoIcon } from "../../../assets/icon/LogoIcon";
import { FriendIcon } from "../../../assets/icon/FriendIcon";
import { GroubIcon } from "../../../assets/icon/GroubIcon";
import { HomeIcon } from "../../../assets/icon/HomeIcon";
import { SearchInput } from "../input/SearchInput";
import { ListIcon } from "../../../assets/icon/ListIcon";
import { OptionMenu } from "./OptionMenu";

const Layout = styled.header`
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    height: 56px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 4px 8px rgb(0 0 0 / 20%);
    z-index: 100;
    ${(props) =>
        props.theme.media.mobileU(`
        display: grid;
        grid-template-columns: 30vw 40vw 30vw;
    `)}
    ${(props) =>
        props.theme.media.mobileD(`
        display: grid;
        grid-template-columns: 100px auto auto;
    `)}
`;

const LeftLayout = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    > :nth-child(1) {
        margin: 0 10px;
    }
`;

const CenterLayout = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    > :nth-child(n + 2) {
        margin-left: 8px;
    }
    padding-top: 3px;
    ${(props) =>
        props.theme.media.mobileD(`
        justify-content: flex-start;
    `)}
    > :nth-child(-n + 3) {
        ${(props) =>
            props.theme.media.mobileD(`
            display: none;
        `)}
    }
    > :nth-child(4) {
        ${(props) =>
            props.theme.media.desktopU(`
            display: none;
        `)}
    }
`;

const BorderStyle = styled.li<{ color?: string }>`
    width: auto;
    height: 100%;
    border-bottom: 3px solid ${(props) => props.color};
`;

const HoverStyle = styled.div`
    width: 112px;
    height: 50px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        background-color: ${(props) => props.theme.color.gray};
    }
`;

const routeOpt = [routes.home, routes.friends, "", routes.bookmark];

const centerMenuList = [
    <HomeIcon />,
    <FriendIcon />,
    <GroubIcon />,
    <ListIcon />,
];

export const Header = () => {
    const location = useLocation();

    const { data } = useUserInfo();

    const { selected, handleMenuClick, ininMenu } = useMenuFunc({
        defaultValue: 0,
    });

    useEffect(() => {
        if (location.pathname === routes.home) ininMenu(0);
        if (location.pathname === routes.friends) ininMenu(1);
        if (location.pathname === routes.home) ininMenu(0);
    }, [location.pathname]);

    return (
        <Layout>
            <LeftLayout>
                <LogoIcon />
                <SearchInput placeholder={"Facebook 검색"} />
            </LeftLayout>
            <CenterLayout>
                {centerMenuList.map((val: any, idx: any) => (
                    <BorderStyle
                        id={idx}
                        key={idx}
                        color={
                            idx === +selected
                                ? theme.color.seaBule
                                : theme.color.white
                        }
                        onClick={handleMenuClick}
                    >
                        <Link key={idx} to={{ pathname: `${routeOpt[idx]}` }}>
                            <HoverStyle>{val}</HoverStyle>
                        </Link>
                    </BorderStyle>
                ))}
            </CenterLayout>
            <OptionMenu />
        </Layout>
    );
};
