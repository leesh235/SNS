import styled from "../../styles/theme-components";
import theme from "../../styles/theme";
import { useDispatch } from "react-redux";
//functions
import { routes } from "../../utils/routes";
import { setLogin } from "../../modules/action/auth";
import { authMessage } from "../../utils/message";
import { useForm } from "../../hooks/useForm";
import { useModal } from "../../hooks/useModal";
//components
import { Input } from "../common/input/Input";
import { Button } from "../common/button/Button";
import { Join } from "../modal/Join";
import { Line } from "../common/Line";
import { LinkText } from "../common/button/LinkText";

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
    const dispatch = useDispatch();

    const { modal, onModalClick } = useModal();

    const { errors, setOption, handleSubmit } = useForm({
        initValues: "",
        validate: "",
        stateFunc: (state: any) => state.auth?.user,
        onSubmit: (formData: any) => {
            dispatch(
                setLogin({
                    email: formData?.email,
                    password: formData?.password,
                })
            );
        },
        result: (data: any, error: any) => {
            if (error) {
                alert(authMessage.login.login_error);
            }
            if (data) {
                localStorage.setItem("token", data?.accessToken);
                window.location.reload();
            }
        },
    });

    return (
        <>
            <Wrapper>
                <BoxWrapper>
                    <FormWrapper onSubmit={handleSubmit}>
                        <Input
                            {...setOption("email")}
                            cssObj={{ padding: "14px 16px" }}
                            placeholder={"이메일 또는 전화번호"}
                            required={true}
                        />
                        <Input
                            {...setOption("password")}
                            cssObj={{ padding: "14px 16px" }}
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
                        onClick={onModalClick}
                    />
                </BoxWrapper>
                <LinkText to={routes.forget} text={"페이지 만들기."} fw={600} />
            </Wrapper>
            {modal && <Join onClose={onModalClick} />}
        </>
    );
};
