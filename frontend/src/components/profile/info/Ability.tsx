import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
//functions
import { userDetailActionCreator } from "../../../modules/action/user";
//components
import { AddAbility } from "./AddAbility";
import { AddUniversity } from "./AddUniversity";
import { AddSchool } from "./AddSchool";
import { Text } from "../../common/Text";

export const Ability = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userDetailActionCreator.getAbility());
    }, []);

    return (
        <>
            <Text
                text={"직장"}
                cssObj={{ fontSize: "17px", fontWeight: 600 }}
            />
            <AddAbility />
            <Text
                text={"대학"}
                cssObj={{ fontSize: "17px", fontWeight: 600 }}
            />
            <AddUniversity />
            <Text
                text={"고등학교"}
                cssObj={{ fontSize: "17px", fontWeight: 600 }}
            />
            <AddSchool />
        </>
    );
};
