import styled from "../../styles/theme-components";
import { useEffect } from "react";
import { Text } from "../common/Text";
import theme from "../../styles/theme";
import { CustomImage } from "./CustomImage";

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
    width: 700px;
    height: 128px;
    border-radius: 6px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
`;

const Form = styled.form`
    width: 700px;
    height: 59px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const TitleWrapper = styled.article`
    width: 640px;
    height: 59px;
    padding: 0 0 0 60px;
    border-bottom: 1px solid ${(props) => props.theme.color.gray};
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

const Input = styled.input`
    width: 0;
    height: 0;
`;

const ViewInput = styled.label`
    display: inline-block;
    width: 330px;
    height: 36px;
    background-color: ${(props) => props.theme.color.lightSeaBlue};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        background-color: ${(props) => props.theme.color.darkSeaBlue};
    }
    cursor: pointer;
`;

interface Props {
    closeFunc: () => void;
    onClick?: () => void;
    getImage: any;
}

export const SetProfileImage = ({ closeFunc, onClick, getImage }: Props) => {
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { files } = e.currentTarget;
        if (files !== null) {
            getImage(files[0]);
            closeFunc();
        }
    };

    useEffect(() => {
        document.body.style.cssText = `
            overflow: hidden;
        `;
        // window.addEventListener("click", closeFunc);
        return () => {
            // window.removeEventListener("click", closeFunc);
            document.body.style.cssText = ``;
        };
    }, []);

    return (
        <Wrapper>
            <Box>
                <TitleWrapper>
                    <Text
                        text={"????????? ?????? ????????????"}
                        fs={"20px"}
                        fw={700}
                        lh={"24px"}
                        width={"auto"}
                    />
                    <CloseBtn onClick={closeFunc}>X</CloseBtn>
                </TitleWrapper>
                <Form>
                    <ViewInput htmlFor="userimage">
                        <Text
                            text={"?????? ?????????"}
                            fs={"15px"}
                            fw={600}
                            lh={"20px"}
                            width={"auto"}
                            fc={theme.color.seaBule}
                        />
                    </ViewInput>
                    <Input type="file" id="userimage" onChange={onChange} />
                </Form>
            </Box>
        </Wrapper>
    );
};
