import { useEffect, useState } from "react";
import styled from "../../../styles/theme-components";
import { Text } from "../Text";
import { UploadImageBtn } from "./UploadImageBtn";

const Wrapper = styled.div`
  width: 328px;
  height: 72px;
  padding: 8px;
  border-radius: 6px;
  border: 0px;
  background-color: ${(props) => props.theme.color.white};
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  position: absolute;
  bottom: -72px;
  right: 30px;
  z-index: 9;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 36px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.color.white};
  :hover {
    background-color: ${(props) => props.theme.color.gray};
  }
  cursor: pointer;
`;

const Input = styled.input`
  width: 0;
  height: 0;
`;

const ViewInput = styled.label`
  display: inline-block;
  width: calc(100% - 40px);
  height: 20px;
  border-radius: 6px;

  background-color: ${(props) => props.theme.color.white};
  :hover {
    background-color: ${(props) => props.theme.color.gray};
  }
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  padding: 8px 0 8px 40px;
`;

interface Props {
  closeFunc: any;
  onClickSelect?: () => void;
  getImage?: any;
}

export const SelectImageButton = ({
  closeFunc,
  onClickSelect,
  getImage,
}: Props) => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    const { files } = e.currentTarget;
    console.log("onChange");
    if (files !== null) {
      //   let url = await URL.createObjectURL(files[0]);
      //   console.log(url);
      console.log(files[0]);
      //   getImage(url);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeFunc);
    return () => {
      window.removeEventListener("click", closeFunc);
    };
  }, []);

  return (
    <Wrapper>
      <Button onClick={onClickSelect}>
        <Text
          text={"사진 선택"}
          fs={"15px"}
          fw={500}
          lh={"20px"}
          margin={"0 0 0 40px"}
        />
      </Button>
      <UploadImageBtn onChange={onChange} />
      {/* <ViewInput htmlFor="userimage" className="coverImage">
        사진 업로드
      </ViewInput>
      <Input type="file" id="userimage" onChange={onChange} /> */}
    </Wrapper>
  );
};
