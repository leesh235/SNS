import styled from "../../styles/theme-components";
import { Logo } from "../common/Logo";

const Wrapper = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 56px;
`;

export const ForgetHeader = () => {
    return (
        <Wrapper>
            <Logo fs={"28px"} />
        </Wrapper>
    );
};
