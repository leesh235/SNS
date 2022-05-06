import styled from "../styles/theme-components";
import { SideMenu } from "../components/side/SideMenu";
import { Welcome } from "../components/view/Welcome";

const Wrapper = styled.main`
    background-color: ${(props) => props.theme.color.gray};
    width: 100%;
    min-height: calc(100vh - 56px);
    display: grid;
    grid-template-columns: minmax(auto, 360px) auto minmax(auto, 360px);
    padding-top: 56px;
    > :nth-child(2) {
        justify-items: center;
        grid-column: 2 / span 1;
    }
`;

const Start = () => {
    return (
        <Wrapper>
            <SideMenu />
            <Welcome />
        </Wrapper>
    );
};

export default Start;
