import styled from "../../../styles/theme-components";
import theme from "../../../styles/theme";
import { useEffect } from "react";
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
            > :nth-child(1) {
                margin-right: 5px;
            }
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

export const School = ({ data }: Props) => {
    const { modal, handleModal, CloseModal } = useModal();

    const { handleWrite, handleDelete } = useInfoFunc({
        id: data?.id,
        type: "school",
    });

    const { errors, setOption, handleSubmit } = useForm({
        initValues: {},
        validate: abilityValidate,
        onSubmit: (formData: any) => {
            handleWrite({ formData });
            CloseModal(0);
        },
    });

    useEffect(() => {}, [data]);

    return (
        <>
            <Text
                text={"고등학교"}
                cssObj={{ fontSize: "17px", fontWeight: 600 }}
            />
            {!modal && !data && (
                <AddButton text="고등학교 추가" onClick={handleModal} />
            )}
            {!modal && data && (
                <Layout>
                    <Icon />
                    <div>
                        <div>
                            <Text
                                text={data?.name}
                                cssObj={{ fontSize: "15px" }}
                            />
                        </div>
                    </div>

                    <SeeMoreLayout width="200px">
                        <MoreIcon backgroundColor={theme.color.gray} />
                        <HoverButton
                            text={"학교 수정"}
                            cssObj={{ textAlign: "left" }}
                            onClick={handleModal}
                        />
                        <HoverButton
                            text={"학교 삭제"}
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
                        defaultValue={data?.school}
                    />
                </AddForm>
            )}
        </>
    );
};
