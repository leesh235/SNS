import styled from "../../styles/theme-components";
import { useState } from "react";
import { PostCard } from "./PostCard";
import { BoxShadow } from "../styles/BoxShadow";
import { IconButton } from "../common/button/IconButton";
import { Text } from "../common/Text";
import theme from "../../styles/theme";
import { ListIcon, ListIconC } from "../../assets/icon/ListIcon";
import { GridIcon, GridIconC } from "../../assets/icon/GridIcon";

const PostWrapper = styled.article`
  display: flex;
  flex-direction: column;
  > :nth-child(n) {
    margin-bottom: 10px;
  }
  margin-top: 10px;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-end;
  height: 40px;
  padding: 0 14px;
  border-top: 1px solid ${(props) => props.theme.color.lightGray};
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 54px;
  padding: 0 14px;
`;

const ButtonWrapper = styled.div<{ color: string }>`
  border-bottom: 3px solid ${(props) => props.color};
`;

const postList = [
  "1",
  "2",
  "3",
  "4",
  "2",
  "3",
  "4",
  "2",
  "3",
  "4",
  "2",
  "3",
  "4",
];

const menuList = ["리스트 보기", "그리드 보기"];

export const PostFlexCard = () => {
  const [menu, setMenu] = useState<number>(0);
  const handleOnClick = (id: number) => {
    setMenu(id);
  };
  return (
    <>
      <BoxShadow padding={"0px"}>
        <FlexWrapper>
          <Text text={"게시물"} fs={"20px"} fw={700} lh={"24px"} />
          <Text text={"필터"} fs={"15px"} fw={600} lh={"20px"} />
          <Text text={"게시물 관리"} fs={"15px"} fw={600} lh={"20px"} />
        </FlexWrapper>
        <GridWrapper>
          {menuList.map((val, idx) => {
            if (menu === idx) {
              return (
                <ButtonWrapper
                  key={idx}
                  color={theme.color.seaBule}
                  onClick={() => {
                    handleOnClick(idx);
                  }}
                >
                  <IconButton width={"100%"} height={"32px"} hover={false}>
                    {idx === 0 ? <ListIconC /> : <GridIconC />}
                    <Text
                      text={val}
                      fs={"15px"}
                      fw={600}
                      lh={"20px"}
                      fc={theme.color.seaBule}
                      width={"auto"}
                    />
                  </IconButton>
                </ButtonWrapper>
              );
            } else {
              return (
                <ButtonWrapper
                  key={idx}
                  color={theme.color.white}
                  onClick={() => {
                    handleOnClick(idx);
                  }}
                >
                  <IconButton width={"100%"} height={"32px"}>
                    {idx === 0 ? <ListIcon /> : <GridIcon />}
                    <Text
                      text={val}
                      fs={"15px"}
                      fw={600}
                      lh={"20px"}
                      fc={theme.color.lightBlack}
                      width={"auto"}
                    />
                  </IconButton>
                </ButtonWrapper>
              );
            }
          })}
        </GridWrapper>
      </BoxShadow>
      <PostWrapper>
        {menu === 0 &&
          postList.map((val, idx) => {
            return <PostCard key={idx} />;
          })}
        {menu === 1 && "gridcards"}
      </PostWrapper>
    </>
  );
};