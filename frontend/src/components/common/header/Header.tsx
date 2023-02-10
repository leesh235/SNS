import styled from "../../../styles/theme-components";
import theme from "../../../styles/theme";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
//functions
import { routes } from "../../../utils/routes";
import { useModal } from "../../../hooks/common/useModal";
import { useMenuFunc } from "../../../hooks/common/useMenuFunc";
//components
import { LogoIcon } from "../../../assets/icon/LogoIcon";
import { AppIcon } from "../../../assets/icon/AppIcon";
import { ArrowDIcon } from "../../../assets/icon/ArrowDIcon";
import { BellIcon } from "../../../assets/icon/BellIcon";
import { FriendIcon } from "../../../assets/icon/FriendIcon";
import { GroubIcon } from "../../../assets/icon/GroubIcon";
import { HomeIcon } from "../../../assets/icon/HomeIcon";
import { MessageIcon } from "../../../assets/icon/MessageIcon";
import { SearchInput } from "../input/SearchInput";
import { SeeMore } from "./SeeMore";

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

const RightLayout = styled.span`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
    > :nth-child(n) {
        margin-right: 8px;
    }
    position: relative;
`;

const IconLayout = styled.div`
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
    <div>menu</div>,
];

const rightMenuList = [
    <AppIcon />,
    <MessageIcon />,
    <BellIcon />,
    <ArrowDIcon />,
];

export const Header = () => {
    const location = useLocation();

    const userModal = useModal();
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
            <RightLayout>
                {rightMenuList.map((val, idx) => {
                    if (idx === 3)
                        return (
                            <IconLayout
                                key={idx}
                                onClick={userModal.handleModal}
                            >
                                {val}
                            </IconLayout>
                        );
                    else return <IconLayout key={idx}>{val}</IconLayout>;
                })}
                {userModal.modal && (
                    <SeeMore closeFunc={userModal.handleModal} />
                )}
            </RightLayout>
        </Layout>
    );
};
