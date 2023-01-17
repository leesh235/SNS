import styled from "../../../styles/theme-components";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { informationActionCreator } from "../../../modules/action/information";
//functions
import theme from "../../../styles/theme";
//components
import { Text } from "../../common/Text";
import { MoreIcon } from "../../../assets/icon/MoreIcon";
import { HoverButton } from "../../common/button/HoverButton";
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

export const AddSchool = () => {
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
        if (window.confirm("고등학교 정보를 삭제하시겠습니까?")) {
            console.log("삭제");
            dispatch(informationActionCreator.removeSchool({ id }));
            setTimeout(() => {
                dispatch(informationActionCreator.getInfo());
            }, 10);
        }
    };

    const handleSave: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const { school } = e.currentTarget;
        console.log(school.value);
        dispatch(informationActionCreator.addSchool({ name: school.value }));
        setTimeout(() => {
            dispatch(informationActionCreator.getInfo());
        }, 10);
        setOpen(false);
    };

    useEffect(() => {}, [loading]);

    if (!open && data?.school === null) {
        return (
            <AddButtonLayout onClick={handleOpen}>
                <AddIcon></AddIcon>
                <AddText>고등학교 추가</AddText>
            </AddButtonLayout>
        );
    } else if (!open && data?.school !== null) {
        return (
            <GridLayout>
                <Icon />
                <div>
                    <div>
                        <Text
                            text={data?.school?.school}
                            cssObj={{ fontSize: "15px" }}
                        />
                    </div>
                    <Text
                        text={`${data?.school?.start}-${data?.school?.end}`}
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
                            <HoverButton
                                text={"학교 수정"}
                                cssObj={{ width: "120px" }}
                                onClick={handleModify}
                            />
                            <HoverButton
                                text={"학교 삭제"}
                                cssObj={{
                                    width: "120px",
                                }}
                                onClick={() => {
                                    handleDelete(data?.school?.id);
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
                    name={"school"}
                    title={"학교"}
                    defaultValue={data?.school?.school}
                />
                <ButtonFlexLayout>
                    <div>
                        <HoverButton
                            text={"취소"}
                            cssObj={{ width: "62px" }}
                            onClick={handleClose}
                        />
                        <HoverButton
                            text={"저장"}
                            cssObj={{
                                width: "62px",
                                fontColor: theme.color.white,
                                color: theme.color.seaBule,
                            }}
                            type={"submit"}
                        />
                    </div>
                </ButtonFlexLayout>
            </FormLayout>
        );
    }
};
