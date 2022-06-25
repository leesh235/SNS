import styled from "../../../styles/theme-components";
import { useState } from "react";

const Wrapper = styled.div<StyleProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: calc(100% - 32px);
    min-height: 36px;
    height: auto;
    padding: 10px 16px;
    border-radius: 8px;
    border: 1px solid
        ${(props) =>
            props.focus ? props.theme.color.seaBule : props.theme.color.gray};
    :hover {
        border: 1px solid
            ${(props) =>
                props.focus
                    ? props.theme.color.seaBule
                    : props.theme.color.lightBlack};
    }
    > input {
        width: 100%;
        height: ${(props) => (props.focus ? "20px" : "36px")};
        border: 0;
        ::placeholder {
            font-size: 16px;
        }
    }
`;

const Ttile = styled.span<StyleProps>`
    width: 100%;
    font-size: 14px;
    color: ${(props) => props.theme.color.seaBule};
`;

interface StyleProps {
    focus?: boolean;
}

interface Props extends StyleProps {
    name?: string;
    title?: string;
    defaultValue?: string;
}

export const Input4 = ({ name, title, defaultValue }: Props) => {
    const [focus, setFocus] = useState<boolean>(false);

    const handleOnFocus = () => {
        setFocus(true);
    };

    const handleOnBlur = () => {
        setFocus(false);
    };

    return (
        <Wrapper focus={focus}>
            <Ttile>{focus && title}</Ttile>
            <input
                name={name}
                defaultValue={defaultValue}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                placeholder={!focus ? title : ""}
            />
        </Wrapper>
    );
};

Input4.defaultProps = {};
