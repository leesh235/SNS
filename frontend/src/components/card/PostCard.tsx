import styled from "../../styles/theme-components";
import { Text } from "../common/Text";
import { Button2 } from "../common/button/Button2";

const Wrapper = styled.article`
  width: 100%;
  max-width: 590px;
  height: auto;
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.white};
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 4px 8px rgb(0 0 0 / 10%);
`;

const TopWrapper = styled.div`
  width: calc(100% - 32px);
  height: 40px;
  padding: 12px 16px 10px 16px;
  display: grid;
  grid-template-columns: 40px auto 36px;
  grid-template-rows: repeat(2, 20px);
  column-gap: 10px;
  align-items: center;
  > :nth-child(1) {
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
  }
  > :nth-child(4) {
    grid-column: 3 / span 1;
    grid-row: 1 / span 2;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ContentsWrapper = styled.div`
  width: 100%;
  padding: 4px 0px 16px 0px;
`;

const BottomWrapper = styled.div`
  width: calc(100% - 20px);
  height: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  margin: 0 10px;
  border-top: 1px solid ${(props) => props.theme.color.lightGray};
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: blueviolet;
`;

export const PostCard = () => {
  return (
    <Wrapper>
      <TopWrapper>
        <Icon />
        <Text text={"제목"} fs={"15px"} fw={600} lh={"20px"} />
        <FlexWrapper>
          <Text
            text={"시간"}
            fs={"12px"}
            lh={"16px"}
            tag={"span"}
            width={"auto"}
          />
          <Text
            text={"시간"}
            fs={"12px"}
            lh={"16px"}
            tag={"span"}
            width={"auto"}
          />
        </FlexWrapper>
        <Text text={"목차"} fs={"12px"} lh={"16px"} />
      </TopWrapper>
      <ContentsWrapper>
        <Text
          text={"ContentsWrapper"}
          fs={"15px"}
          fw={600}
          lh={"20px"}
          margin={"0 16px"}
        />
      </ContentsWrapper>
      <BottomWrapper>
        <Button2 text={"좋아요"} />
        <Button2 text={"댓글 달기"} />
        <Button2 text={"공유하기"} />
      </BottomWrapper>
    </Wrapper>
  );
};
