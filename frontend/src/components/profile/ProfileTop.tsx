import styled from "../../styles/theme-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//functions
import theme from "../../styles/theme";
import { userActionCreator } from "../../modules/action/profile";
//components
import { SetProfileImage } from "../modal/SetProfileImage";
import { CustomImage } from "../modal/CustomImage";
import { SelectImage } from "../modal/SelectImage";
import { Text } from "../common/Text";
import { CloseEventBtn } from "../common/button/CloseEventBtn";
import { HoverBtn } from "../common/button/HoverBtn";
import { Button2 } from "../common/button/Button2";

const Layout = styled.section`
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
    background-image: ${(props) => `url(${props.cImg})`};
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

const FlexLayout = styled.div`
    width: calc(100% - 194px);
    height: 100%;
    margin-left: 194px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    > :nth-child(2) {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: auto;
        > :nth-child(1) {
            margin-right: 10px;
        }
    }
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

const CoverImageButtonLayout = styled.div`
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

const ImageHeader = styled.div`
    width: calc(100% - 32px);
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

const SaveBtn = styled.button`
    width: 178px;
    height: 36px;
    border-radius: 6px;
    border: 0px;
    outline: none;
    margin: 0;
    background-color: ${(props) => props.theme.color.seaBule};
    :hover {
        background-color: ${(props) => props.theme.color.lightSeaBlue};
    }
`;

const CancleBtn = styled.button`
    width: 122px;
    height: 36px;
    border-radius: 6px;
    border: 0px;
    outline: none;
    margin: 0 10px 0 0;
    background-color: rgba(255, 255, 255, 0.1);
`;

const Input = styled.input`
    width: 0;
    height: 0;
`;

const Label = styled.label`
    display: inline-block;
    width: calc(100% - 40px);
    height: 20px;
    border-radius: 6px;

    background-color: ${(props) => props.theme.color.white};
    :hover {
        background-color: ${(props) => props.theme.color.gray};
    }
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    padding: 8px 0 8px 40px;
`;

export const ProfileTop = () => {
    const dispatch = useDispatch();

    const [pImg, setPImg] = useState<File>();
    const [pImgBtnopen, setPImgBtnopen] = useState<boolean>(false);
    const [pImgModalopen, setPImgModalopen] = useState<boolean>(false);

    const [cImgFile, setCImgFile] = useState<File>();
    const [cImg, setCImg] = useState<string>("");
    const [cImgBtnopen, setCImgBtnopen] = useState<boolean>(false);
    const [cImgModalopen, setCImgModalopen] = useState<boolean>(false);

    const { loading, data, error } = useSelector(
        (state: any) => state?.user?.profile
    );
    const isFriend = useSelector((state: any) => state?.friends?.isFriend);
    const loginInfo = useSelector((state: any) => state?.user?.loginInfo);

    const handleOpenCImg = () => {
        setCImgBtnopen(true);
    };

    const handleCloseCImg: React.MouseEventHandler<HTMLDivElement> = (e) => {
        const { className } = e?.target as HTMLDivElement;
        if (cImgBtnopen && !className.includes("coverImage")) {
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

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = async (
        e
    ) => {
        const { files } = e.currentTarget;
        if (files !== null) {
            let url = URL.createObjectURL(files[0]);
            setCImgFile(files[0]);
            setCImg(url);
        }
    };

    const saveImage = () => {
        if (cImgFile) {
            const formData = new FormData();

            formData.append("mode", "cover");
            formData.append("streamfile", cImgFile);

            dispatch(userActionCreator.coverImage(formData));
            setCImg("");
        }
    };

    const handleCancle = () => {
        setCImg("");
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
            <Layout>
                <Top cImg={cImg === "" ? data?.coverImage : cImg}>
                    {cImg !== "" && (
                        <ImageHeader>
                            <CancleBtn type="button" onClick={handleCancle}>
                                <Text
                                    text={"취소"}
                                    tag={"span"}
                                    cssObj={{
                                        fontSize: " 15px",
                                        fontWeight: 600,
                                        fontColor: theme.color.white,
                                    }}
                                />
                            </CancleBtn>
                            <SaveBtn type="button" onClick={saveImage}>
                                <Text
                                    text={"변경 내용 저장"}
                                    tag={"span"}
                                    cssObj={{
                                        fontSize: " 15px",
                                        fontWeight: 600,
                                        fontColor: theme.color.white,
                                    }}
                                />
                            </SaveBtn>
                        </ImageHeader>
                    )}
                    <Input
                        type="file"
                        id="coverimage"
                        onChange={handleOnChange}
                    />
                    <ImageShadow>
                        {loginInfo?.data?.email === data?.email && (
                            <CoverImageButtonLayout onClick={handleOpenCImg}>
                                <Text
                                    text={"커버 사진 추가"}
                                    cssObj={{
                                        fontSize: " 15px",
                                        fontWeight: 600,
                                    }}
                                />
                            </CoverImageButtonLayout>
                        )}
                        {cImgBtnopen && (
                            <CloseEventBtn
                                closeFunc={handleCloseCImg}
                                width={"328px"}
                                height={"auto"}
                                bottom={"-72px"}
                                right={"30px"}
                                zIndenx={"9"}
                            >
                                <HoverBtn
                                    text={"사진 선택"}
                                    onClick={handleOpenCImgModal}
                                />
                                <Label
                                    htmlFor="coverimage"
                                    className="coverImage"
                                >
                                    사진 업로드
                                </Label>
                            </CloseEventBtn>
                        )}
                    </ImageShadow>
                </Top>
                <Bottom>
                    <UserImage>
                        <Image
                            src={data?.profileImage}
                            onClick={handleOpenPImg}
                        ></Image>
                    </UserImage>
                    {pImgBtnopen && (
                        <CloseEventBtn
                            closeFunc={handleClosePImg}
                            width={"328px"}
                            height={"auto"}
                            bottom={"-66px"}
                            left={"-88px"}
                        >
                            <HoverBtn
                                text={"사진 추가"}
                                onClick={handleOpenPImgModal}
                            />
                        </CloseEventBtn>
                    )}
                    <FlexLayout>
                        <Text
                            text={data?.nickName}
                            tag={"span"}
                            cssObj={{
                                fontSize: " 32px",
                                fontWeight: 700,
                            }}
                        />
                        {loginInfo?.data?.email !== data?.email && (
                            <div>
                                <Button2
                                    text={"친구"}
                                    color={
                                        isFriend?.data
                                            ? theme.color.seaBule
                                            : theme.color.gray
                                    }
                                    fs={"15px"}
                                    fw={600}
                                    fc={
                                        isFriend?.data
                                            ? theme.color.white
                                            : theme.color.black
                                    }
                                    width={"76px"}
                                    height={"36px"}
                                />
                                <Button2
                                    text={"메세지 보내기"}
                                    color={theme.color.gray}
                                    fs={"15px"}
                                    fw={600}
                                    fc={theme.color.black}
                                    width={"140px"}
                                    height={"36px"}
                                />
                            </div>
                        )}
                    </FlexLayout>
                </Bottom>
            </Layout>
            {pImgModalopen && (
                <SetProfileImage
                    closeFunc={handleClosePImgModal}
                    getImage={setPImg}
                />
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
