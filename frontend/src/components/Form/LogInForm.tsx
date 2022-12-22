import styled from "../../styles/theme-components";
import theme from "../../styles/theme";
import { useDispatch } from "react-redux";
//functions
import { routes } from "../../utils/routes";
import { setLogin } from "../../modules/action/auth";
import { authMessage } from "../../utils/message";
import { useForm } from "../../hooks/useForm";
import { useModal } from "../../hooks/useModal";
import { loginValidate } from "../../utils/validate";
//components
import { FocusInput } from "../common/input/FocusInput";
import { Button } from "../common/button/Button";
import { Join } from "../modal/Join";
import { LinkText } from "../common/button/LinkText";
import { ErrorMessage } from "../common/ErrorMessage";

const Layout = styled.section`
    width: 396px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BoxLayout = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 366px;
    height: auto;
    padding: 15px;
    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
`;

const FormLayout = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 364px;
    height: 240px;
`;

const Line = styled.div`
    width: 100%;
    max-width: 364px;
    border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
    margin: 0 0 20px 0;
`;

export const LogInForm = () => {
    const dispatch = useDispatch();

    const { modal, onModalClick } = useModal();

    const { errors, setOption, handleSubmit } = useForm({
        initValues: "",
        validate: loginValidate,
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
            <Layout>
                <BoxLayout>
                    <FormLayout onSubmit={handleSubmit}>
                        <FocusInput
                            {...setOption("email")}
                            placeholder={"이메일 또는 전화번호"}
                            error={errors.email}
                        />
                        {errors.email === "required" && (
                            <ErrorMessage message="이메일을 입력하세요" />
                        )}
                        <FocusInput
                            type={"password"}
                            {...setOption("password")}
                            placeholder={"비밀번호"}
                            error={errors.password}
                        />
                        {errors.password === "required" && (
                            <ErrorMessage message="비밀번호를 입력하세요" />
                        )}
                        <Button text="로그인" />
                        <LinkText
                            to={routes.forget}
                            text={"비밀번호를 잊으셨나요?"}
                            color={theme.color.seaBule}
                        />
                    </FormLayout>
                    <Line />
                    <Button
                        text={"새 계정 만들기"}
                        width={"144px"}
                        height={"48px"}
                        color={theme.color.lightGreen}
                        fs={"17px"}
                        type={"button"}
                        onClick={onModalClick}
                    />
                </BoxLayout>
                <LinkText to={routes.forget} text={"페이지 만들기."} fw={600} />
            </Layout>
            {modal && <Join onClose={onModalClick} />}
        </>
    );
};
