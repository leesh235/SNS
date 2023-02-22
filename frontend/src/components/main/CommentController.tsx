import styled from "../../styles/theme-components";
import { useState } from "react";
//functions
import { useModal } from "../../hooks/common/useModal";
//components
import { CommentList } from "./CommentList";

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
    > :nth-child(2) {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`;

const CommentButton = styled.span`
    /* width: auto; */
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
`;

interface Props {
    postId: number;
    commentQuantity: number;
}

export const CommentController = ({ postId, commentQuantity }: Props) => {
    const [mode, setMode] = useState<boolean>(false);

    const [take, setTake] = useState<number>(0);

    const handleSeemoreClick = () => {
        if (commentQuantity <= take && take !== 0) return;
        if (take === 0) setMode(true);
        setTake((prev) => prev + 6);
    };

    const handleCloseClick = () => {
        setMode(false);
        setTake(0);
    };

    if (commentQuantity === 0) return <></>;
    return (
        <Layout>
            {!mode ? (
                <CommentButton onClick={handleSeemoreClick}>
                    답글보기
                </CommentButton>
            ) : (
                <CommentLayout>
                    <CommentList postId={postId} take={take} />
                    <div>
                        <CommentButton onClick={handleSeemoreClick}>
                            더 보기
                        </CommentButton>
                        <CommentButton onClick={handleCloseClick}>
                            답글닫기
                        </CommentButton>
                    </div>
                </CommentLayout>
            )}
        </Layout>
    );
};
