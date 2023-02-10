import styled from "../styles/theme-components";
import { SideMenu } from "../components/side/SideMenu";
import { PostList } from "../components/main/PostList";
import { ChattingList } from "../components/main/ChattingList";

const Layout = styled.main`
    background-color: ${(props) => props.theme.color.gray};
    width: 100%;
    min-height: calc(100vh - 56px);
    padding-top: 56px;
    ${(props) =>
        props.theme.media.desktopU(`      
        display: grid;
        grid-template-columns: 25vw 50vw 25vw;
        > :nth-child(1) {
            justify-items: flex-start;
        }
        > :nth-child(2) {
            justify-items: center;
        }
        > :nth-child(3) {
            justify-items: flex-end;
        }
    `)}
    ${(props) =>
        props.theme.media.tablet(`    
        display: grid;
        grid-template-columns: 65vw 35vw;
        > :nth-child(2) {
            justify-items: center;
        }
        > :nth-child(3) {
            justify-items:  flex-end;
        }
    `)}
    ${(props) =>
        props.theme.media.mobileD(`
        display: flex;
        justify-content: center;
    `)}
`;

const Gap1 = styled.div`
    ${(props) =>
        props.theme.media.desktopD(`
        display: none;
  `)}
`;

const Gap2 = styled.div`
    ${(props) =>
        props.theme.media.mobileU(`
        display: none;
  `)}
`;

const FixLeftLayout = styled.div`
    ${(props) =>
        props.theme.media.desktopU(`
        position: fixed;
        top: 56px;
        left: 0;
        width: 25vw;
  `)}
    ${(props) =>
        props.theme.media.desktopD(`
        display: none;
  `)}
`;

const FixRightLayout = styled.div`
    ${(props) =>
        props.theme.media.desktopU(`      
        position: fixed;
        top: 56px;
        right: 0;
        width: 25vw;
    `)}
    ${(props) =>
        props.theme.media.tablet(`    
        position: fixed;
        top: 56px;
        right: 0;
        width: 35vw;
    `)}
    ${(props) =>
        props.theme.media.mobileD(`
        display: none;
    `)}
`;

const Main = () => {
    return (
        <>
            <Layout>
                <Gap1></Gap1>
                <PostList />
                <Gap2></Gap2>
            </Layout>
            <FixLeftLayout>
                <SideMenu />
            </FixLeftLayout>
            <FixRightLayout>
                <ChattingList />
            </FixRightLayout>
        </>
    );
};

export default Main;
