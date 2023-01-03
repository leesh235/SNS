import styled from "../../styles/theme-components";
import theme from "../../styles/theme";
//functions
import { routes } from "../../utils/routes";
import { authActionCreator } from "../../modules/action/auth";
import { useForm } from "../../hooks/useForm";
import { loginValidate } from "../../utils/validate";
import { useSubmit } from "../../hooks/useSubmit";
//components
import { FocusInput } from "../common/input/FocusInput";
import { BagicButton } from "../common/button/BagicButton";
import { TextLink } from "../common/link/TextLink";
import { ErrorMessage } from "../common/ErrorMessage";

const Layout = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 364px;
    height: 240px;
`;

export const LoginForm = () => {
    const { handleDispatch } = useSubmit({
        stateFunc: (state: any) => state.auth?.login,
    });

    const { errors, setOption, handleSubmit } = useForm({
        initValues: "",
        validate: loginValidate,
        onSubmit: (formData: any) => {
            handleDispatch(
                authActionCreator.login({
                    email: formData.email,
                    password: formData.password,
                }),
                "계정이 없거나 비밀번호가 틀렸습니다."
            );
        },
    });

    return (
        <Layout onSubmit={handleSubmit}>
            <FocusInput
                {...setOption("email")}
                placeholder={"이메일 또는 전화번호"}
                error={errors.email}
            />
            {errors.email === "required" && (
                <ErrorMessage message="이메일을 입력하세요" />
            )}
            <FocusInput
                {...setOption("password")}
                placeholder={"비밀번호"}
                type={"password"}
                error={errors.password}
            />
            {errors.password === "required" && (
                <ErrorMessage message="비밀번호를 입력하세요" />
            )}
            <BagicButton text="로그인" type={"submit"} />
            <TextLink
                to={routes.forget}
                text={"비밀번호를 잊으셨나요?"}
                color={theme.color.seaBule}
            />
        </Layout>
    );
};
