import styled from "../../../styles/theme-components";
import { useRef } from "react";
import { useDispatch } from "react-redux";
//functions
import { base64ToImage } from "../../../utils/base64Func";
import theme from "../../../styles/theme";
//components
import { Text } from "../../common/Text";
import { AvatarEditor } from "../../common/AvatarEditor";
import { imageActionCreator } from "../../../modules/action/image";
import { BagicButton } from "../../common/button/BagicButton";

const Layout = styled.section`
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

const Bottom = styled.article`
    width: calc(100% - 60px);
    height: 68px;
    padding: 0 30px;
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

interface Props {
    onCloseClick: any;
    image: any;
}

export const EditImage = ({ onCloseClick, image }: Props) => {
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
        formData.append("image", file);

        dispatch(imageActionCreator.single({ image: file }));
        onCloseClick();
    };

    return (
        <Layout>
            <Top>
                <Text
                    text={"프로필 사진 업로드"}
                    tag={"span"}
                    cssObj={{
                        fontSize: "20px",
                        fontWeight: 700,
                    }}
                />
                <CloseBtn onClick={onCloseClick}>X</CloseBtn>
            </Top>
            <AvatarEditor image={image} editorRef={editorRef} />
            <Bottom>
                <BagicButton
                    text="취소"
                    onClick={onCloseClick}
                    cssObj={{
                        fontSize: "15px",
                        fontWeight: 600,
                        fontColor: theme.color.seaBule,
                        backgroundColor: theme.color.white,
                        width: "110px",
                        height: "36px",
                    }}
                />
                <BagicButton
                    text="저장"
                    onClick={saveImage}
                    cssObj={{
                        fontSize: "15px",
                        fontWeight: 600,
                        fontColor: theme.color.white,
                        width: "110px",
                        height: "36px",
                    }}
                />
            </Bottom>
        </Layout>
    );
};
