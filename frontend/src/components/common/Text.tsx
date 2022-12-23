import styled from "../../styles/theme-components";

interface StyleProps {
    fontColor?: string;
    fontWeight?: number;
    fontSize?: string;
    width?: string;
    margin?: string;
    padding?: string;
}

const Wrapper = styled.div<StyleProps>`
    width: ${(props) => props.width || "100%"};
    margin: ${(props) => props.margin || "0"};
    padding: ${(props) => props.padding || "0"};
    font-size: ${(props) => props.fontSize || "12px"};
    font-weight: ${(props) => props.fontWeight || 400};
    color: ${(props) => props.fontColor};
`;

interface Props {
    text: string | null;
    tag?: keyof JSX.IntrinsicElements;
    cssObj?: {
        fontColor?: string;
        fontWeight?: number;
        fontSize?: string;
        width?: string;
        margin?: string;
        padding?: string;
    };
}

export const Text = ({ text, cssObj, tag = "div" }: Props) => {
    return (
        <Wrapper as={tag} {...cssObj}>
            {text}
        </Wrapper>
    );
};
