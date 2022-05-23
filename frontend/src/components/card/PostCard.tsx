import styled from "../../styles/theme-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../utils/routes";
import { Text } from "../common/Text";
import { Button2 } from "../common/button/Button2";
import { MoreIcon } from "../../assets/icon/MoreIcon";
import { WritePost } from "../modal/WritePost";
import { CloseEventBtn } from "../common/button/CloseEventBtn";
import { HoverBtn } from "../common/button/HoverBtn";
import { useDispatch } from "react-redux";
import { setDeletePost, setLike } from "../../modules/action/post";
import theme from "../../styles/theme";

const Wrapper = styled.article`
    width: 100%;
    max-width: 590px;
    height: auto;
    border-radius: 8px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 4px 8px rgb(0 0 0 / 10%);
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

const ImagesWrapper = styled.div`
    width: 100%;
    height: auto;
    overflow-x: auto;
`;

const ImageSlider = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    > :nth-child(n + 2) {
        margin-left: 5px;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 400px;
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
    getPosts?: any;
    post: {
        postId: number;
        userId: string;
        writer: string;
        contents: string;
        createdAt: string;
        images?: Array<String>;
        profileImage?: string;
        likequantity: number;
        commentquantity: number;
        likeStatus: boolean;
    };
}

export const PostCard = ({ getPosts, post }: Props) => {
    const dispatch = useDispatch();
    const [openBtn, setOpenBtn] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);
    console.log(post.likeStatus);
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
                "휴지통으로 보내시겠습니까?(30일 후에 영구 삭제됩니다.)"
            )
        ) {
            dispatch(setDeletePost({ postId: post?.postId }));
        }
    };

    const handleLike = () => {
        dispatch(setLike({ postId: post.postId }));
        getPosts();
    };

    useEffect(() => {}, []);

    return (
        <>
            <Wrapper>
                <TopWrapper>
                    <Link
                        to={{
                            pathname: `${routes.userInfo}${post?.writer}`,
                        }}
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
                            text={"시간"}
                            fs={"12px"}
                            lh={"16px"}
                            tag={"span"}
                            width={"auto"}
                        />
                    </FlexWrapper>
                    <Hover onClick={handleBtnOpen}>
                        <MoreIcon />
                    </Hover>
                    {openBtn && (
                        <CloseEventBtn
                            closeFunc={handleBtnClose}
                            width={"344px"}
                            height={"auto"}
                            top={"57px"}
                            right={"16px"}
                        >
                            <HoverBtn
                                text={"게시물 수정"}
                                onClick={handleModalOpen}
                            />
                            <HoverBtn
                                text={"게시물 삭제"}
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
                <Link to={{ pathname: `${routes.detail}${post?.postId}` }}>
                    <ImagesWrapper>
                        <ImageSlider>
                            {post?.images &&
                                post?.images.map((val, idx) => {
                                    return <Image key={idx} src={`${val}`} />;
                                })}
                        </ImageSlider>
                    </ImagesWrapper>
                </Link>
                <Quantity>
                    <Text
                        text={`좋아요 ${post.likequantity}개`}
                        fs={"15px"}
                        lh={"20px"}
                        margin={"0 16px"}
                        width={"auto"}
                    />
                    <Text
                        text={`댓글 ${post.commentquantity}개`}
                        fs={"15px"}
                        lh={"20px"}
                        margin={"0 16px"}
                        width={"auto"}
                    />
                </Quantity>
                <BottomWrapper>
                    <Button2
                        text={"좋아요"}
                        width={"100%"}
                        onClick={handleLike}
                        fc={post.likeStatus ? theme.color.seaBule : ""}
                    />
                    <Button2 text={"댓글 달기"} width={"100%"} />
                    <Button2 text={"공유하기"} width={"100%"} />
                </BottomWrapper>
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
