import styled from "../../../styles/theme-components";
import { Link } from "react-router-dom";
import theme from "../../../styles/theme";

const Wrapper = styled.div<StyleProps>`
    line-height: 48px;
    font-size: 14px;
    font-weight: ${(props) => props.fw};
    color: ${(props) => props.color};
    > a {
        width: 100%;
        height: 100%;
    }
`;

interface StyleProps {
    fw: number;
    color?: string;
}

interface Props extends StyleProps {
    text: string;
    to: string;
}

export const LinkText = ({ text, to, fw, color }: Props) => {
    return (
        <Wrapper fw={fw} color={color}>
            <Link
                to={{
                    pathname: `${to}`,
                }}
            >
                {text}
            </Link>
        </Wrapper>
    );
};

LinkText.defaultProps = {
    text: "버튼",
    to: "/",
    fw: 500,
    color: theme.color.darkGray,
};
