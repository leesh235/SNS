import styled from "../../styles/theme-components";

const Wrapper = styled.ul`
  width: 100%;
  height: calc(100vh - 72px);
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  justify-content: start;
  overflow-x: hidden;
  overflow-y: hidden;
  &:hover {
    overflow-y: auto;
  }
  ::-webkit-scrollbar {
    width: 8px; /*스크롤바의 너비*/
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    width: 8px;
    height: 8px;
    background-color: ${(props) =>
      props.theme.color.lightBlack}; /*스크롤바의 색상*/
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) =>
      props.theme.color.gray}; /*스크롤바 트랙 색상*/
  }
`;

const Menu = styled.li`
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 8px;
  padding: 0 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color.lightGray};
    border-radius: 10px;
  }
`;

const Icon = styled.div`
  width: 36px;
  height: 36px;
  background-color: blueviolet;
  border-radius: 18px;
  margin: 12px 18px 12px 0px;
`;

const Text = styled.div`
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
`;

const data = ["최신", "즐겨찾기", "시작하기", "저장됨", "더보기"];

export const SideMenu = () => {
  return (
    <Wrapper>
      <Menu>
        <Icon />
        <Text>이름</Text>
      </Menu>
      {data.map((val, idx) => {
        return (
          <Menu key={idx}>
            <Icon />
            <Text>{val}</Text>
          </Menu>
        );
      })}
    </Wrapper>
  );
};
