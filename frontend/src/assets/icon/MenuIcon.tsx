import styled from "../../styles/theme-components";

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.color.gray};
  margin: 0px;
  :hover {
    background-color: ${(props) => props.theme.color.lightGray};
  }
  cursor: pointer;
`;

export const MenuIcon = () => {
  return <Wrapper />;
};
