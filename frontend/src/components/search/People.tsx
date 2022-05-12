import styled from "../../styles/theme-components";
import { Link } from "react-router-dom";
import { Text } from "../common/Text";
import { routes } from "../../utils/routes";
import { useDispatch } from "react-redux";
import { setRequest } from "../../modules/action/friends";

const Wrapper = styled.article`
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

const CardWrapper = styled.div<{ top?: boolean }>`
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
        dispatch(setRequest({ friend_email: email }));
    };

    return (
        <Wrapper>
            <Text text={"사람"} fs={"20px"} fw={700} lh={"24px"} />
            {people?.map((val: any, idx: number) => {
                if (idx === 0) {
                    return (
                        <CardWrapper top={true} key={val.email}>
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
                                        tag={"span"}
                                        text={val.nickName}
                                        fs={"15px"}
                                        fw={600}
                                        lh={"20px"}
                                        width={"auto"}
                                    />
                                </Link>
                            </UserInfo>
                            <FriendBtn
                                type="button"
                                onClick={() => handleFriend(val.email)}
                            ></FriendBtn>
                        </CardWrapper>
                    );
                } else {
                    return (
                        <CardWrapper key={val.email}>
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
                                        tag={"span"}
                                        text={val.nickName}
                                        fs={"15px"}
                                        fw={600}
                                        lh={"20px"}
                                        width={"auto"}
                                    />
                                </Link>
                            </UserInfo>
                            <FriendBtn
                                type="button"
                                onClick={() => handleFriend(val.email)}
                            ></FriendBtn>
                        </CardWrapper>
                    );
                }
            })}
        </Wrapper>
    );
};
