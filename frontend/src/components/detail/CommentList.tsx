import styled from "../../styles/theme-components";
import { useSelector } from "react-redux";
import { CommentCard } from "./CommentCard";
import { useEffect } from "react";

const Wrapper = styled.div`
    width: 100%;
    height: 500px;
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

export const CommentList = () => {
    const { loading, data, error } = useSelector(
        (state: any) => state?.comment?.commentList
    );

    const user = useSelector((state: any) => state?.user?.loginInfo);

    useEffect(() => {}, [loading]);
    return (
        <Wrapper>
            <ScollWrapper>
                {data?.map((val: any, idx: number) => {
                    return (
                        <CommentCard
                            key={idx}
                            comment={val}
                            user={user?.data}
                        />
                    );
                })}
            </ScollWrapper>
        </Wrapper>
    );
};
