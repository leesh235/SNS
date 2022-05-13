import theme from "../../styles/theme";
import styled from "../../styles/theme-components";

const Wrapper = styled.div<StyleProps>`
    width: ${(props) => props.width};
    font-size: ${(props) => props.fs};
    font-weight: ${(props) => props.fw};
    line-height: ${(props) => props.lh};
    text-align: ${(props) => props.ta};
    color: ${(props) => props.fc};
    margin: ${(props) => props.margin};
    word-break: break-all;
`;

interface StyleProps {
    fs?: string;
    fw?: number;
    lh?: string;
    fc?: string;
    width?: string;
    margin?: string;
    ta?: "left" | "center" | "right";
}

interface Props extends StyleProps {
    text: string | null;
    tag?: keyof JSX.IntrinsicElements;
}

export const Text = ({
    text,
    fs,
    fw,
    lh,
    fc,
    width,
    margin,
    tag,
    ta,
}: Props) => {
    return (
        <Wrapper
            as={tag}
            fs={fs}
            fw={fw}
            lh={lh}
            fc={fc}
            ta={ta}
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
    ta: "left",
};
