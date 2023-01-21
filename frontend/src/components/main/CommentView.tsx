import styled from "../../styles/theme-components";
//functions
import { getDate } from "../../utils/dateUtil";
import { useCommentFunc } from "../../hooks/post/useCommentFunc";
import { useModal } from "../../hooks/common/useModal";
//components
import { Avatar } from "../common/Image/Avatar";
import { Text } from "../common/Text";
import { SeeMoreLayout } from "../common/SeeMoreLayout";
import { HoverButton } from "../common/button/HoverButton";
import { CommentInput } from "./CommentInput";

const CommentLayout = styled.article`
    width: 100%;
    min-height: 70px;
    height: auto;
    display: flex;
    flex-direction: column;
`;

const CommentInfo = styled.span`
    display: flex;
    margin-bottom: 3px;
    > :nth-child(3) {
        align-self: center;
    }
`;

const CommentContents = styled.span`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    padding: 8px 12px;
    background-color: ${(props) => props.theme.color.gray};
    > :nth-child(1) {
        margin-bottom: 5px;
    }
`;

const CommentFunc = styled.span`
    padding: 0 0 0 42px;
    width: auto;
    color: ${(props) => props.theme.color.lightBlack};
    font-size: 12px;
`;

const InputLayout = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
`;

const CloseButton = styled.button`
    width: 24px;
    height: 16px;
    border: 0;
    padding: 0;
    margin: 0 0 0 48px;
    background-color: ${(props) => props.theme.color.white};
    font-size: 12px;
    :hover {
        color: ${(props) => props.theme.color.seaBule};
        text-decoration: underline;
    }
`;

interface Props {
    value: {
        id: number;
        postId: number;
        contents: string;
        createAt: string;
        userId: string;
        writer: string;
        profileImage?: string;
    };
    user: {
        email: string;
        nickName: string;
        profileImage: string;
    };
}

export const CommentView = ({ value, user }: Props) => {
    const { modal, handleModal } = useModal();
    const { handleModify, handleDelete } = useCommentFunc(
        value.postId,
        value.id
    );

    if (modal)
        return (
            <InputLayout>
                <CommentInput onSubmit={handleModify} />
                <CloseButton type="button" onClick={handleModal}>
                    취소
                </CloseButton>
            </InputLayout>
        );
    return (
        <CommentLayout>
            <CommentInfo>
                <Avatar src={value.profileImage || ""} margin={"0 10px 0 0"} />
                <CommentContents>
                    <Text
                        text={value.writer}
                        tag={"span"}
                        cssObj={{ fontSize: "13px", fontWeight: 600 }}
                    />
                    <Text
                        text={value.contents}
                        tag={"span"}
                        cssObj={{ fontSize: "15px" }}
                    />
                </CommentContents>
                {user.email === value.userId && (
                    <SeeMoreLayout>
                        <HoverButton
                            text={"수정"}
                            onClick={handleModal}
                            cssObj={{ textAlign: "left" }}
                        />
                        <HoverButton
                            text={"삭제"}
                            onClick={handleDelete}
                            cssObj={{ textAlign: "left" }}
                        />
                    </SeeMoreLayout>
                )}
            </CommentInfo>
            <CommentFunc>{getDate(value.createAt)}</CommentFunc>
        </CommentLayout>
    );
};
