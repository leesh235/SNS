import styled from "../../styles/theme-components";

const Wrapper = styled.input<StyleProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: ${(props) => props.padding};
    border-radius: 8px;
`;

interface StyleProps {
    width?: string;
    height?: string;
    padding?: string;
}

interface Props extends StyleProps {}

export const Input = ({ width, height, padding }: Props) => {
    return <Wrapper width={width} height={height} padding={padding} />;
};

Input.defaultProps = {
    width: "330px",
    height: "22px",
    padding: "0px",
};
