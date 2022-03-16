import styled from "../../../styles/theme-components";
import { useState } from "react";

const Wrapper = styled.input<StyleProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: ${(props) => props.padding};
    border: solid 1px
        ${(props) =>
            props.focus
                ? props.theme.color.seaBule
                : props.theme.color.lightGray};
    border-radius: 5px;
    font-size: 15px;
    color: ${(props) => props.theme.color.black};
    caret-color: ${(props) => props.theme.color.seaBule};
    ::placeholder {
        font-size: 15px;
        color: ${(props) => props.theme.color.lightGray};
    }
`;

interface StyleProps {
    width?: string;
    height?: string;
    padding?: string;
    focus?: boolean;
}

interface Props extends StyleProps {
    type?: "email" | "number" | "password";
    placeholder?: string;
}

export const RequireInput = ({
    type,
    width,
    height,
    padding,
    placeholder,
}: Props) => {
    const [focus, setForcus] = useState<boolean>(false);

    const handleOnFocus = () => {
        setForcus(true);
    };

    const handleOnBlur = () => {
        setForcus(false);
    };

    return (
        <Wrapper
            type={type}
            width={width}
            height={height}
            padding={padding}
            placeholder={placeholder}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            focus={focus}
        />
    );
};

RequireInput.defaultProps = {
    width: "375px",
    height: "16px",
    padding: "11px",
};
