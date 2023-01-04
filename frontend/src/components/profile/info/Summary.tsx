import { useEffect } from "react";
import { useDispatch } from "react-redux";
//functions
import { userDetailActionCreator } from "../../../modules/action/userDetail";
//components
import { AddAbility } from "./AddAbility";
import { AddUniversity } from "./AddUniversity";
import { AddSchool } from "./AddSchool";
import { AddNumber } from "./AddNumber";
import { AddAddress } from "./AddAddress";
import { Text } from "../../common/Text";

export const Summary = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userDetailActionCreator.getAbility());
        dispatch(userDetailActionCreator.getInfo());
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
