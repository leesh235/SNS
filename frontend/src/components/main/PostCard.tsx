import styled from "../../styles/theme-components";
import theme from "../../styles/theme";
import React, { RefObject, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//functions
import { routes } from "../../utils/routes";
import { useGetDetail } from "../../hooks/common/useGetDetail";
import { useModal } from "../../hooks/common/useModal";
import { usePostFunc } from "../../hooks/post/usePostFunc";
import { getDate } from "../../utils/dateUtil";
import { useCommentFunc } from "../../hooks/post/useCommentFunc";
import { ListType } from "../../types/lib/post";
//components
import { WritePost } from "../common/card/WritePost";
import { Text } from "../common/Text";
import { HoverButton } from "../common/button/HoverButton";
import { Label } from "../common/Label";
import { CommentInput } from "./CommentInput";
import { ModalLayout } from "../common/styles/ModalLayout";
import { ImageLayout } from "../common/Image/ImageLayout";
import { SeeMoreLayout } from "../common/SeeMoreLayout";
import { CommentList } from "./CommentList";
import { MoreIcon } from "../../assets/icon/MoreIcon";

const Layout = styled.article`
    width: calc(100% -20px);
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

interface Props extends ListType {
    postId: number;
    endView?: RefObject<HTMLDivElement> | undefined;
}

const Component = ({ postId, type, endView = undefined }: Props) => {
    const user = useSelector((state: any) => state?.profile?.simple?.data);

    const { post } = useGetDetail({ type, id: postId });

    const modifyModal = useModal();

    const { handleLike, handleDelete, handleWrite } = usePostFunc(postId);

    const commentFunc = useCommentFunc(postId);

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
                        text={getDate(post?.createAt)}
                        tag={"span"}
                        cssObj={{
                            fontSize: "12px",
                        }}
                    />
                    {post?.userId === user?.email && (
                        <SeeMoreLayout>
                            <MoreIcon />
                            <HoverButton
                                text={"게시물 수정"}
                                onClick={modifyModal.handleModal}
                                cssObj={{ textAlign: "left" }}
                            />
                            <HoverButton
                                text={"게시물 삭제"}
                                onClick={handleDelete}
                                cssObj={{ textAlign: "left" }}
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
                    <Label htmlFor={`${post?.id}_comment`} />
                    <HoverButton text={"공유하기"} />
                </ButtonLayout>

                <CommentList postId={post?.id} />

                <CommentInput
                    label={post?.id}
                    onSubmit={commentFunc.handleWrite}
                    width={"calc(100% - 20px)"}
                />
            </Layout>
            {modifyModal.modal && (
                <ModalLayout onCloseClick={modifyModal.handleModal}>
                    <WritePost
                        closeFunc={modifyModal.handleModal}
                        onWriteSubmit={handleWrite}
                        post={post}
                    />
                </ModalLayout>
            )}
        </>
    );
};

export const PostCard = React.memo(Component);
