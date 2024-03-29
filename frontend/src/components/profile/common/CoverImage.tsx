import styled from "../../../styles/theme-components";
//functions
import { useModal } from "../../../hooks/common/useModal";
import { useFileFunc } from "../../../hooks/common/useFileFunc";
import { obToUrl } from "../../../utils/objToUrl";
import { useProfileImg } from "../../../hooks/profile/useProfileImg";
//components
import { SelectImage } from "../../common/card/SelectImage";
import { HoverButton } from "../../common/button/HoverButton";
import { SeeMoreLayout } from "../../common/SeeMoreLayout";
import { ModalLayout } from "../../common/styles/ModalLayout";
import { FileButton } from "../../common/button/FileButton";
import { FileInput } from "../../common/input/FileInput";
import { InvisibleButton } from "../../common/button/InvisibleButton";
import { BagicButton } from "../../common/button/BagicButton";

const Layout = styled.article<{ cImg?: string }>`
    max-width: 950px;
    width: 100%;
    height: 350px;
    background-color: ${(props) => props.theme.color.gray};
    background-image: ${(props) => `url(${props.cImg})`};
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    position: relative;
`;

const ImageShadow = styled.div`
    max-width: 950px;
    width: 100%;
    padding: 0 30px;
    height: 68px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    position: absolute;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
`;

const ImageHeader = styled.div`
    width: 100%;
    height: 60px;
    position: fixed;
    top: 56px;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    padding: 0 16px;
`;

interface Props {
    profile: any;
    isYou: boolean;
}

export const CoverImage = ({ profile, isYou }: Props) => {
    const { modal, handleModal } = useModal();

    const { data, handleSubmit, handleUploadImg, handleRemove } =
        useProfileImg("coverImg");

    return (
        <>
            <Layout cImg={!data ? profile?.coverImage : data.imageUrl}>
                {data && (
                    <ImageHeader>
                        <InvisibleButton text="취소" onClick={handleRemove} />
                        <BagicButton
                            text="변경 내용 저장"
                            onClick={handleSubmit}
                            cssObj={{
                                width: "178px",
                                height: "36px",
                                fontSize: "15px",
                                fontWeight: 600,
                            }}
                        />
                    </ImageHeader>
                )}
                {isYou && (
                    <ImageShadow>
                        <SeeMoreLayout flag={data && true}>
                            <HoverButton
                                text={"커버 사진 추가"}
                                cssObj={{
                                    width: "144px",
                                }}
                            />
                            <HoverButton
                                text={"사진 선택"}
                                onClick={handleModal}
                                cssObj={{ textAlign: "left" }}
                            />
                            <FileButton htmlFor="coverimage" />
                        </SeeMoreLayout>
                    </ImageShadow>
                )}
            </Layout>
            {modal && (
                <ModalLayout onCloseClick={handleModal}>
                    <SelectImage closeFunc={handleModal} />
                </ModalLayout>
            )}
            <FileInput id="coverimage" onChange={handleUploadImg} />
        </>
    );
};
