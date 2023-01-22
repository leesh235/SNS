import styled from "../../../styles/theme-components";
//functions
import { useModal } from "../../../hooks/common/useModal";
import { useFileFunc } from "../../../hooks/common/useFileFunc";
//components
import { SeeMoreLayout } from "../../common/SeeMoreLayout";
import { HoverButton } from "../../common/button/HoverButton";
import { ChangeImage } from "./ChangeImage";
import { EditImage } from "./EditImage";
import { ModalLayout } from "../../common/styles/ModalLayout";

const Layout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 174px;
    height: 174px;
    border-radius: 87px;
    position: absolute;
    top: -85px;
    left: 10px;
    background-color: white;
    z-index: 1;
`;

const Image = styled.img`
    width: 168px;
    height: 168px;
    border-radius: 84px;
    background-color: gray;
    cursor: pointer;
`;

interface Props {
    data: any;
}

export const ProfileImage = ({ data }: Props) => {
    const { modal, handleModal } = useModal();
    const { file, setOptions, handleRemoveFile } = useFileFunc();

    return (
        <>
            <SeeMoreLayout top="100px" right="-270px">
                <Layout>
                    <Image src={data?.profileImage}></Image>
                </Layout>
                <HoverButton text={"사진 추가"} onClick={handleModal} />
            </SeeMoreLayout>
            {modal && (
                <ModalLayout onCloseClick={handleModal}>
                    {!file ? (
                        <ChangeImage
                            onCloseClick={handleModal}
                            inputAtt={setOptions}
                        />
                    ) : (
                        <EditImage
                            image={file}
                            onCloseClick={handleRemoveFile}
                        />
                    )}
                </ModalLayout>
            )}
        </>
    );
};
