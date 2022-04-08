import styled from "../../styles/theme-components";
import { useState } from "react";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: auto;
`;

const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 105px;
    height: 34px;
    border: 1px solid ${(props) => props.theme.color.lightGray};
    border-radius: 6px;
    padding: 0 10px;
`;

const Labal = styled.label`
    font-size: 15px;
    line-height: 36px;
`;

const Input = styled.input``;

interface Props {}

export const GenderBox = ({}: Props) => {
    return (
        <Wrapper>
            <Item>
                <Labal>여자</Labal>
                <Input
                    type="radio"
                    name="gender"
                    value={"female"}
                    required={true}
                ></Input>
            </Item>
            <Item>
                <Labal>남자</Labal>
                <Input
                    type="radio"
                    name="gender"
                    value={"male"}
                    required={true}
                ></Input>
            </Item>
            <Item>
                <Labal>개인 지정</Labal>
                <Input type="radio" name="gender"></Input>
            </Item>
        </Wrapper>
    );
};
