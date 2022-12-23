import styled from "../../styles/theme-components";
//components
import { Text } from "../common/Text";

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

export const BithdayList = () => {
    return (
        <Layout>
            <Text
                text={"생일"}
                cssObj={{
                    fontSize: "20px",
                    fontWeight: 700,
                    margin: "0 0 16px 0",
                }}
            />
            <CardLayout></CardLayout>
        </Layout>
    );
};
