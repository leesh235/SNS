import styled from "../../styles/theme-components";
import { Text } from "../common/Text";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AddImageButton } from "../common/button/AddImageButton";
import { SelectImageButton } from "../common/button/SelectImageButton";
import { SetProfileImage } from "../modal/SetProfileImage";
import { CustomImage } from "../modal/CustomImage";
import { SelectImage } from "../modal/SelectImage";

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.color.white};
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.article<{ cImg?: string }>`
  max-width: 950px;
  width: 100%;
  height: 350px;
  background-color: ${(props) => props.theme.color.gray};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  position: relative;
`;

const Bottom = styled.article`
  max-width: 908px;
  width: 100%;
  height: 84px;
  position: relative;
  display: flex;
  flex-direction: row;
`;

const ImageShadow = styled.div`
  max-width: 950px;
  width: calc(100%);
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

const FlexWrapper = styled.div`
  width: calc(100% - 194px);
  height: 100%;
  margin-left: 194px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UserImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 174px;
  height: 174px;
  border-radius: 87px;
  position: absolute;
  top: -85px;
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

const CoverImageButtonWrapper = styled.div`
  margin-right: 30px;
  width: 144px;
  height: 36px;
  border-radius: 6px;
  border: 0px;
  background-color: ${(props) => props.theme.color.white};
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.color.lightGray};
  }
`;

export const ProfileTop = () => {
  const [pImg, setPImg] = useState<File>();
  const [pImgBtnopen, setPImgBtnopen] = useState<boolean>(false);
  const [pImgModalopen, setPImgModalopen] = useState<boolean>(false);

  const [cImg, setCImg] = useState<any>();
  const [cImgBtnopen, setCImgBtnopen] = useState<boolean>(false);
  const [cImgModalopen, setCImgModalopen] = useState<boolean>(false);

  const { loading, data, error } = useSelector(
    (state: any) => state?.profile?.profile
  );

  const handleOpenCImg = () => {
    setCImgBtnopen(true);
  };

  const handleCloseCImg: React.MouseEventHandler = (e) => {
    const { className } = e?.target as HTMLDivElement;
    const check = className.includes("coverImage");
    console.log(check);
    if (check) return;
    if (cImgBtnopen) {
      setCImgBtnopen(false);
    }
  };

  const handleOpenCImgModal = () => {
    setCImgModalopen(true);
  };

  const handleCloseCImgModal: React.MouseEventHandler = (e) => {
    if (e.target !== e.currentTarget) return;
    if (cImgModalopen) {
      setCImgModalopen(false);
    }
  };

  const handleOpenPImg = () => {
    setPImgBtnopen(true);
  };

  const handleClosePImg = () => {
    if (pImgBtnopen) {
      setPImgBtnopen(false);
    }
  };

  const handleOpenPImgModal = () => {
    setPImgModalopen(true);
  };

  const handleClosePImgModal = () => {
    if (pImgModalopen) {
      setPImgModalopen(false);
    }
  };

  useEffect(() => {}, [loading]);

  return (
    <>
      <Wrapper>
        <Top>
          {cImg && <div>hi</div>}
          <ImageShadow>
            <CoverImageButtonWrapper onClick={handleOpenCImg}>
              {" "}
              <Text
                text={"커버 사진 추가"}
                fs={"15px"}
                fw={600}
                lh={"20px"}
                ta={"center"}
              />
            </CoverImageButtonWrapper>
            {cImgBtnopen && cImg === undefined && (
              <SelectImageButton
                closeFunc={handleCloseCImg}
                onClickSelect={handleOpenCImgModal}
                getImage={setCImg}
              ></SelectImageButton>
            )}
          </ImageShadow>
        </Top>
        <Bottom>
          <UserImage>
            <Image src={data?.profileImage} onClick={handleOpenPImg}></Image>
          </UserImage>
          {pImgBtnopen && (
            <AddImageButton
              closeFunc={handleClosePImg}
              onClick={handleOpenPImgModal}
            ></AddImageButton>
          )}
          <FlexWrapper>
            <Text
              text={data?.nickName}
              fs={"32px"}
              fw={700}
              lh={"38px"}
              width={"auto"}
            />
          </FlexWrapper>
        </Bottom>
      </Wrapper>
      {pImgModalopen && (
        <SetProfileImage closeFunc={handleClosePImgModal} getImage={setPImg} />
      )}
      {!pImgModalopen && pImg && (
        <CustomImage
          image={pImg}
          closeFunc={() => {
            setPImg(undefined);
          }}
        />
      )}
      {cImgModalopen && <SelectImage closeFunc={handleCloseCImgModal} />}
    </>
  );
};
