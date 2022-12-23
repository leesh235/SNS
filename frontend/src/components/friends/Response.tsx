import styled from "../../styles/theme-components";
import { useSelector } from "react-redux";
//components
import { Text } from "../common/Text";
import { FriendCard } from "./FriendCard";

const Layout = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;

const CardLayout = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const Response = () => {
    const { loading, data, error } = useSelector(
        (state: any) => state?.friends?.res_list
    );

    return (
        <Layout>
            <Text
                text={"친구 대기"}
                cssObj={{
                    fontSize: "20px",
                    fontWeight: 700,
                    margin: "0 0 16px 0",
                }}
            />
            <CardLayout>
                {data?.map((val: any, idx: number) => {
                    return <FriendCard key={idx} user={val} type={"res"} />;
                })}
            </CardLayout>
        </Layout>
    );
};
