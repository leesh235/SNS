import styled from "../../styles/theme-components";

const Wrapper = styled.article`
  width: 590px;
  height: auto;
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.white};
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
`;

const TopWrapper = styled.div`
  width: calc(100% - 32px);
  padding: 12px 16px;
`;

const ContentsWrapper = styled.div`
  width: 100%;
`;

const BottomWrapper = styled.div`
  width: 100%;
`;

export const PostCard = () => {
  return (
    <Wrapper>
      <TopWrapper>TopWrapper</TopWrapper>
      <ContentsWrapper>ContentsWrapper</ContentsWrapper>
      <BottomWrapper>BottomWrapper</BottomWrapper>
    </Wrapper>
  );
};
