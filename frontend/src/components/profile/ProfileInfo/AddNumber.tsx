import styled from "../../../styles/theme-components";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGetInfo, setNumber } from "../../../modules/action/userDetail";
import { Text } from "../../common/Text";
import { MoreIcon } from "../../../assets/icon/MoreIcon";
import { Button2 } from "../../common/button/Button2";
import { Input4 } from "../../common/input/Input4";
import theme from "../../../styles/theme";

const AddButtonWrapper = styled.div`
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

const GridWrapper = styled.div`
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

const FormWrapper = styled.form`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    > :nth-child(n + 2) {
        margin-top: 8px;
    }
`;

const ButtonFlexWrapper = styled.div`
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

export const AddNumber = () => {
    const dispatch = useDispatch();

    const [open, setOpen] = useState<boolean>(false);

    const { loading, data, error } = useSelector(
        (state: any) => state.userDetail.info
    );

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleModify = () => {
        setOpen(true);
    };

    const handleSave: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const { number } = e.currentTarget;
        console.log(number.value);
        // dispatch(setAbility({}));
        setOpen(false);
    };

    if (!open && data?.number === null) {
        return (
            <AddButtonWrapper onClick={handleOpen}>
                <AddIcon></AddIcon>
                <AddText>휴대폰 추가</AddText>
            </AddButtonWrapper>
        );
    } else if (!open && data?.number !== null) {
        const { number } = data;
        return (
            <GridWrapper>
                <Icon />
                <Text text={number} fs={"15px"} width={"auto"} />
                <SettingIcon onClick={handleModify}>
                    <MoreIcon />
                </SettingIcon>
            </GridWrapper>
        );
    } else {
        return (
            <FormWrapper onSubmit={handleSave}>
                <Input4
                    name={"number"}
                    title={"전화번호"}
                    defaultValue={data?.number}
                />
                <ButtonFlexWrapper>
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
                </ButtonFlexWrapper>
            </FormWrapper>
        );
    }
};
