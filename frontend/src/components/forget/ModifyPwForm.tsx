import styled from "../../styles/theme-components";
import { useDispatch, useSelector } from "react-redux";
//functions
import theme from "../../styles/theme";
import { routes } from "../../utils/routes";
import { useForm } from "../../hooks/common/useForm";
import { authActionCreator } from "../../modules/action/auth";
import { modifyPasswordValidate } from "../../utils/validate";
//components
import { FocusInput } from "../common/input/FocusInput";
import { BagicButton } from "../common/button/BagicButton";
import { BagicLink } from "../common/link/BagicLink";
import { Text } from "../common/Text";
import { ErrorMessage } from "../common/ErrorMessage";

const Layout = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: auto;
    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
`;

const FlexLayout = styled.div`
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-top: 1px solid ${(props) => props.theme.color.lightGray};
`;

const ButtonLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    width: calc(100% - 32px);
    height: 36px;
    padding: 16px;
    margin-top: 16px;
    border-top: solid 1px ${(props) => props.theme.color.lightGray};
`;

interface Props {
    onStepClick: (id: number) => void;
}

export const ModifyPwForm = ({ onStepClick }: Props) => {
    const dispatch = useDispatch();

    const { loading, data, error } = useSelector(
        (state: any) => state.auth?.verify
    );

    const { errors, setOption, handleSubmit } = useForm({
        initValues: "",
        validate: modifyPasswordValidate,
        onSubmit: (formData: any) => {
            dispatch(
                authActionCreator.modify({
                    email: data?.email,
                    codeNumber: Number(data?.password),
                    password: formData.password,
                })
            );
        },
    });

    return (
        <Layout onSubmit={handleSubmit}>
            <Text
                text={"비밀번호 변경"}
                cssObj={{
                    width: "calc(100% - 32px)",
                    padding: "18px 16px",
                    fontSize: "20px",
                    fontWeight: 600,
                    fontColor: theme.color.black,
                }}
            />
            <FlexLayout>
                <Text
                    text={
                        "계정을 검색하려면 이메일 주소 또는 휴대폰 번호를 입력하세요."
                    }
                    cssObj={{
                        fontSize: "17px",
                        margin: "0 0 16px 0",
                    }}
                />
                <FocusInput
                    {...setOption("password")}
                    cssObj={{ width: "calc(100% - 32px)" }}
                    placeholder={"새 비밀번호"}
                    error={errors.password}
                />
                {errors.password === "required" && (
                    <ErrorMessage message="인증 번호을 입력하세요" />
                )}
            </FlexLayout>
            <ButtonLayout>
                <BagicLink
                    to={routes.login}
                    text={"취소"}
                    cssObj={{
                        width: "70px",
                        height: "36px",
                        fontSize: "15px",
                        fontColor: theme.color.lightBlack,
                        backgroundColor: theme.color.gray,
                    }}
                />
                <BagicButton
                    text={"검색"}
                    type={"submit"}
                    cssObj={{
                        width: "70px",
                        height: "36px",
                        fontSize: "15px",
                        margin: "0 0 0 8px",
                    }}
                />
            </ButtonLayout>
        </Layout>
    );
};
