import styled from "../../styles/theme-components";
import { useSelector } from "react-redux";
//components
import { Text } from "../common/Text";
import { FriendCard } from "./FriendCard";

const Layout = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const SectionLayout = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;

const FlexLayout = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
    align-items: center;
    justify-content: space-between;
`;

const CardLayout = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const EventLayout = styled.div`
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

    return (
        <Layout>
            <SectionLayout>
                <FlexLayout>
                    <Text
                        text={"친구 요청"}
                        tag={"span"}
                        cssObj={{
                            fontSize: "20px",
                            fontWeight: 700,
                        }}
                    />
                    <EventLayout
                        onClick={() => {
                            handleMenu(1);
                        }}
                    >
                        모두 보기
                    </EventLayout>
                </FlexLayout>
                <CardLayout>
                    {data?.requestList?.map((val: any, idx: number) => {
                        return <FriendCard key={idx} user={val} type={"req"} />;
                    })}
                </CardLayout>
            </SectionLayout>
            <SectionLayout>
                <FlexLayout>
                    <Text
                        text={"친구 대기"}
                        tag={"span"}
                        cssObj={{
                            fontSize: "20px",
                            fontWeight: 700,
                        }}
                    />
                    <EventLayout
                        onClick={() => {
                            handleMenu(2);
                        }}
                    >
                        모두 보기
                    </EventLayout>
                </FlexLayout>
                <CardLayout>
                    {data?.responseList?.map((val: any, idx: number) => {
                        return <FriendCard key={idx} user={val} type={"res"} />;
                    })}
                </CardLayout>
            </SectionLayout>
            <SectionLayout>
                <FlexLayout>
                    <Text
                        text={"모든 친구"}
                        tag={"span"}
                        cssObj={{
                            fontSize: "20px",
                            fontWeight: 700,
                        }}
                    />
                    <EventLayout
                        onClick={() => {
                            handleMenu(3);
                        }}
                    >
                        모두 보기
                    </EventLayout>
                </FlexLayout>
                <CardLayout>
                    {data?.friends?.map((val: any, idx: number) => {
                        return (
                            <FriendCard key={idx} user={val} type={"friend"} />
                        );
                    })}
                </CardLayout>
            </SectionLayout>
        </Layout>
    );
};
