import styled from "../styles/theme-components";
import { MouseEventHandler, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
//functions
import theme from "../styles/theme";
import { profileActionCreator } from "../modules/action/profile";
import { friendsActionCreator } from "../modules/action/friends";
import { useObserver } from "../hooks/common/useObserver";
import { useGetProfile } from "../hooks/profile/useGetProfile";
//components
import { Text } from "../components/common/Text";
import { IconButton } from "../components/common/button/IconButton";
import { PostPage } from "../components/profile/post/PostPage";
import { ProfileInfo } from "../components/profile/info/ProfileInfo";
import { ImagePage } from "../components/profile/image/ImagePage";
import { ProfileTop } from "../components/profile/common/ProfileTop";
import { ProfileFriend } from "../components/profile/friend/ProfileFriend";
import { ProfileVideo } from "../components/profile/video/ProfileVideo";
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

const MenuLayout = styled.section`
    background-color: ${(props) => props.theme.color.white};
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LineObserver = styled.div`
    max-width: 908px;
    width: 100%;
    border-top: 1px solid ${(props) => props.theme.color.lightGray};
`;

const MenuList = styled.ul`
    max-width: 908px;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-top: 3px;
`;

const Menu = styled.li<{ color: string }>`
    border-bottom: 3px solid ${(props) => props.color};
`;

const ScrollLayout = styled.div`
    position: fixed;
    width: 100%;
    height: 60px;
    top: 55px;
    z-index: 9;
    background-color: ${(props) => props.theme.color.white};
`;

const TopLayout = styled.div`
    margin: 0 auto;
    max-width: 908px;
    width: 100%;
    height: 100%;
`;

const TopButton = styled.button`
    padding: 0;
    margin: 0;
    width: 150px;
    height: 100%;
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

    const { loading, data, error } = useGetProfile({ email });
    const login = useSelector((state: any) => state?.profile?.simple);

    const [click, setClick] = useState<number>(0);

    const handleOnClick = ({ id }: { id: number }) => {
        setClick(id);
        navigate(`${menuUrl[id]}`, { replace: true });
        window.scrollTo({ top: 0 });
    };

    const handleTop: MouseEventHandler = (e) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        dispatch(profileActionCreator.profile({ email }));
    }, [dispatch]);

    useEffect(() => {}, [check]);

    return (
        <Layout>
            <ProfileTop />

            {check && (
                <ScrollLayout>
                    <TopLayout>
                        <TopButton type="button" onClick={handleTop}>
                            top
                        </TopButton>
                    </TopLayout>
                </ScrollLayout>
            )}

            <MenuLayout>
                <LineObserver ref={ref} className={check ? "divH" : ""} />
                <MenuList>
                    {menuList.map((val, idx) => {
                        return (
                            <Menu
                                id={val}
                                onClick={() => {
                                    handleOnClick({ id: idx });
                                }}
                                key={idx}
                                color={
                                    click === idx
                                        ? theme.color.seaBule
                                        : theme.color.white
                                }
                            >
                                <IconButton
                                    width={"auto"}
                                    hover={!(click === idx)}
                                >
                                    <Text
                                        text={val}
                                        tag={"span"}
                                        cssObj={{
                                            fontSize: "15px",
                                            fontWeight: 600,
                                            fontColor:
                                                click === idx
                                                    ? theme.color.seaBule
                                                    : theme.color.lightBlack,
                                        }}
                                    />
                                </IconButton>
                            </Menu>
                        );
                    })}
                </MenuList>
            </MenuLayout>

            {click === 0 && (
                <PostPage
                    handleUrl={handleOnClick}
                    check={check}
                    isYou={data?.email === login.data?.email}
                />
            )}
            {click === 1 && (
                <ProfileInfo isYou={data?.email === login.data?.email} />
            )}
            {click === 2 && (
                <ImagePage isYou={data?.email === login.data?.email} />
            )}
            {/* {click === 3 && <ProfileFriend />}  */}
            {/* {click === 4 && <ProfileVideo />} */}
            {/* {click === 5 && <ProfileCheckIn />} */}
        </Layout>
    );
};

export default Profile;
