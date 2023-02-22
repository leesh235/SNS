import styled from "../styles/theme-components";
import { useState } from "react";
//components
import { ForgetHeader } from "../components/common/header/ForgetHeader";
import { ForgetForm } from "../components/forget/ForgetForm";
import { CodeNumberForm } from "../components/forget/CodeNumberForm";
import { ModifyPwForm } from "../components/forget/ModifyPwForm";

const Wrapper = styled.main`
    width: 100%;
    height: calc(100vh - 226px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 0;
`;

const Forget = () => {
    const [step, setStep] = useState<number>(0);

    const handleStepClick = (id: number) => {
        setStep(id);
    };

    return (
        <>
            <ForgetHeader />
            <Wrapper>
                {step === 0 && <ForgetForm onStepClick={handleStepClick} />}
                {step === 1 && <CodeNumberForm onStepClick={handleStepClick} />}
                {step === 2 && <ModifyPwForm onStepClick={handleStepClick} />}
            </Wrapper>
        </>
    );
};

export default Forget;
