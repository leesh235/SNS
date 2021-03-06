import styled from "../../../styles/theme-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../utils/routes";
import { Text } from "../../common/Text";
import { Button2 } from "../../common/button/Button2";
import { MoreIcon } from "../../../assets/icon/MoreIcon";
import { WritePost } from "../../modal/WritePost";
import { CloseEventBtn } from "../../common/button/CloseEventBtn";
import { CommentBtn } from "../../common/button/CommentBtn";
import { CommentInput } from "../../common/input/CommentInput";
import { HoverBtn } from "../../common/button/HoverBtn";
import { useDispatch, useSelector } from "react-redux";
import { setDeletePost, setLike } from "../../../modules/action/post";
import { setWriteComment } from "../../../modules/action/comment";
import theme from "../../../styles/theme";

const Wrapper = styled.article`
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

const TopWrapper = styled.div`
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

const FlexWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ContentsWrapper = styled.div`
    width: 100%;
    padding: 4px 0px 16px 0px;
`;

const ImagesWrapper = styled.div<{ cnt?: any }>`
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

const BottomWrapper = styled.div`
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
}

export const PostCard = ({ postId }: Props) => {
    const dispatch = useDispatch();
    const [openBtn, setOpenBtn] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);

    const user = useSelector((state: any) => state?.user?.loginInfo?.data);

    const post = useSelector(
        (state: any) => state?.post?.postDetails?.data?.[`${postId}`]
    );

    const handleBtnOpen = () => {
        setOpenBtn(true);
    };

    const handleBtnClose = () => {
        if (openBtn) setOpenBtn(false);
    };

    const handleModalOpen = () => {
        setOpenModal(true);
    };

    const handleModalClose: React.MouseEventHandler = (e) => {
        if (e.target !== e.currentTarget) return;
        if (openModal) setOpenModal(false);
    };

    const handleDeleteBtn = () => {
        if (
            window.confirm(
                "??????????????? ??????????????????????(30??? ?????? ?????? ???????????????.)"
            )
        ) {
            dispatch(setDeletePost({ postId }));
        }
    };

    const handleLike = () => {
        dispatch(setLike({ postId }));
    };

    const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = async (
        e
    ) => {
        e.preventDefault();
        console.log(e.currentTarget?.comment?.value);

        dispatch(
            setWriteComment({
                postId: postId,
                contents: e.currentTarget.comment.value,
            })
        );
        // setTimeout(() => {
        //     dispatch(setCommentList({ postId: Number(postId) }));
        // }, 500);
        e.currentTarget.comment.value = "";
    };

    useEffect(() => {}, []);

    return (
        <>
            <Wrapper>
                <TopWrapper>
                    <Link
                        to={{
                            pathname: `${routes.userInfo}${post?.userId}`,
                        }}
                        state={post?.userId}
                    >
                        <Icon size={"40px"} src={post?.profileImage} />
                    </Link>
                    <Text
                        text={`${post?.writer}`}
                        fs={"15px"}
                        fw={600}
                        lh={"20px"}
                    />
                    <FlexWrapper>
                        <Text
                            text={`${post?.createdAt}`}
                            fs={"12px"}
                            lh={"16px"}
                            tag={"span"}
                            width={"auto"}
                        />
                        <Text
                            text={"??????"}
                            fs={"12px"}
                            lh={"16px"}
                            tag={"span"}
                            width={"auto"}
                        />
                    </FlexWrapper>
                    {post?.userId === user?.email ? (
                        <Hover onClick={handleBtnOpen}>
                            <MoreIcon />
                        </Hover>
                    ) : (
                        <div></div>
                    )}
                    {openBtn && (
                        <CloseEventBtn
                            closeFunc={handleBtnClose}
                            width={"344px"}
                            height={"auto"}
                            top={"57px"}
                            right={"16px"}
                            zIndenx={"9"}
                        >
                            <HoverBtn
                                text={"????????? ??????"}
                                onClick={handleModalOpen}
                            />
                            <HoverBtn
                                text={"????????? ??????"}
                                onClick={handleDeleteBtn}
                            />
                        </CloseEventBtn>
                    )}
                </TopWrapper>
                <ContentsWrapper>
                    <Text
                        text={`${post?.contents}`}
                        fs={"15px"}
                        fw={600}
                        lh={"20px"}
                        margin={"0 16px"}
                    />
                </ContentsWrapper>
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
                        <ImagesWrapper cnt={post?.images.length}>
                            {post?.images.map((val: string, idx: number) => {
                                if (idx < 4)
                                    return (
                                        <Image
                                            key={idx}
                                            cnt={
                                                post?.images &&
                                                post?.images?.length > 1
                                                    ? 2
                                                    : 1
                                            }
                                            src={`${val}`}
                                        />
                                    );
                            })}
                            {post?.images.length > 4 && (
                                <ImageShadow>
                                    <Text
                                        text={`+${post?.images.length - 4}???`}
                                        fs={"45px"}
                                        fw={550}
                                        width={"auto"}
                                        fc={theme.color.white}
                                    />
                                </ImageShadow>
                            )}
                        </ImagesWrapper>
                    )}
                </Link>
                <Quantity>
                    <Text
                        text={`????????? ${post?.likequantity}???`}
                        fs={"15px"}
                        lh={"20px"}
                        margin={"0 16px"}
                        width={"auto"}
                    />
                    <Text
                        text={`?????? ${post?.commentquantity}???`}
                        fs={"15px"}
                        lh={"20px"}
                        margin={"0 16px"}
                        width={"auto"}
                    />
                </Quantity>
                <BottomWrapper>
                    <Button2
                        text={"?????????"}
                        width={"100%"}
                        onClick={handleLike}
                        fc={post?.likeStatus ? theme.color.seaBule : ""}
                    />
                    <CommentBtn />
                    <Button2 text={"????????????"} width={"100%"} />
                </BottomWrapper>

                <CommentInput
                    image={user?.profileImage}
                    writer={user?.email}
                    onSubmit={handleOnSubmit}
                    width={"calc(100% - 20px)"}
                />
            </Wrapper>
            {openModal && (
                <WritePost
                    closeFunc={handleModalClose}
                    setClose={setOpenModal}
                    post={post}
                />
            )}
        </>
    );
};
