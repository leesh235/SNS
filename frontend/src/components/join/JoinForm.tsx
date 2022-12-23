import styled from "../../styles/theme-components";
import { useDispatch } from "react-redux";
//functions
import theme from "../../styles/theme";
import { setJoin } from "../../modules/action/auth";
import { useForm } from "../../hooks/useForm";
import { calendarUtil } from "../../utils/calendar";
//components
import { BagicButton } from "../common/button/BagicButton";
import { FocusInput } from "../common/input/FocusInput";
import { Text } from "../common/Text";
import { RadioInput } from "../common/input/RadioInput";
import { Select } from "../common/input/Select";

const Layout = styled.div`
    width: 432px;
    height: 512px;
    margin: 20px;
    background-color: ${(props) => props.theme.color.white};
    border-radius: 8px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
`;

const TopLayout = styled.div`
    padding: 10px 16px;
    border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

const FormLayout = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    > :nth-child(n) {
        margin-bottom: 10px;
    }
`;

const FlexLayout = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const ColumnLayout = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    flex-direction: column;
`;

const BirthLayout = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const GenderLayout = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

interface Props {
    onClose: () => void;
}

export const JoinForm = ({ onClose }: Props) => {
    const dispatch = useDispatch();

    const { years, months, days, year, month, day } = calendarUtil();

    const { errors, setOption, handleSubmit } = useForm({
        initValues: {
            secondName: "",
            firstName: "",
            email: "",
            password: "",
            year,
            month,
            day,
            gender: "",
        },
        validate: "",
        stateFunc: (state: any) => state.auth?.user,
        onSubmit: (formData: any) => {
            dispatch(
                setJoin({
                    firstName: formData.value,
                    secondName: formData.value,
                    email: formData.value,
                    password: formData.value,
                    birth: formData.value + formData.value + formData.value,
                    gender: formData.value,
                })
            );
            onClose();
        },
        result: (data: any, error: any) => {
            if (error) {
                alert("error");
            }
            if (data) {
                localStorage.setItem("token", data?.accessToken);
                window.location.reload();
            }
        },
    });

    return (
        <Layout>
            <TopLayout>
                <FlexLayout>
                    <Text
                        text={"가입하기"}
                        cssObj={{
                            fontSize: "32px",
                            fontWeight: 600,
                        }}
                    />
                    <div onClick={onClose}>X</div>
                </FlexLayout>
                <Text
                    text={"빠르고 쉽습니다."}
                    cssObj={{
                        fontSize: "15px",
                        fontColor: theme.color.lightBlack,
                        margin: "5px 0 0 0",
                    }}
                />
            </TopLayout>
            <FormLayout onSubmit={handleSubmit}>
                <FlexLayout>
                    <FocusInput
                        placeholder={"성()"}
                        {...setOption("secondName")}
                        cssObj={{
                            width: "174px",
                            height: "16px",
                            padding: "11px",
                            borderRadius: "5px",
                        }}
                    />
                    <FocusInput
                        placeholder={"이름(성은 제외)"}
                        {...setOption("firstName")}
                        cssObj={{
                            width: "170px",
                            height: "16px",
                            padding: "11px",
                            borderRadius: "5px",
                        }}
                    />
                </FlexLayout>
                <FocusInput
                    placeholder={"휴대폰 번호 또는 이메일"}
                    {...setOption("email")}
                    cssObj={{
                        width: "375px",
                        height: "16px",
                        padding: "11px",
                        borderRadius: "5px",
                    }}
                />
                <FocusInput
                    placeholder={"새 비밀번호"}
                    type={"password"}
                    {...setOption("password")}
                    cssObj={{
                        width: "375px",
                        height: "16px",
                        padding: "11px",
                        borderRadius: "5px",
                    }}
                />
                <ColumnLayout>
                    <Text
                        text={"생일"}
                        cssObj={{
                            fontColor: theme.color.lightBlack,
                            margin: "0 0 3px 0",
                        }}
                    />
                    <BirthLayout>
                        <Select
                            list={years}
                            defaultValue={year}
                            {...setOption("year")}
                        />
                        <Select
                            list={months}
                            defaultValue={month}
                            {...setOption("month")}
                        />
                        <Select
                            list={days}
                            defaultValue={day}
                            {...setOption("day")}
                        />
                    </BirthLayout>
                </ColumnLayout>
                <ColumnLayout>
                    <Text
                        text={"성별"}
                        cssObj={{
                            fontColor: theme.color.lightBlack,
                            margin: "0 0 3px 0",
                        }}
                    />
                    <GenderLayout>
                        <RadioInput
                            text={"여자"}
                            id={"female"}
                            value={"female"}
                            {...setOption("gender")}
                        />
                        <RadioInput
                            text={"남자"}
                            id={"male"}
                            value={"male"}
                            {...setOption("gender")}
                        />
                        <RadioInput
                            text={"개인 지정"}
                            id={"all"}
                            value={""}
                            {...setOption("gender")}
                        />
                    </GenderLayout>
                </ColumnLayout>
                <Text
                    text={
                        "가입하기 버튼을 클릭하면 Facebook의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다. Facebook으로부터 SMS 알림을 받을 수 있으며 알림은 언제든지 옵트 아웃할 수 있습니다."
                    }
                    tag={"p"}
                    cssObj={{
                        fontSize: "11px",
                        fontColor: theme.color.lightBlack,
                    }}
                />
                <BagicButton
                    text={"가입하기"}
                    type={"submit"}
                    cssObj={{
                        width: "194px",
                        height: "36px",
                        backgroundColor: theme.color.lightGreen,
                        fontSize: "17px",
                    }}
                />
            </FormLayout>
        </Layout>
    );
};
