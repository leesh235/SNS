import theme from "../../../styles/theme";
import styled from "../../../styles/theme-components";

const Wrapper = styled.button<StyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 0 16px;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.color};
  :hover {
    background-color: ${(props) => props.hover && props.theme.color.gray};
  }
`;

interface StyleProps {
  width?: string;
  height?: string;
  color?: string;
  hover?: boolean;
}

interface Props extends StyleProps {
  children: React.ReactNode;
  type: "submit" | "button" | "reset";
  onClick?: () => void;
}

export const IconButton = ({
  children,
  type,
  width,
  height,
  color,
  hover,
  onClick,
}: Props) => {
  return (
    <Wrapper
      type={type}
      width={width}
      height={height}
      color={color}
      hover={hover}
      onClick={onClick}
    >
      {children}
    </Wrapper>
  );
};

IconButton.defaultProps = {
  type: "button",
  width: "112px",
  height: "50px",
  color: theme.color.white,
  hover: true,
};
