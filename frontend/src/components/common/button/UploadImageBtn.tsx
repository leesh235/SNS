import { useEffect, useState } from "react";
import styled from "../../../styles/theme-components";
import { Text } from "../Text";

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
  onChange?: any;
}

export const UploadImageBtn = ({ onChange }: Props) => {
  return (
    <>
      <ViewInput htmlFor="userimage" className="coverImage">
        사진 업로드
      </ViewInput>
      <Input type="file" id="userimage" onChange={onChange} />
    </>
  );
};
