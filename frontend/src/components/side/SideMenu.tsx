import styled from "../../styles/theme-components";
import { Text } from "../common/Text";

const Wrapper = styled.ul`
  position: fixed;
  top: 56px;
  left: 0;
  max-width: 360px;
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

//이름, 저장됨: 새 페이지 / 더보기: 리스트 추가 / 나머지 컴포넌트 교체
const data = ["친구찾기", "시작하기", "최신", "즐겨찾기", "저장됨", "더보기"];

export const SideMenu = () => {
  return (
    <Wrapper>
      <Menu>
        <Icon />
        <Text text={"이름"} fs={"15px"} fw={500} lh={"20px"} width={"auto"} />
      </Menu>
      {data.map((val, idx) => {
        return (
          <Menu key={idx}>
            <Icon />
            <Text text={val} fs={"15px"} fw={500} lh={"20px"} width={"auto"} />
          </Menu>
        );
      })}
    </Wrapper>
  );
};
