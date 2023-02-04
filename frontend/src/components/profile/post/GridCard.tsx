import styled from "../../../styles/theme-components";
import { Link } from "react-router-dom";
import { useEffect, RefObject } from "react";
import { useSelector } from "react-redux";
import { Avatar } from "../../common/Image/Avatar";
import { Text } from "../../common/Text";
import { routes } from "../../../utils/routes";
import { useGetDetail } from "../../../hooks/common/useGetDetail";
import { getDate } from "../../../utils/dateUtil";

const Layout = styled.div`
    width: 240px;
    height: 210px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 4px 8px rgb(0 0 0 / 10%);
`;

const ImageLayout = styled.div<{ image: string }>`
    width: 100%;
    height: 154px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background-color: ${(props) => props.theme.color.lightGray};
    background-image: ${(props) => `url(${props.image})`};
    cursor: pointer;
`;

const ContentsLayout = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
`;

const Contents = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

interface Props {
    postId: number;
    endView?: RefObject<HTMLDivElement> | undefined;
}

export const GridCard = ({ postId, endView }: Props) => {
    const { post } = useGetDetail({ type: "myPosts", id: postId });

    return (
        <Layout ref={endView}>
            <ImageLayout image={post.images[0]}></ImageLayout>
            <ContentsLayout>
                <Link
                    to={{
                        pathname: `${routes.userInfo}${post?.userId}`,
                    }}
                    state={post?.userId}
                >
                    <Avatar radius={40} src={post?.profileImage} />
                </Link>
                <Contents>
                    <Text text={`${post?.contents?.slice(0, 43)}...`} />
                    <Text text={getDate(post?.createAt)} />
                </Contents>
            </ContentsLayout>
        </Layout>
    );
};
