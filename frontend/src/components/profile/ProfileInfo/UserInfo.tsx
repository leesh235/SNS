import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setGetInfo } from "../../../modules/action/userDetail";
import { AddNumber } from "./AddNumber";
import { AddAddress } from "./AddAddress";
import { Text } from "../../common/Text";

export const UserInfo = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setGetInfo());
    }, []);

    return (
        <>
            <Text text={"전화번호"} fs={"17px"} fw={600} />
            <AddNumber />
            <Text text={"주소"} fs={"17px"} fw={600} />
            <AddAddress />
        </>
    );
};
