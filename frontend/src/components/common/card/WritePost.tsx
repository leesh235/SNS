import styled from "../../../styles/theme-components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import theme from "../../../styles/theme";
//functions
import { obToUrl } from "../../../utils/objToUrl";
import { postActionCreator } from "../../../modules/action/post";
import { postsActionCreator } from "../../../modules/action/posts";
import { useUserInfo } from "../../../hooks/common/useUserInfo";
import { useForm } from "../../../hooks/common/useForm";
import { useModal } from "../../../hooks/common/useModal";
import { useImageFunc } from "../../../hooks/common/useImageFunc";
import { usePostFunc } from "../../../hooks/post/usePostFunc";
import { writePostValidate } from "../../../utils/validate";
//components
import { Text } from "../Text";
import { ModifyPost } from "./ModifyPost";
import { BagicButton } from "../button/BagicButton";
import { HoverButton } from "../button/HoverButton";
import { FileButton2 } from "../button/FileButton2";
import { CloseButton } from "../button/CloseButton";

const Layout = styled.form`
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
    input {
        width: 0px;
        height: 0px;
    }
`;

const TitleLayout = styled.article`
    width: 100%;
    height: 59px;
    border-bottom: 1px solid ${(props) => props.theme.color.gray};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const UserLayout = styled.article`
    width: 95%;
    height: 40px;
    margin: 0 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const TextContents = styled.textarea`
    width: 95%;
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

const ImageContents = styled.div`
    width: 90%;
    height: 40px;
    margin: 16px;
    border: 1px solid ${(props) => props.theme.color.gray};
    border-radius: 6px;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
`;

const ImageLayout = styled.div`
    width: 450px;
    height: auto;
    min-height: 221px;
    max-height: 400px;
    padding: 8px;
    border: 1px solid ${(props) => props.theme.color.gray};
    border-radius: 6px;
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
`;

const ImageBtn = styled.label`
    width: 430px;
    height: 220px;
    background-color: ${(props) => props.theme.color.gray1};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
`;

const ImagePreview = styled.div`
    width: 100%;
    height: auto;
    border-radius: 6px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50%, auto));
    position: relative;
    :hover {
        > :nth-child(1) {
            opacity: 1;
        }
    }
`;

const ButtonLayout = styled.span`
    width: 240px;
    display: flex;
    position: absolute;
    top: 10px;
    left: 10px;
    opacity: 0;
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
    border-radius: 6px;
`;

interface Props {
    closeFunc: any;
    onWriteSubmit?: any;
    post?: {
        id: number;
        userId: string;
        writer: string;
        contents: string;
        createdAt: string;
        images: Array<{ id: number; url: string }>;
        profileImage: string;
        files: string;
    };
}

export const WritePost = ({ closeFunc, post }: Props) => {
    const imageModal = useModal();
    const modifyModal = useModal();

    const login = useUserInfo();

    const { data, uploadImage, deleteImage } = useImageFunc({
        type: "array",
        initList: post?.images,
    });

    const { handleWrite } = usePostFunc(post?.id);

    const { errors, setOption, handleSubmit } = useForm({
        initValues: {},
        validate: writePostValidate,
        onSubmit: (formData: any) => {
            handleWrite({ ...formData, images: data });
            closeFunc();
        },
    });

    useEffect(() => {}, [data]);
    console.log("data: ", data);
    console.log("post: ", post);
    return (
        <>
            <Layout onSubmit={handleSubmit}>
                <TitleLayout>
                    <Text
                        text={post ? "게시글 수정" : "게시글 만들기"}
                        cssObj={{
                            width: "auto",
                            fontSize: "20px",
                            fontWeight: 700,
                        }}
                    />
                    <CloseButton onClick={closeFunc} />
                </TitleLayout>

                <UserLayout>
                    <Image src={post?.profileImage} />
                    <Text
                        text={login.data?.nickName}
                        cssObj={{
                            width: "auto",
                            fontSize: "15px",
                            fontWeight: 600,
                            margin: "0 0 0 10px",
                        }}
                    />
                </UserLayout>

                <TextContents
                    {...setOption("contents")}
                    defaultValue={post?.contents}
                    placeholder="무슨 생각을 하고 계신가요?"
                />

                {(data?.length !== 0 || imageModal.modal) && (
                    <ImageLayout>
                        <CloseButton
                            onClick={imageModal.handleModal}
                            radius={14}
                            color={theme.color.white}
                        />
                        {data?.length === 0 ? (
                            <ImageBtn htmlFor="imgOrvedio">
                                <Text
                                    text={"사진/동영상 추가"}
                                    tag={"span"}
                                    cssObj={{
                                        width: "auto",
                                        fontSize: "17px",
                                        fontWeight: 500,
                                    }}
                                />
                                <Text
                                    text={"또는 끌어서 놓습니다"}
                                    tag={"span"}
                                    cssObj={{
                                        width: "auto",
                                        fontSize: "12px",
                                    }}
                                />
                            </ImageBtn>
                        ) : (
                            <ImagePreview>
                                <ButtonLayout>
                                    <HoverButton
                                        text="모두 수정"
                                        onClick={modifyModal.handleModal}
                                    />
                                    <FileButton2 htmlFor="addImg" />
                                </ButtonLayout>

                                {data?.map((file: any, idx: number) => {
                                    return (
                                        <SelectImage
                                            key={file.id}
                                            src={file.imageUrl}
                                        ></SelectImage>
                                    );
                                })}
                            </ImagePreview>
                        )}
                    </ImageLayout>
                )}
                <input
                    type="file"
                    id="addImg"
                    name="images"
                    onChange={uploadImage}
                    multiple
                />

                <input
                    type="file"
                    id="imgOrvedio"
                    name="images"
                    onChange={uploadImage}
                    multiple
                />
                <ImageContents onClick={imageModal.handleModal}>
                    사진 추가
                </ImageContents>
                <BagicButton
                    text={post ? "저장" : "게시"}
                    type="submit"
                    cssObj={{
                        width: "90%",
                        fontSize: "15px",
                        height: "36px",
                    }}
                />
            </Layout>
            {modifyModal.modal && (
                <ModifyPost
                    fileList={data}
                    closeFunc={modifyModal.handleModal}
                    deleteFunc={deleteImage}
                />
            )}
        </>
    );
};
