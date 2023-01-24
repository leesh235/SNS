import styled from "../../../styles/theme-components";
import theme from "../../../styles/theme";
//functions
import { useModal } from "../../../hooks/common/useModal";
import { useForm } from "../../../hooks/common/useForm";
import { abilityValidate } from "../../../utils/validate";
//components
import { Text } from "../../common/Text";
import { MoreIcon } from "../../../assets/icon/MoreIcon";
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

export const Number = ({ data }: Props) => {
    const { modal, handleModal } = useModal();

    const handleDelete = () => {};

    const { errors, setOption, handleSubmit } = useForm({
        initValues: {},
        validate: (errors: any) => {},
        onSubmit: (formData: any) => {},
    });

    return (
        <>
            <Text
                text={"전화번호"}
                cssObj={{ fontSize: "17px", fontWeight: 600 }}
            />
            {!modal && data === null && (
                <AddButton text="휴대폰 추가" onClick={handleModal} />
            )}
            {!modal && data !== null && (
                <Layout>
                    <Icon />
                    <Text text={data} cssObj={{ fontSize: "15px" }} />
                    <SeeMoreLayout width="200px">
                        <MoreIcon backgroundColor={theme.color.gray} />
                    </SeeMoreLayout>
                </Layout>
            )}
            {modal && (
                <AddForm onSubmit={handleSubmit} onClose={handleModal}>
                    <HoverInput
                        {...setOption("number")}
                        title={"전화번호"}
                        defaultValue={data}
                    />
                </AddForm>
            )}
        </>
    );
};
