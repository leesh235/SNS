import styled from "../../styles/theme-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Text } from "../common/Text";
import { Button2 } from "../common/button/Button2";
import { Link } from "react-router-dom";
import { routes } from "../../utils/routes";
import { CommentInput } from "../common/input/CommentInput";
import { CommentBtn } from "../common/button/CommentBtn";
import { MoreIcon } from "../../assets/icon/MoreIcon";
import { CloseEventBtn } from "../common/button/CloseEventBtn";
import { HoverBtn } from "../common/button/HoverBtn";
import { setWriteComment, setCommentList } from "../../modules/action/comment";
import { CommentList } from "./CommentList";
import { setLike, setPostDetail } from "../../modules/action/post";
import theme from "../../styles/theme";

const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.color.white};
    display: flex;
    flex-direction: column;
`;

const Top = styled.article`
    width: 100%;
    height: 57px;
    display: flex;
    flex-direction: row;
`;

const Middle = styled.article`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${(props) => props.theme.color.lightGray};
`;

const Bottom = styled.article`
    width: calc(100% - 32px);
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 0 16px 8px 16px;
    padding-top: 8px;
    border-top: 1px solid ${(props) => props.theme.color.lightGray};
`;

const PostView = styled.div`
    padding: 16px 16px 12px 16px;
    width: calc(100% - 32px);
    min-height: 101px;
    height: auto;
    display: flex;
    flex-direction: column;
`;

const UserInfo = styled.div`
    width: 100%;
    height: 40px;
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

const Contents = styled.div`
    width: 100%;
    padding: 16px 0px 16px 0px;
    > span {
        word-break: break-all;
    }
`;

const OptionView = styled.div`
    width: 100%;
    height: 40px;
    margin-top: 6px;
    border-top: 1px solid ${(props) => props.theme.color.gray1};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
`;

const FlexWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
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
        background-color: ${(props) => props.theme.color.lightGray};
    }
    cursor: pointer;
`;

export const TextView = () => {
    const { postId } = useParams<{ postId: string }>();
    const dispatch = useDispatch();
    const [open, setOpen] = useState<boolean>(false);

    const { loading, data, error } = useSelector(
        (state: any) => state?.post?.postDetail
    );

    const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = async (
        e
    ) => {
        e.preventDefault();
        console.log(e.currentTarget?.comment?.value);

        dispatch(
            setWriteComment({
                postId: data.id,
                contents: e.currentTarget.comment.value,
            })
        );
        setTimeout(() => {
            dispatch(setCommentList({ postId: Number(postId) }));
        }, 50);
        e.currentTarget.comment.value = "";
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLike = () => {
        dispatch(setLike({ postId: Number(postId) }));
        setTimeout(() => {
            dispatch(setPostDetail({ postId: Number(postId) }));
        }, 50);
    };

    return (
        <Wrapper>
            <Top></Top>
            <Middle>
                <PostView>
                    <UserInfo>
                        <Link
                            to={{
                                pathname: `${routes.userInfo}${data?.writer}`,
                            }}
                        >
                            <Icon size={"40px"} src={data?.profileImage} />
                        </Link>
                        <Text
                            text={`${data?.writer}`}
                            fs={"15px"}
                            fw={600}
                            lh={"20px"}
                        />
                        <FlexWrapper>
                            <Text
                                text={`${data?.createdAt}`}
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
                        <Hover onClick={handleOpen}>
                            <MoreIcon />
                        </Hover>
                        {open && (
                            <CloseEventBtn
                                closeFunc={handleClose}
                                width={"344px"}
                                height={"auto"}
                                top={"48px"}
                                right={"0px"}
                            >
                                <HoverBtn text={"게시물 수정"} />
                                <HoverBtn text={"게시물 삭제"} />
                            </CloseEventBtn>
                        )}
                    </UserInfo>
                    <Contents>
                        <Text
                            tag={"span"}
                            text={data?.contents}
                            fs={"12px"}
                            lh={"16px"}
                        />
                    </Contents>
                </PostView>
                <OptionView>
                    <Button2
                        text={"좋아요"}
                        fc={data.likeStatus && theme.color.seaBule}
                        width={"90%"}
                        onClick={handleLike}
                    />
                    <CommentBtn width={"90%"} />
                    <Button2 text={"공유하기"} width={"90%"} />
                </OptionView>
            </Middle>
            <Bottom>
                <CommentList />
                <CommentInput
                    image={data?.profileImage}
                    writer={data?.writer}
                    onSubmit={handleOnSubmit}
                />
            </Bottom>
        </Wrapper>
    );
};
