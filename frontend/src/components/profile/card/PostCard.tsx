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
import { MoreIcon } from "../../../assets/icon/MoreIcon";
import { WritePost } from "../../modal/WritePost";
import { Text } from "../../common/Text";
import { Button2 } from "../../common/button/Button2";
import { CloseEventBtn } from "../../common/button/CloseEventBtn";
import { CommentBtn } from "../../common/button/CommentBtn";
import { CommentInput } from "../../common/input/CommentInput";
import { HoverBtn } from "../../common/button/HoverBtn";
import { ModalLayout } from "../../common/styles/ModalLayout";

const Layout = styled.article`
    width: 100%;
    max-width: 590px;
    height: auto;
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

const TopLayout = styled.div`
    width: calc(100% - 32px);
    height: 40px;
    padding: 12px 16px 10px 16px;
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
    position: relative;
`;

const FlexLayout = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ContentsLayout = styled.div`
    width: 100%;
    padding: 4px 0px 16px 0px;
`;

const ImagesLayout = styled.div<{ cnt?: any }>`
    width: 100%;
    height: ${(props) => (props.cnt > 1 ? "590px" : "100%")};
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: space-between;
    position: relative;
`;

const Image = styled.img<{ cnt?: any }>`
    width: ${(props) => `calc(${99 / props.cnt}%)`};
    height: ${(props) => `calc(${99 / props.cnt}%)`};
    max-height: 500px;
`;

const ImageShadow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(99% / 2);
    height: calc(99% / 2);
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: rgba(96, 103, 112, 0.5);
`;

const BottomLayout = styled.div`
    width: calc(100% - 20px);
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
    width: calc(100% - 20px);
    height: 22px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
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

    const user = useSelector((state: any) => state?.user?.loginInfo?.data);

    const { post } = useGetDetail("allPosts", postId);

    const buttonModal = useModal();
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
                <TopLayout>
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
                    <FlexLayout>
                        <Text
                            text={getDate(post.createAt)}
                            tag={"span"}
                            cssObj={{
                                fontSize: "12px",
                            }}
                        />
                    </FlexLayout>
                    {post?.userId === user?.email ? (
                        <Hover onClick={buttonModal.handleModal}>
                            <MoreIcon />
                        </Hover>
                    ) : (
                        <div></div>
                    )}
                    {buttonModal.modal && (
                        <CloseEventBtn
                            closeFunc={buttonModal.handleModal}
                            width={"344px"}
                            height={"auto"}
                            top={"57px"}
                            right={"16px"}
                            zIndenx={"9"}
                        >
                            <HoverBtn
                                text={"게시물 수정"}
                                onClick={modifyModal.handleModal}
                            />
                            <HoverBtn
                                text={"게시물 삭제"}
                                onClick={handleDelete}
                            />
                        </CloseEventBtn>
                    )}
                </TopLayout>
                <ContentsLayout>
                    <Text
                        text={`${post?.contents}`}
                        cssObj={{
                            fontWeight: 600,
                            fontSize: "15px",
                            margin: "0 16px",
                        }}
                    />
                </ContentsLayout>
                <Link
                    to={{
                        pathname: `${routes.detail}${post?.postId}`,
                    }}
                    style={{
                        width: "100%",
                        height: "100%",
                        maxHeight: "590px",
                    }}
                >
                    {post?.images && (
                        <ImagesLayout cnt={post?.images.length}>
                            {post?.images.map((val: any, idx: number) => {
                                if (idx < 4)
                                    return (
                                        <Image
                                            key={val.id}
                                            cnt={
                                                post?.images &&
                                                post?.images?.length > 1
                                                    ? 2
                                                    : 1
                                            }
                                            src={`${val.url}`}
                                        />
                                    );
                            })}
                            {post?.images.length > 4 && (
                                <ImageShadow>
                                    <Text
                                        text={`+${post?.images.length - 4}장`}
                                        tag={"span"}
                                        cssObj={{
                                            fontWeight: 550,
                                            fontColor: theme.color.white,
                                            fontSize: "45px",
                                        }}
                                    />
                                </ImageShadow>
                            )}
                        </ImagesLayout>
                    )}
                </Link>
                <Quantity>
                    <Text
                        text={`좋아요 ${post?.likeQuantity}개`}
                        tag={"span"}
                        cssObj={{
                            fontSize: "15px",
                            margin: "0 16px",
                        }}
                    />
                    <Text
                        text={`댓글 ${post?.commentQuantity}개`}
                        tag={"span"}
                        cssObj={{
                            fontSize: "15px",
                            margin: "0 16px",
                        }}
                    />
                </Quantity>
                <BottomLayout>
                    <Button2
                        text={"좋아요"}
                        width={"100%"}
                        onClick={handleLike}
                        fc={post?.likeStatus ? theme.color.seaBule : ""}
                    />
                    <CommentBtn />
                    <Button2 text={"공유하기"} width={"100%"} />
                </BottomLayout>

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
