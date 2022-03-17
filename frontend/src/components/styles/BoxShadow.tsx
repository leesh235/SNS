import styled from "../../styles/theme-components";

const Wrapper = styled.div<StyleProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.white};
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  padding: 8px;
`;

interface StyleProps {
  width?: string;
  height?: string;
}

interface Props extends StyleProps {
  children: React.ReactNode;
}

export const BoxShadow = ({ children, width, height }: Props) => {
  return (
    <Wrapper width={width} height={height}>
      {children}
    </Wrapper>
  );
};

BoxShadow.defaultProps = {
  width: "100%",
  height: "auto",
};
