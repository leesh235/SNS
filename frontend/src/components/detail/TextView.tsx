import styled, { css } from "../../styles/theme-components";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useSelector } from "react-redux";
//functions
import { routes } from "../../utils/routes";
import theme from "../../styles/theme";
import { getDate } from "../../utils/dateUtil";
import { useCommentFunc } from "../../hooks/post/useCommentFunc";
import { usePostFunc } from "../../hooks/post/usePostFunc";
import { useResizeEl } from "../../hooks/common/useResizeEl";
//components
import { Text } from "../common/Text";
import { HoverButton } from "../common/button/HoverButton";
import { CommentInput } from "../main/CommentInput";
import { Label } from "../common/Label";
import { CommentController } from "../main/CommentController";

const Layout = styled.section`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.color.white};
    display: flex;
    flex-direction: column;
    position: relative;
    ${(props) =>
        props.theme.media.mobileU(`
        height: 100vh;
    `)}
    ${(props) =>
        props.theme.media.mobileD(`
        min-height: 40vh;
    `)}
`;

const TargetLayout = styled.section<{ isResize: boolean }>`
    width: 100%;
    background-color: ${(props) => props.theme.color.white};
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 6px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${(prosp) => prosp.theme.color.lightGray};
        border-radius: 3px;
    }
    ::-webkit-scrollbar-track {
    }
    ${(props) =>
        props.isResize &&
        css`
            margin-bottom: 60px;
        `}
`;

const Middle = styled.article`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    ${(props) =>
        props.theme.media.mobileU(`
        margin-top: 57px;
    `)}
`;

const Bottom = styled.article`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;

    padding: 8px 5px 0 5px;
    border-top: 1px solid ${(props) => props.theme.color.lightGray};
`;

const PostView = styled.div`
    padding: 16px 16px 12px 16px;
    width: 100%;
    min-height: 101px;
    height: auto;
    display: flex;
    flex-direction: column;
`;

const UserInfo = styled.div`
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

const CommentLayout = styled.div<{ isResize: boolean }>`
    padding: 0 5px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    ${(props) =>
        props.isResize
            ? css`
                  background-color: ${props.theme.color.white};
                  position: fixed;
                  bottom: 0;
                  right: 0;
                  ${props.theme.media.mobileU(`width:360px;`)}
                  ${props.theme.media.mobileD(`width:100vw`)}
              `
            : css`
                  width: 100%;
              `}
`;

export const TextView = ({ post }: { post: any }) => {
    const targetRef = useRef(null);

    const { isResize } = useResizeEl({ target: targetRef });

    const { loading, detail, error } = useSelector((state: any) => state.post);

    const { handleLike } = usePostFunc(post.id);
    const commentWrite = useCommentFunc(post.id).handleWrite;

    if (!detail) return <></>;
    return (
        <Layout>
            <TargetLayout ref={targetRef} isResize={isResize}>
                <Middle>
                    <PostView>
                        <UserInfo>
                            <Link
                                to={{
                                    pathname: `${routes.userInfo}${detail?.email}`,
                                }}
                            >
                                <Icon
                                    size={"40px"}
                                    src={detail?.profileImage}
                                />
                            </Link>
                            <Text
                                tag="span"
                                text={`${detail?.nickName}`}
                                cssObj={{ fontSize: "15px", fontWeight: 600 }}
                            />
                            <Text
                                text={getDate(detail?.creatAt)}
                                tag={"span"}
                            />
                            <div></div>
                        </UserInfo>
                        <Contents>
                            <Text text={detail?.contents} tag={"span"} />
                        </Contents>
                    </PostView>
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
                    <OptionView>
                        <HoverButton
                            text={"좋아요"}
                            cssObj={{
                                width: "auto",
                                fontColor:
                                    detail?.likeStatus && theme.color.seaBule,
                            }}
                            onClick={handleLike}
                        />
                        <Label
                            width={"auto"}
                            htmlFor={`${detail.id}_comment`}
                        />
                        <HoverButton
                            text={"공유하기"}
                            cssObj={{ width: "auto" }}
                        />
                    </OptionView>
                </Middle>
                <Bottom>
                    {post && (
                        <CommentController
                            postId={detail.id}
                            commentQuantity={detail.commentQuantity}
                        />
                    )}
                </Bottom>
            </TargetLayout>
            <CommentLayout isResize={isResize}>
                <CommentInput label={detail.id} onSubmit={commentWrite} />
            </CommentLayout>
        </Layout>
    );
};
