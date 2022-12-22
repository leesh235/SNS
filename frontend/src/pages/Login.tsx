import styled from "../styles/theme-components";
import { LogInBox } from "../components/login/LogInBox";
import { LogInList } from "../components/login/LogInList";

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
