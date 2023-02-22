import styled from "../../../styles/theme-components";
import { useSelector } from "react-redux";
//functions
import theme from "../../../styles/theme";
import { useModal } from "../../../hooks/common/useModal";
import { useForm } from "../../../hooks/common/useForm";
import { useGetProfile } from "../../../hooks/profile/useGetProfile";
import { useProfileFunc } from "../../../hooks/profile/useProfileFunc";
import { modifyInroduceValidate } from "../../../utils/validate";
//components
import { Text } from "../../common/Text";
import { HoverButton } from "../../common/button/HoverButton";
import { BoxShadow } from "../../common/styles/BoxShadow";

const Layout = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > :nth-child(n + 1) {
        margin-bottom: 16px;
    }
    > form {
        width: 95%;
        height: auto;
    }
`;

const FlexLayout = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: end;
    > :nth-child(1) {
        margin-right: 5px;
    }
`;

const IntroduceInput = styled.textarea`
    width: 100%;
    height: 60px;
    padding: 8px 12px;
    border: 1px solid ${(props) => props.theme.color.lightGray};
    border-radius: 6px;
    outline: none;
    resize: none;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    background-color: ${(props) => props.theme.color.gray};
    :hover {
        background-color: ${(props) => props.theme.color.lightGray};
    }
    :focus {
        background-color: ${(props) => props.theme.color.white};
        border: 1px solid ${(props) => props.theme.color.seaBule};
    }
`;

const IntroduceButton = styled.button`
    width: 54px;
    height: 36px;
    border: 0;
    border-radius: 6px;
    background-color: ${(props) => props.theme.color.gray};
    font-size: 15px;
    font-weight: 600;
    color: ${(props) => props.theme.color.black};
    :hover {
        background-color: ${(props) => props.theme.color.lightGray};
    }
`;

interface Props {
    handleUrl: any;
}

export const IntroduceCard = ({ handleUrl }: Props) => {
    const login = useSelector((state: any) => state?.profile?.simple);
    const { loading, data, error } = useSelector(
        (state: any) => state?.profile?.profile
    );

    const { modal, handleModal, CloseModal } = useModal();

    const { modifyIntroduce } = useProfileFunc();

    const { errors, setOption, handleSubmit } = useForm({
        initValues: { introduce: data?.introduce },
        validate: modifyInroduceValidate,
        onSubmit: (formData: any) => {
            modifyIntroduce(formData);
            CloseModal();
        },
    });

    if (data?.email !== login.data?.email)
        return (
            <BoxShadow tag={"article"}>
                <Layout>
                    <Text
                        text={"소개"}
                        cssObj={{
                            width: "95%",
                            fontSize: "20px",
                            fontWeight: 700,
                            margin: "10px",
                        }}
                    />
                    <Text
                        text={data?.introduce}
                        tag={"span"}
                        cssObj={{
                            fontSize: "15px",
                            margin: "8px 0",
                            width: "auto",
                        }}
                    />
                </Layout>
            </BoxShadow>
        );
    return (
        <BoxShadow tag={"article"}>
            <Layout>
                <Text
                    text={"소개"}
                    cssObj={{
                        width: "95%",
                        fontSize: "20px",
                        fontWeight: 700,
                        margin: "10px",
                    }}
                />
                {modal ? (
                    <form onSubmit={handleSubmit}>
                        <IntroduceInput
                            {...setOption("introduce")}
                            defaultValue={data?.introduce}
                            placeholder="   회원님에 대해 소개해주세요"
                        />
                        <Text
                            text={"101자 남음"}
                            cssObj={{
                                fontColor: theme.color.darkGray,
                                fontSize: "15px",
                                margin: "8px 0",
                            }}
                        />
                        <FlexLayout>
                            <IntroduceButton
                                type="button"
                                onClick={handleModal}
                            >
                                취소
                            </IntroduceButton>
                            <IntroduceButton>저장</IntroduceButton>
                        </FlexLayout>
                    </form>
                ) : (
                    <>
                        <Text
                            text={data?.introduce}
                            tag={"span"}
                            cssObj={{
                                fontSize: "15px",
                                margin: "8px 0",
                                width: "auto",
                            }}
                        />
                        <HoverButton
                            text={"소개 추가"}
                            cssObj={{
                                fontColor: theme.color.black,
                                color: theme.color.gray,
                            }}
                            onClick={handleModal}
                        />
                    </>
                )}

                <HoverButton
                    text={"상세 정보 수정"}
                    cssObj={{
                        fontColor: theme.color.black,
                        color: theme.color.gray,
                    }}
                    onClick={() => {
                        handleUrl({ id: 1 });
                    }}
                />
                <HoverButton
                    text={"대표 사진 추가"}
                    cssObj={{
                        fontColor: theme.color.black,
                        color: theme.color.gray,
                    }}
                />
            </Layout>
        </BoxShadow>
    );
};
