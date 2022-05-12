import styled from "../../styles/theme-components";
import { Link } from "react-router-dom";
import { Text } from "../common/Text";
import { routes } from "../../utils/routes";

const Wrapper = styled.article`
    max-width: 680px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 6px;
    background-color: ${(props) => props.theme.color.white};
    margin-bottom: 16px;
`;

const Title = styled.div`
    width: calc(100% - 32px);
    height: 48px;
    padding: 16px;
    border-bottom: 1px solid ${(props) => props.theme.color.gray};
    display: grid;
    grid-template-columns: 60px auto 48px;
    align-items: center;
`;

const UserImage = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 24px;
    margin-right: 12px;
    cursor: pointer;
`;

const Contents = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
`;

interface Props {
    post?: Array<{
        id: number;
        contents: string;
        createdAt: string;
        user: {
            email: string;
            nickName: string;
            profileImage: string;
        };
    }>;
}

export const Post = ({ post }: Props) => {
    return (
        <>
            {post?.map((val: any, idx: number) => {
                return (
                    <Wrapper key={val.id}>
                        <Title>
                            <Link
                                to={{
                                    pathname: `${routes.userInfo}${val.email}`,
                                }}
                            >
                                <UserImage src={val.profileImage} />
                            </Link>
                            <Link
                                to={{
                                    pathname: `${routes.userInfo}${val.email}`,
                                }}
                            >
                                <Text
                                    tag={"span"}
                                    text={val.user.nickName}
                                    fs={"15px"}
                                    fw={600}
                                    lh={"20px"}
                                    width={"auto"}
                                />
                            </Link>
                        </Title>
                        <Contents>
                            {val.createdAt}-{val.contents}
                        </Contents>
                    </Wrapper>
                );
            })}
        </>
    );
};
