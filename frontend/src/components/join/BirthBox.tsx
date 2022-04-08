import styled from "../../styles/theme-components";
import { getNowDate } from "../../utils/Calendar";
import { Text } from "../common/Text";
import { useState } from "react";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: auto;
`;

const Select = styled.select`
    width: 125px;
    height: 36px;
    font-size: 15px;
    line-height: 20px;
    border: 1px solid ${(props) => props.theme.color.lightGray};
    border-radius: 6px;
    outline: none;
`;

const Option = styled.option`
    font-size: 15px;
    line-height: 20px;
`;

interface Props {}

export const BirthBox = ({}: Props) => {
    const { years, months, days, year, month, day } = getNowDate();
    return (
        <Wrapper>
            <Select name="year" defaultValue={year} required={true}>
                {years.map((val, idx) => {
                    return (
                        <Option key={idx} value={year - idx}>
                            {year - idx}
                        </Option>
                    );
                })}
            </Select>
            <Select name="month" defaultValue={month} required={true}>
                {months.map((val, idx) => {
                    return (
                        <Option key={idx} value={val}>
                            {val}월
                        </Option>
                    );
                })}
            </Select>
            <Select name="day" defaultValue={day} required={true}>
                {days.map((val, idx) => {
                    return (
                        <Option key={idx} value={idx + 1}>
                            {idx + 1}
                        </Option>
                    );
                })}
            </Select>
        </Wrapper>
    );
};
