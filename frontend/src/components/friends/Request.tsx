import styled from "../../styles/theme-components";
import { Text } from "../common/Text";
import { FriendCard } from "./FriendCard";
import { useSelector } from "react-redux";

const Wrapper = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;

const CardWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const Request = () => {
    const { loading, data, error } = useSelector(
        (state: any) => state?.friends?.req_list
    );
    console.log(data);
    return (
        <Wrapper>
            <Text
                text={"친구 요청"}
                fs={"20px"}
                fw={700}
                lh={"24px"}
                margin={"0 0 16px 0"}
            />
            <CardWrapper>
                {data?.map((val: any, idx: number) => {
                    return <FriendCard key={idx} user={val} />;
                })}
            </CardWrapper>
        </Wrapper>
    );
};
