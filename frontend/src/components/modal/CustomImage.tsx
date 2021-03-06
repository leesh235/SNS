import styled from "../../styles/theme-components";
import { useRef } from "react";
import { Text } from "../common/Text";
import { AvatarEditor } from "../common/AvatarEditor";
import { base64ToImage } from "../../utils/base64Func";
import { useDispatch } from "react-redux";
import { setProfileImage } from "../../modules/action/user";
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
    width: 700px;
    height: 600px;
    border-radius: 6px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Top = styled.article`
    width: calc(100% - 60px);
    height: 59px;
    border-bottom: 1px solid ${(props) => props.theme.color.gray};
    margin-bottom: 15px;
    padding: 0 0 0 60px;
    display: grid;
    grid-template-columns: auto 60px;
    align-items: center;
    > :nth-child(1) {
        justify-self: center;
    }
`;

const Bottom = styled.form`
    width: 100%;
    height: 68px;
    border-top: 1px solid ${(props) => props.theme.color.gray};
    margin-top: 15px;
    display: flex;
    justify-content: end;
    align-items: center;
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

const SubmitBtn = styled.button`
    width: 110px;
    height: 36px;
    background-color: ${(props) => props.theme.color.seaBule};
    border-radius: 6px;
    cursor: pointer;
    margin-right: 30px;
    outline: none;
    border: 0px;
`;

const CancleBtn = styled.button`
    width: 110px;
    height: 36px;
    background-color: ${(props) => props.theme.color.white};
    border-radius: 6px;
    cursor: pointer;
    outline: none;
    border: 0px;
    margin-right: 10px;
    :hover {
        background-color: ${(props) => props.theme.color.gray};
    }
`;

interface Props {
    closeFunc: () => void;
    onClick?: () => void;
    image?: any;
}

export const CustomImage = ({ closeFunc, onClick, image }: Props) => {
    const editorRef = useRef() as any;
    const dispatch = useDispatch();

    // const saveImage: React.FormEventHandler<HTMLFormElement> = () => {
    const saveImage = () => {
        const file = base64ToImage(
            editorRef.current.getImageScaledToCanvas().toDataURL("image/png"),
            image.name
        );
        const formData = new FormData();
        formData.append("mode", "profile");
        formData.append("streamfile", file);

        dispatch(setProfileImage(formData));
        closeFunc();
    };
    return (
        <Wrapper>
            <Box>
                <Top>
                    <Text
                        text={"????????? ?????? ?????????"}
                        fs={"20px"}
                        fw={700}
                        lh={"24px"}
                        width={"auto"}
                    />
                    <CloseBtn onClick={closeFunc}>X</CloseBtn>
                </Top>
                <AvatarEditor image={image} editorRef={editorRef} />
                <Bottom onSubmit={saveImage}>
                    <CancleBtn type="button" onClick={closeFunc}>
                        <Text
                            text={"??????"}
                            fs={"15px"}
                            fw={600}
                            lh={"20px"}
                            width={"100%"}
                            ta={"center"}
                            fc={theme.color.seaBule}
                        />
                    </CancleBtn>
                    <SubmitBtn type="button" onClick={saveImage}>
                        <Text
                            text={"??????"}
                            fs={"15px"}
                            fw={600}
                            lh={"20px"}
                            width={"100%"}
                            ta={"center"}
                            fc={theme.color.white}
                        />
                    </SubmitBtn>
                </Bottom>
            </Box>
        </Wrapper>
    );
};
