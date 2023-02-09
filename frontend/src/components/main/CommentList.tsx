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

const CommentButton = styled.span`
    width: auto;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
`;

interface Props {
    postId: number;
}

export const CommentList = ({ postId }: Props) => {
    const user = useSelector((state: any) => state.profile.simple?.data);

    const { modal, handleModal } = useModal();

    const { loading, data, error } = useGetComment(postId);

    if (Object.keys(data).length === 0) return <></>;
    return (
        <Layout>
            {!modal ? (
                <CommentButton onClick={handleModal}>답글보기</CommentButton>
            ) : (
                <>
                    <CommentView>
                        {Object.keys(data)?.map((val: any) => (
                            <Comment key={val} value={data[val]} user={user} />
                        ))}
                    </CommentView>
                </>
            )}
        </Layout>
    );
};
