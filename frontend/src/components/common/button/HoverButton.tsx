import styled from "../../../styles/theme-components";

const Wrapper = styled.button<StyleProps>`
    width: 100%;
    max-width: ${(props) => props.width || "334px"};
    height: ${(props) => props.height || "32px"};
    padding: 0 16px;
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.color || props.theme.color.white};
    font-size: ${(props) => props.fontSize || "15px"};
    font-weight: ${(props) => props.fontWeight || 600};
    color: ${(props) => props.fontColor || props.theme.color.lightBlack};
    :hover {
        background-color: ${(props) => props.theme.color.lightGray};
    }
`;

interface StyleProps {
    width?: string;
    height?: string;
    fontSize?: string;
    fontWeight?: number;
    fontColor?: string;
    color?: string;
}

interface Props {
    text: string;
    type?: "submit" | "button" | "reset";
    onClick?: React.MouseEventHandler;
    cssObj?: StyleProps;
}

export const HoverButton = ({
    cssObj,
    onClick,
    text = "버튼",
    type = "button",
}: Props) => {
    return (
        <Wrapper {...cssObj} type={type} onClick={onClick}>
            {text}
        </Wrapper>
    );
};
