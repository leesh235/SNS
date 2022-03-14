import styled from "../../styles/theme-components";

const Wrapper = styled.input<StyleProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: ${(props) => props.padding};
    border-radius: 8px;
    font-size: 17px;
    color: ${(props) => props.theme.color.seaBule};
    ::placeholder {
        font-size: 17px;
        color: ${(props) => props.theme.color.seaBule};
    }
`;

interface StyleProps {
    width?: string;
    height?: string;
    padding?: string;
    placeholder?: string;
}

interface Props extends StyleProps {}

export const Input = ({ width, height, padding, placeholder }: Props) => {
    return (
        <Wrapper
            width={width}
            height={height}
            padding={padding}
            placeholder={placeholder}
        />
    );
};

Input.defaultProps = {
    width: "330px",
    height: "22px",
    padding: "0px",
};
