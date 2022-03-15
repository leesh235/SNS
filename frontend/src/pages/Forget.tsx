import styled from "../styles/theme-components";
import { ForgetHeader } from "../components/header/ForgetHeader";
import { ForgetForm } from "../components/form/ForgetForm";

const Wrapper = styled.main`
    width: 100%;
    height: 276px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 0;
`;

const Forget = () => {
    return (
        <>
            <ForgetHeader />
            <Wrapper>
                <ForgetForm />
            </Wrapper>
        </>
    );
};

export default Forget;
