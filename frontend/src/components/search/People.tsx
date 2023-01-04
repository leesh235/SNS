import styled from "../../styles/theme-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
//functions
import { routes } from "../../utils/routes";
import { friendsActionCreator } from "../../modules/action/friends";
//components
import { Text } from "../common/Text";

const Layout = styled.article`
    max-width: 648px;
    width: calc(100% - 32px);
    height: auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 6px;
    background-color: ${(props) => props.theme.color.white};
    margin-bottom: 16px;
`;

const CardLayout = styled.div<{ top?: boolean }>`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 72px auto 48px;
    align-items: center;
    padding: 12px 0;
    border-top: 1px solid
        ${(props) =>
            props.top ? props.theme.color.white : props.theme.color.gray};
`;

const UserImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-right: 12px;
    cursor: pointer;
`;

const UserInfo = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const FriendBtn = styled.button`
    width: 36px;
    height: 36px;
    border-radius: 18px;
    margin-left: 12px;
    border: 0px;
    :hover {
        background-color: ${(props) => props.theme.color.lightGray};
    }
`;

interface Props {
    people?: Array<{
        email: string;
        nickName: string;
        profileImage: string;
    }>;
}

export const People = ({ people }: Props) => {
    const dispatch = useDispatch();

    const handleFriend = (email: string) => {
        console.log("친구신청: ", email);
        dispatch(friendsActionCreator.request({ friend_email: email }));
    };

    return (
        <Layout>
            <Text
                text={"사람"}
                cssObj={{
                    fontSize: "20px",
                    fontWeight: 700,
                }}
            />
            {people?.map((val: any, idx: number) => {
                if (idx === 0) {
                    return (
                        <CardLayout top={true} key={val.email}>
                            <Link
                                to={{
                                    pathname: `${routes.userInfo}${val.email}`,
                                }}
                            >
                                <UserImage src={val.profileImage} />
                            </Link>
                            <UserInfo>
                                <Link
                                    to={{
                                        pathname: `${routes.userInfo}${val.email}`,
                                    }}
                                >
                                    <Text
                                        text={val.nickName}
                                        tag={"span"}
                                        cssObj={{
                                            fontSize: "15px",
                                            fontWeight: 600,
                                        }}
                                    />
                                </Link>
                            </UserInfo>
                            <FriendBtn
                                type="button"
                                onClick={() => handleFriend(val.email)}
                            ></FriendBtn>
                        </CardLayout>
                    );
                } else {
                    return (
                        <CardLayout key={val.email}>
                            <Link
                                to={{
                                    pathname: `${routes.userInfo}${val.email}`,
                                }}
                            >
                                <UserImage src={val.profileImage} />
                            </Link>
                            <UserInfo>
                                <Link
                                    to={{
                                        pathname: `${routes.userInfo}${val.email}`,
                                    }}
                                >
                                    <Text
                                        text={val.nickName}
                                        tag={"span"}
                                        cssObj={{
                                            fontSize: "15px",
                                            fontWeight: 600,
                                        }}
                                    />
                                </Link>
                            </UserInfo>
                            <FriendBtn
                                type="button"
                                onClick={() => handleFriend(val.email)}
                            ></FriendBtn>
                        </CardLayout>
                    );
                }
            })}
        </Layout>
    );
};
