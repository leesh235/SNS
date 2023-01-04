import styled from "../styles/theme-components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
//functions
import theme from "../styles/theme";
import { userActionCreator } from "../modules/action/user";
import { friendsActionCreator } from "../modules/action/friends";
import { useObserver } from "../hooks/useObserver";
//components
import { Text } from "../components/common/Text";
import { IconButton } from "../components/common/button/IconButton";
import { ProfilePost } from "../components/profile/ProfilePost";
import { ProfileInfo } from "../components/profile/ProfileInfo";
import { ProfileImage } from "../components/profile/ProfileImage";
import { ProfileTop } from "../components/profile/ProfileTop";
import { ProfileFriend } from "../components/profile/ProfileFriend";
import { ProfileVideo } from "../components/profile/ProfileVideo";
import { ProfileCheckIn } from "../components/profile/ProfileCheckIn";

const Layout = styled.main`
    background-color: ${(props) => props.theme.color.gray};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 56px;
    .fix {
        position: fixed;
        top: 55px;
        z-index: 9;
    }
    .divH {
        height: 570px;
    }
`;

const Center = styled.section`
    background-color: ${(props) => props.theme.color.white};
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-color: ${(props) => props.theme.color.white};
`;

const MenuLayout = styled.ul`
    max-width: 908px;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-top: 3px;
    border-top: 1px solid ${(props) => props.theme.color.lightGray};
`;

const Menu = styled.li<{ color: string }>`
    border-bottom: 3px solid ${(props) => props.color};
`;

const menuList = [
    "게시물",
    "정보",
    "사진",
    // "친구",
    // "동영상",
    // "체크인",
];

const menuUrl = [
    "",
    "#sk=about",
    "#sk=photos",
    // "#sk=friends",
    // "#sk=videos",
    // "#sk=map",
    // "",
];

const Profile = () => {
    const { email } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { ref, check } = useObserver({ height: 450 });

    const [click, setClick] = useState<number>(0);
    const handleOnClick = ({ id }: { id: number }) => {
        setClick(id);
        navigate(`${menuUrl[id]}`, { replace: true });
        window.scrollTo({ top: 0 });
    };

    useEffect(() => {
        dispatch(userActionCreator.profile({ email }));
        dispatch(friendsActionCreator.isFriend({ email }));
    }, [email]);

    useEffect(() => {}, [check]);

    return (
        <Layout>
            {!check ? <ProfileTop /> : ""}
            <Center className={check ? "fix" : ""}>
                <MenuLayout>
                    {menuList.map((val, idx) => {
                        if (click === idx) {
                            return (
                                <Menu
                                    id={val}
                                    onClick={() => {
                                        handleOnClick({ id: idx });
                                    }}
                                    key={idx}
                                    color={theme.color.seaBule}
                                >
                                    <IconButton width={"auto"} hover={false}>
                                        <Text
                                            text={val}
                                            tag={"span"}
                                            cssObj={{
                                                fontSize: "15px",
                                                fontWeight: 600,
                                                fontColor: theme.color.seaBule,
                                            }}
                                        />
                                    </IconButton>
                                </Menu>
                            );
                        } else {
                            return (
                                <Menu
                                    id={val}
                                    onClick={() => {
                                        handleOnClick({ id: idx });
                                    }}
                                    key={idx}
                                    color={theme.color.white}
                                >
                                    <IconButton width={"auto"}>
                                        <Text
                                            text={val}
                                            tag={"span"}
                                            cssObj={{
                                                fontSize: "15px",
                                                fontWeight: 600,
                                                fontColor:
                                                    theme.color.lightBlack,
                                            }}
                                        />
                                    </IconButton>
                                </Menu>
                            );
                        }
                    })}
                </MenuLayout>
            </Center>
            <div ref={ref} className={check ? "divH" : ""}></div>
            {click === 0 && (
                <ProfilePost handleUrl={handleOnClick} check={check} />
            )}
            {click === 1 && <ProfileInfo />}
            {click === 2 && <ProfileImage />}
            {/* {click === 3 && <ProfileFriend />} */}
            {/* {click === 4 && <ProfileVideo />}
            {click === 5 && <ProfileCheckIn />} */}
        </Layout>
    );
};

export default Profile;
