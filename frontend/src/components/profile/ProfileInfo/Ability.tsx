import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setGetAbility } from "../../../modules/action/userDetail";
import { AddAbility } from "./AddAbility";
import { AddUniversity } from "./AddUniversity";
import { AddSchool } from "./AddSchool";
import { Text } from "../../common/Text";

export const Ability = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setGetAbility());
    }, []);

    return (
        <>
            <Text text={"직장"} fs={"17px"} fw={600} />
            <AddAbility />
            <Text text={"대학"} fs={"17px"} fw={600} />
            <AddUniversity />
            <Text text={"고등학교"} fs={"17px"} fw={600} />
            <AddSchool />
        </>
    );
};
