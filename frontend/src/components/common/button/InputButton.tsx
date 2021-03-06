import theme from "../../../styles/theme";
import styled from "../../../styles/theme-components";
import { Text } from "../Text";

const Wrapper = styled.button<StyleProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: ${(props) => props.padding};
    border: 0;
    border-radius: 20px;
    background-color: ${(props) => props.theme.color.gray};
    :hover {
        background-color: ${(props) =>
            props.hover && props.theme.color.lightGray};
    }
`;

interface StyleProps {
    width?: string;
    height?: string;
    padding?: string;
    hover?: boolean;
}

interface Props extends StyleProps {
    text: string;
    onClick?: () => void;
}

export const InputButton = ({
    text,
    width,
    height,
    hover,
    padding,
    onClick,
}: Props) => {
    return (
        <Wrapper
            width={width}
            height={height}
            padding={padding}
            hover={hover}
            onClick={onClick}
        >
            <Text
                text={text}
                fs={"17px"}
                margin={"0 0 0 20px"}
                fc={theme.color.lightBlack}
            />
        </Wrapper>
    );
};

InputButton.defaultProps = {
    width: "100%",
    height: "40px",
    padding: "0px",
    hover: true,
};
