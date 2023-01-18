import styled from "../../styles/theme-components";
import { useSelector } from "react-redux";
//functions
import { getDate } from "../../utils/dateUtil";
import { useModal } from "../../hooks/common/useModal";
import { useCommentFunc } from "../../hooks/post/useCommentFunc";
import { useGetComment } from "../../hooks/common/useGetComment";
//components
import { Avatar } from "../common/Image/Avatar";
import { Text } from "../common/Text";
import { SeeMoreLayout } from "../common/SeeMoreLayout";
import { HoverButton } from "../common/button/HoverButton";
import { CommentView } from "./CommentView";

const Layout = styled.section<{ display: string }>`
    width: 100%;
    height: auto;
    padding: 10px 0;
    display: ${(props) => props.display};
`;

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

interface Props {
    postId: number;
}

export const CommentList = ({ postId }: Props) => {
    const user = useSelector((state: any) => state.profile.simple?.data);

    const { loading, data, error } = useGetComment(postId);

    if (!data) return <></>;
    return (
        <Layout display={Object.keys(data).length === 0 ? "none" : "block"}>
            {Object.keys(data)?.map((val: any) => (
                <CommentView key={val} value={data[val]} user={user} />
            ))}
        </Layout>
    );
};
