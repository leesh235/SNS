import styled from "../../styles/theme-components";

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 56px;
  background-color: ${(props) => props.theme.color.white};
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 4px 8px rgb(0 0 0 / 20%); ;
`;

const LeftWrapper = styled.div``;

const CenterWrapper = styled.ul``;

const RightWrapper = styled.div``;

export const Header = () => {
  return (
    <Wrapper>
      <LeftWrapper>LeftWrapper</LeftWrapper>
      <CenterWrapper>CenterWrapper</CenterWrapper>
      <RightWrapper>RightWrapper</RightWrapper>
    </Wrapper>
  );
};
