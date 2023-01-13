import styled from "../../../styles/theme-components";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//functions
import { userDetailActionCreator } from "../../../modules/action/user";
import theme from "../../../styles/theme";
//components
import { Text } from "../../common/Text";
import { MoreIcon } from "../../../assets/icon/MoreIcon";
import { Button2 } from "../../common/button/Button2";
import { Input4 } from "../../common/input/Input4";

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

const GridLayout = styled.div`
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

export const AddAbility = () => {
    const dispatch = useDispatch();

    const [open, setOpen] = useState<boolean>(false);
    const [openBtn, setOpenBtn] = useState<boolean>(false);

    const { loading, data, error } = useSelector(
        (state: any) => state.userDetail.ability
    );

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleModify = () => {
        setOpenBtn(false);
        setOpen(true);
    };

    const handleDelete = (id: any) => {
        setOpenBtn(false);
        if (window.confirm("직장 정보를 삭제하시겠습니까?")) {
            console.log("삭제");
            dispatch(userDetailActionCreator.deleteAbility({ id }));
            setTimeout(() => {
                dispatch(userDetailActionCreator.getAbility());
            }, 10);
        }
    };

    const handleSave: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const { job, position, address } = e.currentTarget;
        console.log(job.value, position.value, address.value);
        dispatch(
            userDetailActionCreator.setAbility({
                name: job.value,
                position: position.value,
                address: address.value,
            })
        );
        setTimeout(() => {
            dispatch(userDetailActionCreator.getAbility());
        }, 10);
        setOpen(false);
    };

    useEffect(() => {}, [loading]);

    if (!open && data?.ability === null) {
        return (
            <AddButtonLayout onClick={handleOpen}>
                <AddIcon></AddIcon>
                <AddText>직장 추가</AddText>
            </AddButtonLayout>
        );
    } else if (!open && data?.ability !== null) {
        return (
            <GridLayout>
                <Icon />
                <div>
                    <div>
                        <Text
                            text={data?.ability?.job}
                            tag={"span"}
                            cssObj={{ fontSize: "13px", fontWeight: 600 }}
                        />
                        <Text
                            text={data?.ability?.position}
                            tag={"span"}
                            cssObj={{ fontSize: "13px" }}
                        />
                    </div>
                    <Text
                        text={`${data?.ability?.start}-${data?.ability?.end}`}
                        cssObj={{ fontSize: "13px" }}
                    />
                </div>
                <SettingIcon
                    onClick={() => {
                        setOpenBtn(!openBtn);
                    }}
                >
                    <MoreIcon />
                    {openBtn && (
                        <ButtonLayout>
                            <Button2
                                text={"직장 수정"}
                                width={"120px"}
                                onClick={handleModify}
                            />
                            <Button2
                                text={"직장 삭제"}
                                width={"120px"}
                                onClick={() => {
                                    handleDelete(data?.ability?.id);
                                }}
                            />
                        </ButtonLayout>
                    )}
                </SettingIcon>
            </GridLayout>
        );
    } else {
        return (
            <FormLayout onSubmit={handleSave}>
                <Input4
                    name={"job"}
                    title={"회사"}
                    defaultValue={data?.ability?.job || ""}
                />
                <Input4
                    name={"position"}
                    title={"직위"}
                    defaultValue={data?.ability?.position || ""}
                />
                <Input4
                    name={"address"}
                    title={"도서/지역"}
                    defaultValue={data?.ability?.address || ""}
                />
                <ButtonFlexLayout>
                    <div>
                        <Button2
                            text={"취소"}
                            color={theme.color.gray}
                            width={"62px"}
                            onClick={handleClose}
                            type={"button"}
                        />
                        <Button2
                            text={"저장"}
                            color={theme.color.seaBule}
                            fc={theme.color.white}
                            width={"62px"}
                            type={"submit"}
                        />
                    </div>
                </ButtonFlexLayout>
            </FormLayout>
        );
    }
};
