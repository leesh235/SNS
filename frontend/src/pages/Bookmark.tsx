import styled from "../styles/theme-components";
import { SideMenu } from "../components/side/SideMenu";

const Layout = styled.main`
    background-color: ${(props) => props.theme.color.gray};
    width: 100%;
    min-height: 100vh;
    padding-top: 56px;
`;

const FixLeftLayout = styled.div`
    position: fixed;
    top: 56px;
    left: 0;
    width: 25vw;
`;

const Bookmark = () => {
    return (
        <>
            <Layout></Layout>
            <FixLeftLayout>
                <SideMenu />
            </FixLeftLayout>
        </>
    );
};

export default Bookmark;
