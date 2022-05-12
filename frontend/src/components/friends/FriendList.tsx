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

export const FriendList = () => {
    const { loading, data, error } = useSelector(
        (state: any) => state?.friends?.friend_list
    );

    return (
        <Wrapper>
            <Text
                text={"모든 친구"}
                fs={"20px"}
                fw={700}
                lh={"24px"}
                margin={"0 0 16px 0"}
            />
            <CardWrapper>
                {" "}
                {data?.map((val: any, idx: number) => {
                    return <FriendCard key={idx} user={val} type={"friend"} />;
                })}
            </CardWrapper>
        </Wrapper>
    );
};
