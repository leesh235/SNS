import styled from "../../styles/theme-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div<StyleProps>`
    border: none;
    border-radius: 6px;
    font-size: 17px;
    line-height: 48px;
    padding: 0 16px;
    background-color: ${(props) => props.theme.color.lightGreen};
`;

interface StyleProps {}

interface Props extends StyleProps {
    text: string;
    to: string;
}

export const LinkText = ({ text, to }: Props) => {
    return (
        <Link
            to={{
                pathname: `${to}`,
            }}
        >
            {text}
        </Link>
    );
};

LinkText.defaultProps = {
    text: "버튼",
    to: "/",
};
