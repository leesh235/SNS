import styled from "../../../styles/theme-components";

interface StyleProps {
    width?: string;
    height?: string;
    fontSize?: string;
    fontWeight?: number;
    fontColor?: string;
    backgroundColor?: string;
    margin?: string;
}

const Wrapper = styled.button<StyleProps>`
    width: 100%;
    max-width: ${(props) => props.width || "364px"};
    height: ${(props) => props.height || "48px"};
    margin: ${(props) => props.margin || "0"};
    padding: 0 16px;
    border: none;
    border-radius: 6px;
    background-color: ${(props) =>
        props.backgroundColor || props.theme.color.seaBule};
    font-size: ${(props) => props.fontSize || "20px"};
    font-weight: ${(props) => props.fontWeight || 700};
    color: ${(props) => props.fontColor || props.theme.color.white};
`;

interface Props {
    text?: string;
    type?: "submit" | "button" | "reset";
    onClick?: () => void;
    cssObj?: {
        width?: string;
        height?: string;
        fontSize?: string;
        fontWeight?: number;
        fontColor?: string;
        backgroundColor?: string;
        margin?: string;
    };
}

export const BagicButton = ({
    onClick,
    cssObj,
    text = "버튼",
    type = "button",
}: Props) => {
    return (
        <Wrapper type={type} {...cssObj} onClick={onClick}>
            {text}
        </Wrapper>
    );
};
