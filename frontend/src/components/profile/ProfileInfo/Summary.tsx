import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setGetAbility, setGetInfo } from "../../../modules/action/userDetail";
import { AddAbility } from "./AddAbility";
import { AddUniversity } from "./AddUniversity";
import { AddSchool } from "./AddSchool";
import { AddNumber } from "./AddNumber";
import { AddAddress } from "./AddAddress";
import { Text } from "../../common/Text";

export const Summary = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setGetAbility());
        dispatch(setGetInfo());
    }, []);

    return (
        <>
            <Text text={"직장"} fs={"17px"} fw={600} />
            <AddAbility />
            <Text text={"대학"} fs={"17px"} fw={600} />
            <AddUniversity />
            <Text text={"고등학교"} fs={"17px"} fw={600} />
            <AddSchool />
            <Text text={"전화번호"} fs={"17px"} fw={600} />
            <AddNumber />
            <Text text={"주소"} fs={"17px"} fw={600} />
            <AddAddress />
        </>
    );
};
