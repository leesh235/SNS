import styled from "../styles/theme-components";
import { LogInForm } from "../components/form/LogInForm";
import { LogInList } from "../components/LogInList";
import { LogInFooter } from "../components/footer/LogInFooter";

const Wrapper = styled.main`
    width: 100%;
    height: 496px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 92px 0 132px 0;
`;

const FlexWrapper = styled.div`
    width: 980px;
    height: 496px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const Home = () => {
    return (
        <>
            <Wrapper>
                <FlexWrapper>
                    <LogInList />
                    <LogInForm />
                </FlexWrapper>
            </Wrapper>
            <LogInFooter />
        </>
    );
};

export default Home;
