import styled from "../../../styles/theme-components";
import { useEffect } from "react";
//functions
import theme from "../../../styles/theme";
//components
import { Text } from "../Text";

const Layout = styled.main`
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
    max-width: 921px;
    width: 100%;
    height: auto;
    background-color: ${(props) => props.theme.color.white};
    border-radius: 8px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    display: grid;
    grid-template-rows: 60px auto 60px;
    align-items: center;
`;

const Top = styled.div`
    height: 100%;
    padding: 0 10px;
    display: flex;
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

const Middle = styled.div`
    width: 100%;
    min-width: 470px;
    height: auto;
    max-height: 674px;
    background-color: ${(props) => props.theme.color.gray};
    padding: 8px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 440px);
    grid-auto-rows: 350px;
    grid-gap: 5px;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    overflow-x: hidden;
`;

const ImageLayout = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 6px;
    position: relative;
    :hover {
        > div {
            opacity: 1;
        }
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 6px;
`;

const DeleteBtn = styled.div`
    width: 28px;
    height: 28px;
    border-radius: 14px;
    border: 1px solid ${(props) => props.theme.color.gray};
    background-color: ${(props) => props.theme.color.white};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 9;
    cursor: pointer;
    opacity: 0;
`;

const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 36px;
    margin: 0 16px;
    border-radius: 6px;
    padding: 0;
    background-color: ${(props) => props.theme.color.seaBule};
    font-size: 15px;
    font-weight: 600;
    color: white;
    :hover {
        background-color: ${(props) => props.theme.color.darkSeaBlue};
    }
    justify-self: flex-end;
    cursor: pointer;
`;

interface Props {
    closeFunc: any;
    deleteFunc: any;
    fileList: Array<any>;
}

export const ModifyPost = ({ fileList, closeFunc, deleteFunc }: Props) => {
    useEffect(() => {
        document.body.style.cssText = `
            overflow: hidden;
            padding-right: 17px;
        `;
        return () => {
            document.body.style.cssText = ``;
        };
    }, [fileList]);

    return (
        <Layout>
            <Box>
                <Top>
                    <Text
                        text={"사진/동영상"}
                        tag={"span"}
                        cssObj={{
                            fontSize: "20px",
                            fontWeight: 700,
                            fontColor: theme.color.black,
                        }}
                    />
                    <CloseBtn onClick={closeFunc}>X</CloseBtn>
                </Top>
                <Middle>
                    {fileList?.map((val, idx) => {
                        return (
                            <ImageLayout key={val.id}>
                                <DeleteBtn
                                    onClick={() => {
                                        deleteFunc(val.id);
                                    }}
                                >
                                    X
                                </DeleteBtn>
                                <Image src={val.imageUrl} />
                            </ImageLayout>
                        );
                    })}
                </Middle>
                <Bottom onClick={closeFunc}>완료</Bottom>
            </Box>
        </Layout>
    );
};
