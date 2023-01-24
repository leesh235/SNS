import styled from "../../../styles/theme-components";
import theme from "../../../styles/theme";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//functions
import { informationActionCreator } from "../../../modules/action/information";
import { useModal } from "../../../hooks/common/useModal";
import { useInfoFunc } from "../../../hooks/profile/useInfoFunc";
import { useForm } from "../../../hooks/common/useForm";
import { abilityValidate } from "../../../utils/validate";
//components
import { Text } from "../../common/Text";
import { MoreIcon } from "../../../assets/icon/MoreIcon";
import { HoverButton } from "../../common/button/HoverButton";
import { Input4 } from "../../common/input/Input4";
import { AddButton } from "./AddButton";
import { AddForm } from "./AddForm";
import { SeeMoreLayout } from "../../common/SeeMoreLayout";

const AddButtonLayout = styled.div`
    width: 100%;
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${(props) => props.theme.color.seaBule};
    cursor: pointer;
    :hover {
        text-decoration: underline;
    }
`;

const AddIcon = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 12px;
    border: 1px solid ${(props) => props.theme.color.seaBule};
    color: ${(props) => props.theme.color.seaBule};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AddText = styled.div`
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
    color: ${(props) => props.theme.color.seaBule};
    margin-left: 12px;
`;

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

const SettingIcon = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 18px;
    background-color: ${(props) => props.theme.color.gray};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :hover {
        background-color: ${(props) => props.theme.color.lightGray};
    }
    position: relative;
`;

const ButtonLayout = styled.div`
    width: auto;
    height: auto;
    padding: 6px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 4px 8px rgb(0 0 0 / 10%);
    border-radius: 6px;
    position: absolute;
    top: 50px;
    right: 2px;
`;

const FormLayout = styled.form`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    > :nth-child(n + 2) {
        margin-top: 8px;
    }
`;

const ButtonFlexLayout = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding-top: 10px;
    border-top: 1px solid ${(props) => props.theme.color.gray};
    > :nth-last-child(1) {
        width: auto;
        > :nth-child(1) {
            margin-right: 5px;
        }
    }
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
                    <Input4
                        {...setOption("name")}
                        title={"학교"}
                        defaultValue={data?.university}
                    />
                    <Input4
                        {...setOption("major")}
                        title={"전공"}
                        defaultValue={data?.major}
                    />
                    <Input4
                        {...setOption("degree")}
                        title={"학위"}
                        defaultValue={data?.degree}
                    />
                </AddForm>
            )}
        </>
    );
};
