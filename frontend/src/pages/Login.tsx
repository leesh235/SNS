import styled from "../styles/theme-components";
import { LogInBox } from "../components/login/LogInBox";
import { LogInList } from "../components/login/LogInList";

const Wrapper = styled.main`
    width: 100vw;
    min-height: calc(100vh - 170px);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FlexWrapper = styled.div`
    width: 980px;
    height: 496px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const Login = () => {
    return (
        <Wrapper>
            <FlexWrapper>
                <LogInList />
                <LogInBox />
            </FlexWrapper>
        </Wrapper>
    );
};

export default Login;
