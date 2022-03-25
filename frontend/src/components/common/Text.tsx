import theme from "../../styles/theme";
import styled from "../../styles/theme-components";

const Wrapper = styled.div<StyleProps>`
    width: ${(props) => props.width};
    font-size: ${(props) => props.fs};
    font-weight: ${(props) => props.fw};
    line-height: ${(props) => props.lh};
    text-align: left;
    color: ${(props) => props.fc};
    margin: ${(props) => props.margin};
`;

interface StyleProps {
    fs?: string;
    fw?: number;
    lh?: string;
    fc?: string;
    width?: string;
    margin?: string;
}

interface Props extends StyleProps {
    text: string | null;
    tag?: keyof JSX.IntrinsicElements;
}

export const Text = ({ text, fs, fw, lh, fc, width, margin, tag }: Props) => {
    return (
        <Wrapper
            as={tag}
            fs={fs}
            fw={fw}
            lh={lh}
            fc={fc}
            width={width}
            margin={margin}
        >
            {text}
        </Wrapper>
    );
};

Text.defaultProps = {
    tag: "div",
    width: "100%",
    fs: "12px",
    fw: 400,
    lh: "12px",
    margin: "0",
    fc: theme.color.black,
};
