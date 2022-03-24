import theme from "../../../styles/theme";
import styled from "../../../styles/theme-components";

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
    :hover {
        background-color: ${(props) => props.theme.color.lightGray};
    }
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
    onClick?: () => void;
}

export const Button2 = ({
    text,
    type,
    width,
    height,
    fs,
    fw,
    fc,
    color,
    onClick,
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
            onClick={onClick}
        >
            {text}
        </Wrapper>
    );
};

Button2.defaultProps = {
    text: "버튼",
    type: "button",
    width: "183px",
    height: "32px",
    fs: "15px",
    fw: 600,
    color: theme.color.white,
    fc: theme.color.lightBlack,
};
