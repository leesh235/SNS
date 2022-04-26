import styled from "../../../styles/theme-components";

const Input = styled.input<StyleProps>`
    width: ${(props) => `calc(${props.width} - 24px)`};
    height: ${(props) => `calc(${props.height} - 16px)`};
    padding: 8px 12px;
    border: 0;
    border-radius: 50px;
    font-size: 15px;
    color: ${(props) => props.theme.color.black};
    background-color: ${(props) => props.theme.color.gray};
    ::placeholder {
        font-size: 15px;
        color: ${(props) => props.theme.color.lightBlack};
    }
`;

interface StyleProps {
    width?: string;
    height?: string;
}

interface Props extends StyleProps {
    type?: string;
    placeholder?: string;
}

export const Input3 = ({ type, width, height, placeholder }: Props) => {
    return (
        <Input
            width={width}
            height={height}
            type={type}
            placeholder={placeholder}
        />
    );
};

Input3.defaultProps = {
    width: "290px",
    height: "36px",
    type: "text",
};
