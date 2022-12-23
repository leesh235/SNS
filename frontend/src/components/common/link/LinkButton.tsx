import styled from "../../../styles/theme-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div<StyleProps>`
  border: none;
  border-radius: 6px;
  padding: 0 16px;
  background-color: ${(props) => props.theme.color.lightGreen};
  line-height: 48px;
  font-size: 17px;
  font-weight: 700;
  color: ${(props) => props.theme.color.white};
`;

interface StyleProps {}

interface Props extends StyleProps {
  text: string;
  to: string;
}

export const LinkButton = ({ text, to }: Props) => {
  return (
    <Link
      to={{
        pathname: `${to}`,
      }}
    >
      <Wrapper>{text}</Wrapper>
    </Link>
  );
};

LinkButton.defaultProps = {
  text: "버튼",
  to: "/",
};
