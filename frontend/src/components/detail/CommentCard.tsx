import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { routes } from "../../utils/routes";
import { Text } from "../common/Text";
import { Avatar } from "../common/Image/Avatar";
import { MoreSmallIcon } from "../../assets/icon/MoreSmallIcon";
import { HoverBtn } from "../common/button/HoverBtn";
import {
    setDeleteComment,
    setModifyComment,
    setCommentList,
} from "../../modules/action/comment";
import { CommentInput } from "../common/input/CommentInput";
import theme from "../../styles/theme";

const Wrapper = styled.div`
    width: 100%;
    min-height: 51px;
    display: flex;
    flex-direction: row;
    margin-top: 4px;
    position: relative;
`;

const Contents = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 18px;
    background-color: ${(props) => props.theme.color.gray};
    padding: 8px 12px;
    a {
        width: auto;
    }
`;

const Option = styled.div`
    display: flex;
    align-items: center;
    min-width: 36px;
`;

const BtnWrapper = styled.div`
    position: absolute;
    top: 46px;
    left: 0;
    width: calc(100% - 16px);
    height: auto;
    padding: 8px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    background-color: ${(props) => props.theme.color.white};
    border-radius: 6px;
    z-index: 1;
`;

const Hover = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 6px;
    > :nth-child(1) {
        display: none;
    }
    :hover {
        background-color: ${(props) => props.theme.color.lightGray};
        > :nth-child(1) {
            display: block;
        }
    }
    cursor: pointer;
`;

const FlexWrapper = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-rows: auto auto;
`;

const CancleBtn = styled.div`
    width: 25px;
    height: 17px;
    margin-left: 45px;
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid ${(props) => props.theme.color.white};
    :hover {
        border-bottom: 1px solid ${(props) => props.theme.color.seaBule};
    }
    cursor: pointer;
`;

interface Props {
    comment: any;
    user: any;
}

export const CommentCard = ({ comment, user }: Props) => {
    const { postId } = useParams<{ postId: string }>();
    const dispatch = useDispatch();
    const [modal, setModal] = useState<boolean>(false);
    const [modify, setModify] = useState<boolean>(false);

    const handleModalOpen = () => {
        setModal(true);
    };

    const handleModalClose = () => {
        if (modal) {
            setModal(false);
        }
    };

    const handleModifyOpen = () => {
        setModify(true);
    };

    const handleModifyClose = () => {
        if (modify) {
            setModify(false);
        }
    };

    const handleModify: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        console.log(e.currentTarget?.comment?.value);
        dispatch(
            setModifyComment({
                id: comment.id,
                contents: e.currentTarget.comment.value,
            })
        );
        setTimeout(() => {
            dispatch(setCommentList({ postId: Number(postId) }));
        }, 500);
        handleModifyClose();
    };

    const handleDelete = (id: number) => {
        if (window.confirm("댓글을 삭제하시겠습니까?")) {
            dispatch(setDeleteComment({ id }));
            dispatch(setCommentList({ postId: Number(postId) }));
        }
    };

    useEffect(() => {
        if (modal) window.addEventListener("click", handleModalClose);
        return () => {
            window.removeEventListener("click", handleModalClose);
        };
    }, [modal]);

    return (
        <Wrapper>
            {!modify ? (
                <>
                    <Link
                        to={{
                            pathname: `${routes.userInfo}${comment.user.email}`,
                        }}
                    >
                        <Avatar
                            src={comment.user.profileImage}
                            radius={32}
                            margin={"0 6px 0 0 "}
                        />
                    </Link>
                    <Contents>
                        <Link
                            to={{
                                pathname: `${routes.userInfo}${comment.user.email}`,
                            }}
                        >
                            <Text
                                text={comment.user.nickName}
                                fs={"13px"}
                                fw={600}
                                lh={"16px"}
                                width={"auto"}
                            />
                        </Link>
                        <Text
                            text={comment.contents}
                            fs={"15px"}
                            lh={"20px"}
                            width={"auto"}
                        />
                    </Contents>
                    <Option>
                        {user.email === comment.user.email && (
                            <Hover onClick={handleModalOpen}>
                                <MoreSmallIcon />
                            </Hover>
                        )}
                        {modal && (
                            <BtnWrapper>
                                <HoverBtn
                                    text={"댓글 수정"}
                                    onClick={handleModifyOpen}
                                />
                                <HoverBtn
                                    text={"댓글 삭제"}
                                    onClick={() => handleDelete(comment.id)}
                                />
                            </BtnWrapper>
                        )}
                    </Option>
                </>
            ) : (
                <FlexWrapper>
                    <CommentInput
                        image={user?.profileImage}
                        writer={user?.writer}
                        onSubmit={handleModify}
                        defaultValue={comment.contents}
                    />
                    <CancleBtn onClick={handleModifyClose}>
                        <Text
                            text={"취소"}
                            fs={"12px"}
                            lh={"16px"}
                            fc={theme.color.seaBule}
                            width={"auto"}
                        />
                    </CancleBtn>
                </FlexWrapper>
            )}
        </Wrapper>
    );
};
