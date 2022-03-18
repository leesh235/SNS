import styled from "../../styles/theme-components";
import { useState } from "react";
import { Input } from "../common/Input";
import { Button } from "../common/button/Button";
import { Join } from "../modal/Join";
import { Line } from "../common/Line";
import { LinkText } from "../common/button/LinkText";
import { routes } from "../../utils/routes";
import theme from "../../styles/theme";

const Wrapper = styled.section`
  width: 396px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 396px;
  height: auto;
  padding: 10px 0 24px 0;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.white};
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 364px;
  > :nth-child(n) {
    margin: 6px 0px;
  }
  margin: 0 0 20px 0;
`;

export const LogInForm = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
      <BoxWrapper>
        <FormWrapper>
          <Input padding={"14px 16px"} placeholder={"이메일 또는 전화번호"} />
          <Input
            padding={"14px 16px"}
            placeholder={"비밀번호"}
            type={"password"}
          />
          <Button text="로그인" />
          <LinkText
            to={routes.forget}
            text={"비밀번호를 잊으셨나요?"}
            color={theme.color.seaBule}
          />
          <Line />
        </FormWrapper>
        <Button
          text={"새 계정 만들기"}
          width={"144px"}
          height={"48px"}
          color={theme.color.lightGreen}
          fs={"17px"}
          type={"button"}
          onClick={handleOpen}
        />
        {open && <Join onClose={handleClose} />}
      </BoxWrapper>
      <LinkText to={routes.forget} text={"페이지 만들기."} fw={600} />
    </Wrapper>
  );
};
