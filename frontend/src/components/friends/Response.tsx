import styled from "../../styles/theme-components";
import { Text } from "../common/Text";
import { useSelector } from "react-redux";
import { FriendCard } from "./FriendCard";

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

export const Response = () => {
    const { loading, data, error } = useSelector(
        (state: any) => state?.friends?.res_list
    );
    console.log(data);
    return (
        <Wrapper>
            <Text
                text={"친구 대기"}
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
