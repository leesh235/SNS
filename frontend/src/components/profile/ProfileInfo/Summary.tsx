import styled from "../../../styles/theme-components";
import { AddAbility } from "./AddAbility";
import { AddUniversity } from "./AddUniversity";
import { AddSchool } from "./AddSchool";
import { AddNumber } from "./AddNumber";
import { AddAddress } from "./AddAddress";

export const Summary = () => {
    return (
        <>
            <AddAbility />
            <AddUniversity />
            <AddSchool />
            <AddNumber />
            <AddAddress />
        </>
    );
};
