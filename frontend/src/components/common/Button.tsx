import styled from "../../styles/theme-components";

const Wrapper = styled.button<StyleProps>`
    width: 364px;
    height: 48px;
    padding: 0 16px;
    border: none;
    border-radius: 6px;
    font-size: 20px;
    line-height: 48px;
    background-color: ${(props) => props.theme.color.seaBule};
`;

interface StyleProps {}

interface Props extends StyleProps {
    text: string;
    type: "submit" | "button" | "reset";
}

export const Button = ({ text, type }: Props) => {
    return <Wrapper type={type}>{text}</Wrapper>;
};

Button.defaultProps = {
    text: "버튼",
    type: "submit",
};
