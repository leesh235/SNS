import styled from "../../styles/theme-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div<StyleProps>`
    border: none;
    border-radius: 6px;
    font-size: 17px;
    line-height: 48px;
    padding: 0 16px;
    background-color: ${(props) => props.theme.color.lightGreen};
    text-decoration: none;
    cursor: pointer;
`;

interface StyleProps {}

interface Props extends StyleProps {
    text: string;
    to: "submit" | "button" | "reset";
}

export const LinkButton = ({ text, to }: Props) => {
    return (
        <Wrapper>
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

LinkButton.defaultProps = {
    text: "버튼",
    to: "submit",
};
