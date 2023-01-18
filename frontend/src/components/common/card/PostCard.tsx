import styled from "../../../styles/theme-components";
import theme from "../../../styles/theme";
import { RefObject } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//functions
import { routes } from "../../../utils/routes";
import { commentActionCreator } from "../../../modules/action/comment";
import { useGetDetail } from "../../../hooks/common/useGetDetail";
import { useModal } from "../../../hooks/common/useModal";
import { usePostFunc } from "../../../hooks/post/usePostFunc";
import { getDate } from "../../../utils/dateUtil";
//components
import { WritePost } from "./WritePost";
import { Text } from "../Text";
import { HoverButton } from "../button/HoverButton";
import { Label } from "../Label";
import { CommentInput } from "../input/CommentInput";
import { ModalLayout } from "../styles/ModalLayout";
import { ImageLayout } from "../Image/ImageLayout";
import { SeeMoreLayout } from "../SeeMoreLayout";

const Layout = styled.article`
    width: 100%;
    max-width: 590px;
    height: auto;
    padding: 10px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 4px 8px rgb(0 0 0 / 10%);
    display: flex;
    flex-direction: column;
    align-items: center;
    > :nth-last-child(1) {
        margin: 10px 0;
    }
`;

const WriterInfo = styled.div`
    width: 100%;
    height: 40px;
    margin-bottom: 15px;
    display: grid;
    grid-template-columns: 40px auto 36px;
    grid-template-rows: repeat(2, 20px);
    column-gap: 10px;
    align-items: center;
    > :nth-child(1) {
        grid-column: 1 / span 1;
        grid-row: 1 / span 2;
    }
    > :nth-child(4) {
        grid-column: 3 / span 1;
        grid-row: 1 / span 2;
    }
`;

const Contents = styled.div`
    width: 100%;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
`;

const ButtonLayout = styled.div`
    width: 100%;
    height: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    margin: 0 10px;
    border-top: 1px solid ${(props) => props.theme.color.lightGray};
    border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
`;

const Quantity = styled.div`
    width: 100%;
    height: 22px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const Icon = styled.img<{ size: string; margin?: string }>`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    margin: ${(props) => props.margin};
    border-radius: 20px;
    cursor: pointer;
`;

const Hover = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        background-color: ${(props) => props.theme.color.gray1};
    }
    cursor: pointer;
`;

interface Props {
    postId: number;
    endView?: RefObject<HTMLDivElement> | undefined;
}

export const PostCard = ({ postId, endView = undefined }: Props) => {
    const dispatch = useDispatch();

    const user = useSelector((state: any) => state?.profile?.simple?.data);

    const { post } = useGetDetail("allPosts", postId);

    const modifyModal = useModal();

    const { handleLike, handleDelete } = usePostFunc(postId);

    const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = async (
        e
    ) => {
        e.preventDefault();
        console.log(e.currentTarget?.comment?.value);

        dispatch(
            commentActionCreator.write({
                postId: postId,
                contents: e.currentTarget.comment.value,
            })
        );
        // setTimeout(() => {
        //     dispatch(setCommentList({ postId: Number(postId) }));
        // }, 500);
        e.currentTarget.comment.value = "";
    };

    return (
        <>
            <Layout ref={endView}>
                <WriterInfo>
                    <Link
                        to={{
                            pathname: `${routes.userInfo}${post?.id}`,
                        }}
                        state={post?.userId}
                    >
                        <Icon size={"40px"} src={post?.profileImage} />
                    </Link>
                    <Text
                        text={`${post?.writer}`}
                        cssObj={{
                            fontSize: "15px",
                            fontWeight: 600,
                        }}
                    />
                    <Text
                        text={getDate(post.createAt)}
                        tag={"span"}
                        cssObj={{
                            fontSize: "12px",
                        }}
                    />
                    {post?.userId === user?.email && (
                        <SeeMoreLayout>
                            <HoverButton
                                text={"게시물 수정"}
                                onClick={modifyModal.handleModal}
                            />
                            <HoverButton
                                text={"게시물 삭제"}
                                onClick={handleDelete}
                            />
                        </SeeMoreLayout>
                    )}
                </WriterInfo>

                <Contents>
                    <Text
                        text={`${post?.contents}`}
                        cssObj={{
                            fontWeight: 600,
                            fontSize: "15px",
                            margin: "0 16px",
                        }}
                    />
                    {post?.images && (
                        <ImageLayout
                            post={{ postId: post.postId, images: post.images }}
                        />
                    )}
                </Contents>

                <Quantity>
                    <Text
                        text={`좋아요 ${post?.likeQuantity}개`}
                        tag={"span"}
                        cssObj={{
                            width: "auto",
                            fontSize: "15px",
                            margin: "0 16px",
                        }}
                    />
                    <Text
                        text={`댓글 ${post?.commentQuantity}개`}
                        tag={"span"}
                        cssObj={{
                            width: "auto",
                            fontSize: "15px",
                            margin: "0 16px",
                        }}
                    />
                </Quantity>

                <ButtonLayout>
                    <HoverButton
                        text={"좋아요"}
                        onClick={handleLike}
                        cssObj={{
                            fontColor: post?.likeStatus && theme.color.seaBule,
                        }}
                    />
                    <Label />
                    <HoverButton text={"공유하기"} />
                </ButtonLayout>

                <CommentInput
                    image={user?.profileImage}
                    writer={user?.email}
                    onSubmit={handleOnSubmit}
                    width={"calc(100% - 20px)"}
                />
            </Layout>
            {modifyModal.modal && (
                <ModalLayout onClosClick={modifyModal.handleModal}>
                    <WritePost
                        closeFunc={modifyModal.handleModal}
                        post={post}
                    />
                </ModalLayout>
            )}
        </>
    );
};