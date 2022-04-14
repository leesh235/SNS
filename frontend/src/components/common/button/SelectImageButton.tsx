import { useEffect, useState } from "react";
import styled from "../../../styles/theme-components";
import { Text } from "../Text";
import { UploadImageButton } from "./UploadImageButton";

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
    onClickSelect?: () => void;
    onClickUpload?: () => void;
    getImage?: any;
}

export const SelectImageButton = ({
    closeFunc,
    onClickSelect,
    onClickUpload,
    getImage,
}: Props) => {
    const [addE, setAddE] = useState<boolean>(false);
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { files } = e.currentTarget;
        if (files !== null) {
            getImage(files[0]);
            closeFunc();
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
            <UploadImageButton
                closeFunc={() => {
                    setAddE(true);
                }}
                onChange={onChange}
            />
        </Wrapper>
    );
};
