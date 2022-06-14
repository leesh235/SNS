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

const EventWrapper = styled.div`
    width: auto;
    font-size: 17px;
    line-height: 20px;
    color: ${(props) => props.theme.color.black};
    :hover {
        border-bottom: 1px solid ${(props) => props.theme.color.black};
    }
    cursor: pointer;
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
                    <EventWrapper
                        onClick={() => {
                            handleMenu(1);
                        }}
                    >
                        모두 보기
                    </EventWrapper>
                </FlexWrapper>
                <CardWrapper>
                    {data?.requestList?.map((val: any, idx: number) => {
                        return <FriendCard key={idx} user={val} type={"req"} />;
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
                    <EventWrapper
                        onClick={() => {
                            handleMenu(2);
                        }}
                    >
                        모두 보기
                    </EventWrapper>
                </FlexWrapper>
                <CardWrapper>
                    {data?.responseList?.map((val: any, idx: number) => {
                        return <FriendCard key={idx} user={val} type={"res"} />;
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
                    <EventWrapper
                        onClick={() => {
                            handleMenu(3);
                        }}
                    >
                        모두 보기
                    </EventWrapper>
                </FlexWrapper>
                <CardWrapper>
                    {data?.friends?.map((val: any, idx: number) => {
                        return (
                            <FriendCard key={idx} user={val} type={"friend"} />
                        );
                    })}
                </CardWrapper>
            </SectionWrapper>
        </Wrapper>
    );
};
