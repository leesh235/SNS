import styled from "../../styles/theme-components";
import { SearchInput } from "../common/input/SearchInput";
import { IconButton } from "../common/button/IconButton";

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 0 16px;
  height: 56px;
  background-color: ${(props) => props.theme.color.white};
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 4px 8px rgb(0 0 0 / 20%); ;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  > :nth-child(1) {
    margin-right: 10px;
  }
`;

const CenterWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0px;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: blueviolet;
  margin: 0px;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const data = [
  <Div>
    <Icon />
  </Div>,
  <Div>
    <Icon />
  </Div>,
  <Div>
    <Icon />
  </Div>,
];

export const Header = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <Icon />
        <SearchInput placeholder={"Facebook 검색"} />
      </LeftWrapper>
      <CenterWrapper>
        {data.map((val, idx) => {
          return <IconButton>{val}</IconButton>;
        })}
      </CenterWrapper>
      <RightWrapper>RightWrapper</RightWrapper>
    </Wrapper>
  );
};
