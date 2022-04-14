import { useEffect } from "react";
import styled from "../../../styles/theme-components";
import { Text } from "../Text";

const Input = styled.input`
    width: 0;
    height: 0;
`;

const ViewInput = styled.label`
    display: inline-block;
    width: 100%;
    height: 36px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.color.white};
    :hover {
        background-color: ${(props) => props.theme.color.gray};
    }
    cursor: pointer;
`;

interface Props {
    closeFunc: () => void;
    onChange?: any;
}

export const UploadImageButton = ({ closeFunc, onChange }: Props) => {
    useEffect(() => {}, []);
    return (
        <>
            <ViewInput htmlFor="userimage">
                <Text
                    text={"사진 업로드"}
                    fs={"15px"}
                    fw={500}
                    lh={"20px"}
                    margin={"0 0 0 40px"}
                />
            </ViewInput>
            <Input type="file" id="userimage" onChange={onChange} />
        </>
    );
};
