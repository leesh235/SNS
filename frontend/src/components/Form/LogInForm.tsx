import styled from "../../styles/theme-components";
import { Input } from "../common/Input";
import { Button } from "../common/Button";
import { LinkButton } from "../common/LinkButton";
import { Line } from "../common/Line";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 396px;
    height: auto;
    padding: 10px 0 24px 0;
    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
`;

const FormWrapper = styled.form`
    width: 364px;
`;

export const LogInForm = () => {
    return (
        <Wrapper>
            <FormWrapper>
                <Input padding={"14px 16px"} />
                <Input padding={"14px 16px"} />
                <Button text="로그인" />
                <Line />
            </FormWrapper>
            <LinkButton text="새 계정 만들기" />
        </Wrapper>
    );
};
