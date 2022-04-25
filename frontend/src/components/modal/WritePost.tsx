import styled from "../../styles/theme-components";
import { useState, useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { Text } from "../common/Text";
import theme from "../../styles/theme";
import { obToUrl } from "../../utils/objToUrl";
import { setWritePost } from "../../modules/action/post";
import { setMyPosts } from "../../modules/action/posts";

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

const Box = styled.form`
    width: 500px;
    min-height: 418px;
    height: auto;
    margin: 20px;
    background-color: ${(props) => props.theme.color.white};
    border-radius: 8px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    justify-content: space-around;
    align-items: center;
    > input {
        width: 0px;
        height: 0px;
    }
`;

const Top = styled.article`
    width: calc(100% - 60px);
    height: 59px;
    border-bottom: 1px solid ${(props) => props.theme.color.gray};
    padding: 0 0 0 60px;
    display: grid;
    grid-template-columns: auto 60px;
    align-items: center;
    > :nth-child(1) {
        justify-self: center;
    }
`;

const UserInfo = styled.article`
    width: calc(100% - 32px);
    height: 40px;
    padding: 16px 0;
    margin: 0 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const TextContents = styled.textarea`
    width: calc(100% - 32px);
    height: 154px;
    padding: 0 16px;
    border: 0;
    outline: none;
    resize: none;
    font-size: 24px;
    line-height: 28px;
    ::placeholder {
        color: ${(props) => props.theme.color.gray};
    }
`;

const ImageContents = styled.article`
    width: calc(100% - 48px);
    height: 40px;
    margin: 16px;
    padding: 8px;
    border: 1px solid ${(props) => props.theme.color.gray};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ImageBox = styled.div`
    width: 450px;
    height: auto;
    min-height: 221px;
    max-height: 400px;
    padding: 8px;
    border: 1px solid ${(props) => props.theme.color.gray};
    border-radius: 6px;
`;

const ImageBtn = styled.label`
    width: 450px;
    height: auto;
    min-height: 221px;
    max-height: 400px;
    background-color: ${(props) => props.theme.color.gray1};
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    overflow-y: auto;
    overflow-x: hidden;
`;

const ImagePreview = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 6px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50%, auto));
`;

const CloseBtn = styled.div`
    width: 28px;
    height: 28px;
    border-radius: 14px;
    border: 1px solid ${(props) => props.theme.color.gray};
    background-color: ${(props) => props.theme.color.white};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 9;
`;

const Bottom = styled.button<{ bc?: string }>`
    width: calc(100% - 32px);
    height: 36px;
    margin: 0 16px;
    border: 0;
    border-radius: 6px;
    padding: 0;
    background-color: ${(props) => props.bc};
    :hover {
        background-color: ${(props) => props.theme.color.darkSeaBlue};
    }
`;

const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: gray;
`;

const SelectImage = styled.img`
    width: 100%;
    height: 100%;
`;

const EventBtn = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 18px;
    background-color: ${(props) => props.theme.color.gray};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const ClickBtn = styled.div`
    width: auto;
    height: auto;
    cursor: pointer;
`;

interface Props {
    closeFunc: any;
    setClose: any;
}

export const WritePost = ({ closeFunc, setClose }: Props) => {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector(
        (state: any) => state?.profile?.profile
    );

    const [fileList, setFileList] = useState<Array<any>>([]);
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setFileList([]);
        setOpen(false);
    };

    const handleImageOnChange: React.ChangeEventHandler = (e) => {
        const { files } = e?.target as HTMLInputElement;
        if (files) {
            const arr = Array.from(files);
            setFileList((state) => state.concat(arr));
        }
    };

    const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const {
            contents,
            images: { files },
        } = e.currentTarget;

        const formData = new FormData();
        formData.append("contents", contents.value);
        if (files) {
            formData.append("date", `${Date.now()}`);
        }
        for (let i = 0; i < files.length; i++) {
            formData.append("images", files[i]);
        }

        dispatch(setWritePost(formData));
        dispatch(setMyPosts());

        setClose(false);
    };

    useEffect(() => {
        document.body.style.cssText = `
            overflow: hidden;
        `;
        return () => {
            document.body.style.cssText = ``;
        };
    }, []);

    return (
        <Wrapper onClick={closeFunc}>
            <Box onSubmit={handleOnSubmit}>
                <Top>
                    <Text
                        text={"게시글 만들기"}
                        fs={"20px"}
                        fw={700}
                        lh={"24px"}
                        ta={"center"}
                        width={"calc(100% - 120px)"}
                    />
                    <EventBtn onClick={closeFunc}>X</EventBtn>
                </Top>
                <UserInfo>
                    <Image src={data?.profileImage} />
                    <Text
                        text={data?.nickName}
                        fs={"15px"}
                        fw={600}
                        lh={"20px"}
                        margin={"0 0 0 10px"}
                    />
                </UserInfo>
                <TextContents
                    name="contents"
                    required
                    defaultValue={""}
                    placeholder="무슨 생각을 하고 계신가요?"
                />
                {open && (
                    <ImageBox>
                        <ImageBtn htmlFor="imgOrvedio">
                            <CloseBtn onClick={handleClose}>X</CloseBtn>
                            {fileList.length === 0 ? (
                                <>
                                    <Text
                                        text={"사진/동영상 추가"}
                                        fs={"17px"}
                                        fw={500}
                                        lh={"20px"}
                                        ta={"center"}
                                        width={"auto"}
                                    />
                                    <Text
                                        text={"또는 끌어서 놓습니다"}
                                        fs={"12px"}
                                        lh={"16px"}
                                        ta={"center"}
                                        width={"auto"}
                                    />
                                </>
                            ) : (
                                <ImagePreview>
                                    {fileList.map((file, idx) => {
                                        return (
                                            <SelectImage
                                                key={idx}
                                                src={obToUrl(file)}
                                            ></SelectImage>
                                        );
                                    })}
                                </ImagePreview>
                            )}
                        </ImageBtn>
                    </ImageBox>
                )}
                <input
                    type="file"
                    id="imgOrvedio"
                    name="images"
                    onChange={handleImageOnChange}
                    multiple
                />
                <ImageContents>
                    <ClickBtn onClick={handleOpen}>
                        <Text
                            text={"사진 추가"}
                            fs={"15px"}
                            fw={600}
                            lh={"20px"}
                            ta={"center"}
                        />
                    </ClickBtn>
                </ImageContents>
                <Bottom bc={theme.color.gray}>
                    <Text
                        text={"게시"}
                        fs={"15px"}
                        fw={600}
                        lh={"20px"}
                        ta={"center"}
                        fc={theme.color.white}
                    />
                </Bottom>
            </Box>
        </Wrapper>
    );
};
