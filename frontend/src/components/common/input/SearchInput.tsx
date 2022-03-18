import styled from "../../../styles/theme-components";
import { useState } from "react";

const Wrapper = styled.label<StyleProps>`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  border-radius: 50px;
  background-color: ${(props) => props.theme.color.gray};
`;

const Icon = styled.div`
  width: 16px;
  height: 100%;
  padding-left: 12px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input<StyleProps>`
  width: ${(props) =>
    props.focus ? " calc(100% - 28px);" : " calc(100% - 40px);"};
  height: 100%;
  border: 0;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: ${(props) => (props.focus ? "0px" : "50px")};
  border-bottom-left-radius: ${(props) => (props.focus ? "0px" : "50px")};
  padding-left: ${(props) => (props.focus ? "0px" : "12px")};
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
  padding?: string;
  focus?: boolean;
}

interface Props extends StyleProps {
  type?: "email" | "number" | "password";
  placeholder?: string;
}

export const SearchInput = ({
  type,
  width,
  height,
  padding,
  placeholder,
}: Props) => {
  const [focus, setForcus] = useState<boolean>(true);

  const handleOnFocus = () => {
    setForcus(false);
  };

  const handleOnBlur = () => {
    setForcus(true);
  };

  return (
    <Wrapper width={width} height={height} padding={padding}>
      {focus && <Icon>P</Icon>}
      <Input
        type={type}
        placeholder={placeholder}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        focus={focus}
      />
    </Wrapper>
  );
};

SearchInput.defaultProps = {
  width: "240px",
  height: "40px",
  padding: "0px",
};
