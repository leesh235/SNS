import styled from "../styles/theme-components";
import theme from "../styles/theme";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../modules/action/user";
import { Text } from "../components/common/Text";
import { IconButton } from "../components/common/button/IconButton";
import { ProfilePost } from "../components/profile/ProfilePost";
import { ProfileInfo } from "../components/profile/ProfileInfo";
import { ProfileFriend } from "../components/profile/ProfileFriend";
import { ProfileImage } from "../components/profile/ProfileImage";
import { ProfileVideo } from "../components/profile/ProfileVideo";
import { ProfileCheckIn } from "../components/profile/ProfileCheckIn";
import { ProfileTop } from "../components/profile/ProfileTop";
import { setIsFriend } from "../modules/action/friends";

const Wrapper = styled.main`
    background-color: ${(props) => props.theme.color.gray};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 56px;
`;

const Center = styled.section`
    background-color: ${(props) => props.theme.color.white};
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const MenuWrapper = styled.ul`
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

    const [click, setClick] = useState<number>(0);
    const handleOnClick = ({ id }: { id: number }) => {
        setClick(id);
        navigate(`${menuUrl[id]}`, { replace: true });
    };

    useEffect(() => {
        dispatch(setProfile({ email }));
        dispatch(setIsFriend({ email }));
    }, [email]);

    return (
        <Wrapper>
            <ProfileTop />
            <Center>
                <MenuWrapper>
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
                                            fs={"15px"}
                                            fw={600}
                                            lh={"20px"}
                                            fc={theme.color.seaBule}
                                            width={"auto"}
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
                                            fs={"15px"}
                                            fw={600}
                                            lh={"20px"}
                                            fc={theme.color.lightBlack}
                                            width={"auto"}
                                        />
                                    </IconButton>
                                </Menu>
                            );
                        }
                    })}
                </MenuWrapper>
            </Center>
            {click === 0 && <ProfilePost handleUrl={handleOnClick} />}
            {click === 1 && <ProfileInfo />}
            {click === 2 && <ProfileImage />}
            {/* {click === 3 && <ProfileFriend />} */}
            {/* {click === 4 && <ProfileVideo />}
            {click === 5 && <ProfileCheckIn />} */}
        </Wrapper>
    );
};

export default Profile;
