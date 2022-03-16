import theme from "../../styles/theme";
import styled from "../../styles/theme-components";

const Wrapper = styled.div<StyleProps>`
    width: ${(props) => props.width};
    font-size: ${(props) => props.fs};
    font-weight: ${(props) => props.fw};
    line-height: ${(props) => props.lh};
    color: ${(props) => props.fc};
`;

interface StyleProps {
    fs?: string;
    fw?: number;
    lh?: string;
    fc?: string;
    width?: string;
}

interface Props extends StyleProps {
    text: string | null;
    tag?: string;
}

export const Text = ({ text, fs, fw, lh, fc, width, tag }: Props) => {
    return (
        <Wrapper fs={fs} fw={fw} lh={lh} fc={fc} width={width}>
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
    fc: theme.color.black,
};
