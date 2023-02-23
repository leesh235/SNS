import styled from "../styles/theme-components";
import { SideMenu } from "../components/side/SideMenu";

const Layout = styled.main`
    background-color: ${(props) => props.theme.color.gray};
    width: 100%;
    min-height: 100vh;
    padding-top: 56px;
`;

const Bookmark = () => {
    return (
        <Layout>
            <SideMenu />
        </Layout>
    );
};

export default Bookmark;
