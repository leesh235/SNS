import styled, { css } from "../../../styles/theme-components";

interface StyleProps {
    width?: string;
    height?: string;
    borderRadius?: string;
    error?: string;
}

const Labal = styled.label<StyleProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: ${(props) => props.width || "125px"};
    height: ${(props) => props.height || "34px"};
    border-radius: ${(props) => props.borderRadius || "6px"};
    padding: 0 10px;
    border: 1px solid ${(props) => props.theme.color.lightGray};
    font-size: 15px;
    line-height: ${(props) => props.height || "34px"};
    cursor: pointer;
    ${(props) =>
        props.error &&
        css`
            border: solid 1px ${props.theme.color.red};
            caret-color: ${props.theme.color.red};
            :focus {
                border: solid 1px ${props.theme.color.lightGray};
            }
        `}
`;

const Input = styled.input``;

interface Props {
    text?: string;
    id?: string;
    name?: string;
    value?: string | number;
    onChange?: any;
    error?: string;
    cssObj?: {
        width?: string;
        height?: string;
        borderRadius?: string;
    };
}

export const RadioInput = ({
    text,
    id,
    name,
    value,
    onChange,
    error,
    cssObj,
}: Props) => {
    return (
        <Labal htmlFor={id} error={error} {...cssObj}>
            {text}
            <Input
                type="radio"
                id={id}
                name={name}
                value={value}
                onChange={onChange}
            ></Input>
        </Labal>
    );
};
