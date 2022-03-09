import styled from "../styles/theme-components";
import { LogInForm } from "../components/Form/LogInForm";
import { LogInList } from "../components/LogInList";

const Wrapper = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const Home = () => {
    return (
        <Wrapper>
            <LogInList />
            <LogInForm />
        </Wrapper>
    );
};

export default Home;
