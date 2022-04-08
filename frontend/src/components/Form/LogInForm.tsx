import styled from "../../styles/theme-components";
import { useEffect, useState } from "react";
import { Input } from "../common/Input";
import { Button } from "../common/button/Button";
import { Join } from "../modal/Join";
import { Line } from "../common/Line";
import { LinkText } from "../common/button/LinkText";
import { routes } from "../../utils/routes";
import theme from "../../styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../modules/action/login";
import { authMessage } from "../../utils/message";

const Wrapper = styled.section`
    width: 396px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BoxWrapper = styled.section`
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
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 364px;
    > :nth-child(n) {
        margin: 6px 0px;
    }
    margin: 0 0 20px 0;
`;

export const LogInForm = () => {
    const [open, setOpen] = useState<boolean>(false);
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector(
        (state: any) => state?.login?.user
    );

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const { email, password } = e.currentTarget;
        dispatch(setLogin({ email: email.value, password: password.value }));
    };

    useEffect(() => {
        if (error !== null) {
            alert(authMessage.login.login_error);
        }
    }, [loading]);

    return (
        <Wrapper>
            <BoxWrapper>
                <FormWrapper onSubmit={handleLogin}>
                    <Input
                        name={"email"}
                        padding={"14px 16px"}
                        placeholder={"이메일 또는 전화번호"}
                        required={true}
                    />
                    <Input
                        name={"password"}
                        padding={"14px 16px"}
                        placeholder={"비밀번호"}
                        type={"password"}
                        required={true}
                    />
                    <Button text="로그인" />
                    <LinkText
                        to={routes.forget}
                        text={"비밀번호를 잊으셨나요?"}
                        color={theme.color.seaBule}
                    />
                    <Line />
                </FormWrapper>
                <Button
                    text={"새 계정 만들기"}
                    width={"144px"}
                    height={"48px"}
                    color={theme.color.lightGreen}
                    fs={"17px"}
                    type={"button"}
                    onClick={handleOpen}
                />
                {open && <Join onClose={handleClose} />}
            </BoxWrapper>
            <LinkText to={routes.forget} text={"페이지 만들기."} fw={600} />
        </Wrapper>
    );
};
