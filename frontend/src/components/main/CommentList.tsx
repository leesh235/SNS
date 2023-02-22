import styled from "../../styles/theme-components";
import { useSelector } from "react-redux";
//functions
import { useGetComment } from "../../hooks/post/useGetComment";
import { useModal } from "../../hooks/common/useModal";
//components
import { Comment } from "./Comment";

const Layout = styled.section`
    width: 100%;
    height: auto;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const CommentView = styled.ul`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`;

const CommentLayout = styled.section`
    width: 100%;
    height: auto;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

interface Props {
    postId: number;
    take: number;
}

export const CommentList = ({ postId, take }: Props) => {
    const user = useSelector((state: any) => state.profile.simple?.data);

    const { loading, data, error } = useGetComment(postId, take);

    if (loading && take === 6) return <CommentLayout></CommentLayout>;
    return (
        <CommentLayout>
            <CommentView>
                {Object.keys(data)?.map((val: any) => (
                    <Comment key={val} value={data[val]} user={user} />
                ))}
            </CommentView>
        </CommentLayout>
    );
};
