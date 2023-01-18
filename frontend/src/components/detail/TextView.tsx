import styled from "../../styles/theme-components";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//functions
import { routes } from "../../utils/routes";
import { commentActionCreator } from "../../modules/action/comment";
import { postActionCreator } from "../../modules/action/post";
import theme from "../../styles/theme";
import { getDate } from "../../utils/dateUtil";
//components
import { Text } from "../common/Text";
import { HoverButton } from "../common/button/HoverButton";
import { CommentInput } from "../common/input/CommentInput";
import { Label } from "../common/Label";
import { CommentList } from "./CommentList";
import { SeeMoreLayout } from "../common/SeeMoreLayout";
import { useEffect } from "react";

const Layout = styled.section`
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

const FlexLayout = styled.div`
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

export const TextView = ({ postId }: { postId?: string }) => {
    // const { postId } = useParams<{ postId: string }>();
    const dispatch = useDispatch();

    const { loading, data, error } = useSelector(
        (state: any) => state.post?.detail
    );

    const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = async (
        e
    ) => {
        e.preventDefault();
        console.log(e.currentTarget?.comment?.value);

        dispatch(
            commentActionCreator.write({
                postId: data.id,
                contents: e.currentTarget.comment.value,
            })
        );
        setTimeout(() => {
            dispatch(commentActionCreator.list({ postId: Number(postId) }));
        }, 50);
        e.currentTarget.comment.value = "";
    };

    const handleLike = () => {
        dispatch(postActionCreator.like({ postId: Number(postId) }));
        setTimeout(() => {
            dispatch(postActionCreator.detail({ postId: Number(postId) }));
        }, 50);
    };

    useEffect(() => {
        console.log(data);
    }, [data]);
    if (!data) return <></>;
    return (
        <Layout>
            <Top></Top>
            <Middle>
                <PostView>
                    <UserInfo>
                        <Link
                            to={{
                                pathname: `${routes.userInfo}${data?.email}`,
                            }}
                        >
                            <Icon size={"40px"} src={data?.profileImage} />
                        </Link>
                        <Text
                            text={`${data?.nickName}`}
                            cssObj={{ fontSize: "15px", fontWeight: 600 }}
                        />
                        <FlexLayout>
                            <Text text={getDate(data?.creatAt)} tag={"span"} />
                            <Text text={"시간"} tag={"span"} />
                        </FlexLayout>
                        <SeeMoreLayout>
                            <HoverButton text={"게시물 수정"} />
                            <HoverButton text={"게시물 삭제"} />
                        </SeeMoreLayout>
                    </UserInfo>
                    <Contents>
                        <Text text={data?.contents} tag={"span"} />
                    </Contents>
                </PostView>
                <OptionView>
                    <HoverButton
                        text={"좋아요"}
                        cssObj={{
                            fontColor: data?.likeStatus && theme.color.seaBule,
                        }}
                        onClick={handleLike}
                    />
                    <Label width={"90%"} htmlFor={`${data.id}_comment`} />
                    <HoverButton text={"공유하기"} />
                </OptionView>
            </Middle>
            <Bottom>
                {postId && <CommentList postId={postId} />}
                <CommentInput
                    id={`${data.id}_comment`}
                    image={data?.profileImage}
                    writer={data?.writer}
                    onSubmit={handleOnSubmit}
                />
            </Bottom>
        </Layout>
    );
};
