import styled from "../../styles/theme-components";

const Wrapper = styled.section`
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

export const ChattingList = () => {
  return <Wrapper>ChattingList</Wrapper>;
};
