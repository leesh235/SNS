import styled from "../../../styles/theme-components";
import theme from "../../../styles/theme";
//functions
import { useModal } from "../../../hooks/common/useModal";
import { useInfoFunc } from "../../../hooks/profile/useInfoFunc";
import { useForm } from "../../../hooks/common/useForm";
import { abilityValidate } from "../../../utils/validate";
//components
import { Text } from "../../common/Text";
import { MoreIcon } from "../../../assets/icon/MoreIcon";
import { HoverButton } from "../../common/button/HoverButton";
import { HoverInput } from "../../common/input/HoverInput";
import { AddButton } from "./AddButton";
import { AddForm } from "./AddForm";
import { SeeMoreLayout } from "../../common/SeeMoreLayout";

const Layout = styled.div`
    width: 100%;
    height: 52px;
    display: grid;
    grid-template-columns: 52px calc(100% - 92px) 40px;
    grid-template-rows: 52px;
    align-items: center;
    > :nth-child(2) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        > :nth-child(1) {
            width: 100%;
            display: flex;
            flex-direction: row;
        }
    }
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.color.gray};
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface Props {
    data?: any;
}

export const University = ({ data }: Props) => {
    const { modal, handleModal } = useModal();

    const { handleWrite, handleDelete } = useInfoFunc({
        id: data?.id,
        type: "university",
    });

    const { errors, setOption, handleSubmit } = useForm({
        initValues: {},
        validate: abilityValidate,
        onSubmit: (formData: any) => {
            handleWrite({ formData });
        },
    });

    return (
        <>
            <Text
                text={"대학"}
                cssObj={{ fontSize: "17px", fontWeight: 600 }}
            />
            {!modal && data === null && (
                <AddButton text="대학 추가" onClick={handleModal} />
            )}
            {!modal && data !== null && (
                <Layout>
                    <Icon />
                    <div>
                        <div>
                            <Text
                                text={data?.university}
                                cssObj={{ fontSize: "13px", fontWeight: 600 }}
                            />
                            <Text
                                text={data?.major}
                                cssObj={{ fontSize: "13px" }}
                            />
                        </div>
                        <Text
                            text={`${data?.degree}/${data?.start}-${data?.end}`}
                            cssObj={{ fontSize: "13px" }}
                        />
                    </div>

                    <SeeMoreLayout width="200px">
                        <MoreIcon backgroundColor={theme.color.gray} />
                        <HoverButton
                            text={"대학 수정"}
                            cssObj={{ textAlign: "left" }}
                            onClick={handleModal}
                        />
                        <HoverButton
                            text={"대학 삭제"}
                            cssObj={{ textAlign: "left" }}
                            onClick={handleDelete}
                        />
                    </SeeMoreLayout>
                </Layout>
            )}
            {modal && (
                <AddForm onSubmit={handleSubmit} onClose={handleModal}>
                    <HoverInput
                        {...setOption("name")}
                        title={"학교"}
                        defaultValue={data?.university}
                    />
                    <HoverInput
                        {...setOption("major")}
                        title={"전공"}
                        defaultValue={data?.major}
                    />
                    <HoverInput
                        {...setOption("degree")}
                        title={"학위"}
                        defaultValue={data?.degree}
                    />
                </AddForm>
            )}
        </>
    );
};
