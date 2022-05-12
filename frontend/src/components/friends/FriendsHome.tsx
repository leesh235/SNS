import styled from "../../styles/theme-components";
import { Text } from "../common/Text";
import { useSelector } from "react-redux";
import { FriendCard } from "./FriendCard";

const Wrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const SectionWrapper = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;

const FlexWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
    align-items: center;
    justify-content: space-between;
`;

const CardWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

interface Props {
    handleMenu: any;
}

export const FriendsHome = ({ handleMenu }: Props) => {
    const { loading, data, error } = useSelector(
        (state: any) => state?.friends?.all
    );
    console.log(data);
    return (
        <Wrapper>
            <SectionWrapper>
                <FlexWrapper>
                    <Text
                        text={"친구 요청"}
                        fs={"20px"}
                        fw={700}
                        lh={"24px"}
                        width={"auto"}
                    />
                    <Text
                        text={"모두 보기"}
                        fs={"17px"}
                        fw={400}
                        lh={"20px"}
                        width={"auto"}
                    />
                </FlexWrapper>
                <CardWrapper>
                    {data?.request?.map((val: any, idx: number) => {
                        return <FriendCard key={idx} user={val} />;
                    })}
                </CardWrapper>
            </SectionWrapper>
            <SectionWrapper>
                <FlexWrapper>
                    <Text
                        text={"친구 대기"}
                        fs={"20px"}
                        fw={700}
                        lh={"24px"}
                        width={"auto"}
                    />
                    <Text
                        text={"모두 보기"}
                        fs={"17px"}
                        fw={400}
                        lh={"20px"}
                        width={"auto"}
                    />
                </FlexWrapper>
                <CardWrapper>
                    {data?.response?.map((val: any, idx: number) => {
                        return <FriendCard key={idx} user={val} />;
                    })}
                </CardWrapper>
            </SectionWrapper>
            <SectionWrapper>
                <FlexWrapper>
                    <Text
                        text={"모든 친구"}
                        fs={"20px"}
                        fw={700}
                        lh={"24px"}
                        width={"auto"}
                    />
                    <Text
                        text={"모두 보기"}
                        fs={"17px"}
                        fw={400}
                        lh={"20px"}
                        width={"auto"}
                    />
                </FlexWrapper>
                <CardWrapper>
                    {data?.friends?.map((val: any, idx: number) => {
                        return <FriendCard key={idx} user={val} />;
                    })}
                </CardWrapper>
            </SectionWrapper>
        </Wrapper>
    );
};
