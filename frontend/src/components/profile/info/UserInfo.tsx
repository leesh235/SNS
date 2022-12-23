import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
//functions
import { setGetInfo } from "../../../modules/action/userDetail";
//components
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
            <Text
                text={"전화번호"}
                cssObj={{ fontSize: "17px", fontWeight: 600 }}
            />
            <AddNumber />
            <Text
                text={"주소"}
                cssObj={{ fontSize: "17px", fontWeight: 600 }}
            />
            <AddAddress />
        </>
    );
};
