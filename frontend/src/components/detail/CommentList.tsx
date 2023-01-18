import styled from "../../styles/theme-components";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Wrapper = styled.div`
    width: 100%;
    max-height: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    overflow-y: auto;
`;

const ScollWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
`;
interface Props {
    postId: string;
}
export const CommentList = ({ postId }: Props) => {
    const { loading, data, error } = useSelector((state: any) => {
        if (!state.comment[postId])
            return { loading: false, data: null, error: "" };
        return state.comment[postId];
    });

    const user = useSelector((state: any) => state?.profile?.simple);

    useEffect(() => {}, [loading]);
    if (!data) return <></>;
    return (
        <Wrapper>
            <ScollWrapper>
                {Object.keys(data)?.map((val: any, idx: number) => {
                    return <div key={idx}>temp</div>;
                })}
            </ScollWrapper>
        </Wrapper>
    );
};
