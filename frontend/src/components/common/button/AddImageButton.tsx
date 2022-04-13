import { useEffect } from "react";
import theme from "../../../styles/theme";
import styled from "../../../styles/theme-components";
import { Text } from "../Text";

const Wrapper = styled.div`
    width: 328px;
    height: 36px;
    padding: 8px;
    border-radius: 6px;
    border: 0px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    position: absolute;
    bottom: -66px;
    left: -88px;
`;

const Button = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background-color: ${(props) => props.theme.color.white};
    :hover {
        background-color: ${(props) => props.theme.color.gray};
    }
    cursor: pointer;
`;

interface Props {
    closeFunc: () => void;
    onClick?: () => void;
}

export const AddImageButton = ({ closeFunc, onClick }: Props) => {
    useEffect(() => {
        window.addEventListener("click", closeFunc);
        return () => {
            window.removeEventListener("click", closeFunc);
        };
    }, []);

    return (
        <Wrapper>
            <Button onClick={onClick}>
                <Text
                    text={"사진 추가"}
                    fs={"15px"}
                    fw={500}
                    lh={"20px"}
                    margin={"0 0 0 40px"}
                />
            </Button>
        </Wrapper>
    );
};
