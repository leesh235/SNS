import theme from "../../styles/theme";
import styled from "../../styles/theme-components";

const Wrapper = styled.button<StyleProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: 0 16px;
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.color};
    font-size: ${(props) => props.fs};
    font-weight: ${(props) => props.fw};
    color: ${(props) => props.fc};
`;

interface StyleProps {
    width?: string;
    height?: string;
    fs?: string;
    fw?: number;
    fc?: string;
    color?: string;
}

interface Props extends StyleProps {
    text: string;
    type: "submit" | "button" | "reset";
}

export const Button = ({
    text,
    type,
    width,
    height,
    fs,
    fw,
    fc,
    color,
}: Props) => {
    return (
        <Wrapper
            type={type}
            width={width}
            height={height}
            fs={fs}
            fw={fw}
            fc={fc}
            color={color}
        >
            {text}
        </Wrapper>
    );
};

Button.defaultProps = {
    text: "버튼",
    type: "submit",
    width: "364px",
    height: "48px",
    fs: "20px",
    fw: 700,
    color: theme.color.seaBule,
    fc: theme.color.white,
};
