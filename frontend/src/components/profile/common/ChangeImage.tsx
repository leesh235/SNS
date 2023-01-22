import styled from "../../../styles/theme-components";
//functions
//components
import { Text } from "../../common/Text";
import { FileButton } from "../../common/button/FileButton";
import { FileInput } from "../../common/input/FileInput";

const Layout = styled.section`
    max-width: 700px;
    width: 100%;
    height: 128px;
    border-radius: 6px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
`;

const ContentsLayout = styled.article`
    width: 700px;
    height: 59px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const TitleLayout = styled.article`
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

interface Props {
    onCloseClick: any;
    inputAtt: any;
}

export const ChangeImage = ({ onCloseClick, inputAtt }: Props) => {
    return (
        <Layout>
            <TitleLayout>
                <Text
                    text={"프로필 사진 업데이트"}
                    tag={"span"}
                    cssObj={{
                        fontSize: "20px",
                        fontWeight: 700,
                    }}
                />
                <CloseBtn onClick={onCloseClick}>X</CloseBtn>
            </TitleLayout>
            <ContentsLayout>
                <FileInput {...inputAtt("userimage")} />
                <FileButton htmlFor="userimage" />
            </ContentsLayout>
        </Layout>
    );
};
