import styled from "../../styles/theme-components";
import { BoxShadow } from "../styles/BoxShadow";
import { Text } from "../common/Text";
import { Button } from "../common/Button";
import theme from "../../styles/theme";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  > :nth-child(n + 2) {
    margin-bottom: 16px;
  }
`;

const Icon = styled.div`
  width: 168px;
  height: 168px;
  border-radius: 84px;
  background-color: blueviolet;
  margin: 6px;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  > :nth-child(1) {
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 0 0 0 25px;
    > :nth-child(n + 1):nth-child(-n + 2) {
      margin-bottom: 6px;
    }
    > :nth-child(3) {
      margin-top: 16px;
    }
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 16px;
  > :nth-child(-n + 2) {
    margin-top: 6px;
  }
  > :nth-child(3) {
    margin-top: 16px;
  }
`;

export const Welcome = () => {
  return (
    <Wrapper>
      <Text
        fs={"24px"}
        fw={700}
        lh={"28px"}
        margin={"28px 0 32px 0"}
        text={"이성호님, Facebook에 오신 것을 환영합니다!"}
      />
      <BoxShadow width={"510px"}>
        <GridWrapper>
          <div>
            <Text
              fs={"20px"}
              fw={700}
              lh={"24px"}
              text={"프로필 사진 업로드하기"}
            />
            <Text
              width={"266px"}
              fs={"17px"}
              lh={"20px"}
              fc={theme.color.lightBlack}
              tag={"span"}
              text={
                "친구들이 회원님을 쉽게 알아볼 수 있도록 사진을 추가하세요."
              }
            />
            <Button
              fs={"17px"}
              fw={600}
              width={"153px"}
              height={"40px"}
              text={"사진 추가"}
            />
          </div>
          <Icon />
        </GridWrapper>
      </BoxShadow>
      <BoxShadow width={"510px"}>
        <FlexWrapper>
          <Text fs={"20px"} fw={700} lh={"24px"} text={"아는 사람 찾기"} />
          <Text
            fs={"17px"}
            lh={"20px"}
            fc={theme.color.lightBlack}
            tag={"span"}
            text={"이름을 검색하거나 동창 또는 동료를 찾아볼 수 있습니다."}
          />
        </FlexWrapper>
      </BoxShadow>
      <BoxShadow width={"510px"}>
        {" "}
        <FlexWrapper>
          <Text
            fs={"20px"}
            fw={700}
            lh={"24px"}
            text={"개인정보 설정 알아보기"}
          />
          <Text
            fs={"17px"}
            lh={"20px"}
            fc={theme.color.lightBlack}
            tag={"span"}
            text={
              "Facebook에서 공유하고 싶은 내용의 공개 범위를 관리할 수 있습니다."
            }
          />
          <Button
            fs={"17px"}
            fw={600}
            width={"264px"}
            height={"40px"}
            text={"공개 범위 기능 둘러보기"}
          />
        </FlexWrapper>
      </BoxShadow>
    </Wrapper>
  );
};
