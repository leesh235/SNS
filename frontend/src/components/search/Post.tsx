import styled from "../../styles/theme-components";
import { Link } from "react-router-dom";
//functions
import { routes } from "../../utils/routes";
import { getDate } from "../../utils/dateUtil";
//components
import { Text } from "../common/Text";

const Layout = styled.article`
    max-width: 680px;
    width: 100%;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    background-color: ${(props) => props.theme.color.white};
    margin-bottom: 16px;
`;

const Title = styled.div`
    width: 100%;
    height: 70px;
    padding: 16px;
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

const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.color.gray};
`;

const Contents = styled.div`
    width: 100%;
    padding: 16px;
    height: 70px;
    > a {
        display: block;
        height: 100%;
    }
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
                    <Layout key={val.id}>
                        <Title>
                            <Link
                                to={{
                                    pathname: `${routes.userInfo}${val.user.email}`,
                                }}
                            >
                                <UserImage src={val.user.profileImage} />
                            </Link>
                            <Link
                                to={{
                                    pathname: `${routes.userInfo}${val.user.email}`,
                                }}
                            >
                                <Text
                                    text={val.user.nickName}
                                    tag={"span"}
                                    cssObj={{
                                        fontSize: "15px",
                                        fontWeight: 600,
                                    }}
                                />
                            </Link>
                        </Title>
                        <Line />
                        <Contents>
                            <Link
                                to={{
                                    pathname: `${routes.detail}${val.id}`,
                                }}
                            >
                                {getDate(val.createdAt)}-{val.contents}
                            </Link>
                        </Contents>
                    </Layout>
                );
            })}
        </>
    );
};
