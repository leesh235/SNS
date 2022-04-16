import styled from "../../styles/theme-components";
import { useEffect, useState } from "react";
import { Text } from "../common/Text";
import theme from "../../styles/theme";

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
`;

const Box = styled.section`
  width: 548px;
  height: 600px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.color.white};
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.article`
  width: calc(100% - 60px);
  height: 59px;
  border-bottom: 1px solid ${(props) => props.theme.color.gray};
  padding: 0 0 0 60px;
  display: grid;
  grid-template-columns: auto 60px;
  align-items: center;
  > :nth-child(1) {
    justify-self: center;
  }
`;

const CloseBtn = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: ${(props) => props.theme.color.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const MenuWrapper = styled.div`
  width: 516px;
  height: 46px;
  margin: 0 16px;
  display: flex;
  flex-direction: row;
`;

const Menu = styled.div<{ color?: string }>`
  width: 258px;
  height: calc(100% - 4px);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-bottom: 4px solid ${(props) => props.color};
`;

const ImageWrapper = styled.article`
  width: 100%;
  margin-top: 16px;
`;

interface Props {
  closeFunc: any;
}

export const SelectImage = ({ closeFunc }: Props) => {
  const [clicked, setClicked] = useState<boolean>(true);

  const handleMenu = (val: boolean) => {
    setClicked(val);
  };
  useEffect(() => {}, []);

  return (
    <Wrapper onClick={closeFunc}>
      <Box>
        <Top>
          <Text
            text={"사진 선택"}
            fs={"20px"}
            fw={700}
            lh={"24px"}
            width={"auto"}
          />
          <CloseBtn onClick={closeFunc}>X</CloseBtn>
        </Top>
        <MenuWrapper>
          <Menu
            onClick={() => handleMenu(true)}
            color={clicked ? theme.color.seaBule : theme.color.white}
          >
            <Text
              text={"최근 사진"}
              fs={"15px"}
              fw={500}
              lh={"20px"}
              width={"100%"}
              ta={"center"}
            />
          </Menu>
          <Menu
            onClick={() => handleMenu(false)}
            color={!clicked ? theme.color.seaBule : theme.color.white}
          >
            <Text
              text={"사진첩"}
              fs={"15px"}
              fw={500}
              lh={"20px"}
              width={"100%"}
              ta={"center"}
            />
          </Menu>
        </MenuWrapper>
        <ImageWrapper></ImageWrapper>
      </Box>
    </Wrapper>
  );
};
