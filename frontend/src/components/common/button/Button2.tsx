import theme from "../../../styles/theme";
import styled from "../../../styles/theme-components";

const Wrapper = styled.button<StyleProps>``;

interface StyleProps {}

interface Props extends StyleProps {
  text: string;
  type: "submit" | "button" | "reset";
  onClick?: () => void;
}

export const Button2 = ({ text, type, onClick }: Props) => {
  return (
    <Wrapper type={type} onClick={onClick}>
      {text}
    </Wrapper>
  );
};

Button2.defaultProps = {
  text: "버튼",
  type: "button",
  width: "364px",
  height: "48px",
  fs: "20px",
  fw: 700,
  color: theme.color.seaBule,
  fc: theme.color.white,
};
