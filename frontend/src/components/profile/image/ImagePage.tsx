import styled from "../../../styles/theme-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Text } from "../../common/Text";
import { routes } from "../../../utils/routes";
import { useGetImage } from "../../../hooks/profile/useGetImage";

const Wrapper = styled.section`
    max-width: 950px;
    width: 100%;
    min-height: calc(100vh - 556px);
    margin-top: 16px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
`;

const Layout = styled.span`
    display: flex;
    flex-direction: column;
    height: auto;
    border-radius: 8px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    padding: 10px;
    ${(props) =>
        props.theme.media.mobileU(`
            width: 100%;
    `)}
    ${(props) =>
        props.theme.media.mobileD(`
            width: 90vw;         
        `)}
    >:nth-child(3) {
        text-align: end;
        width: auto;
        cursor: pointer;
    }
`;

const ImageLayout = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 8px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 178px);
    grid-gap: 10px;
    > a {
        width: 178px;
    }
`;

const Image = styled.img`
    width: 178px;
    height: 162px;
    border-radius: 6px;
    cursor: pointer;
`;

interface Props {}

export const ImagePage = ({ isYou = false }: { isYou: boolean }) => {
    const { email } = useParams();

    const { loading, data, error, handleAllImgClick } = useGetImage(
        "all",
        email
    );
    // const data: any[] = [];
    return (
        <Wrapper>
            <Layout>
                <Text
                    text={"사진"}
                    tag={"span"}
                    cssObj={{
                        fontSize: "20px",
                        fontWeight: 700,
                        margin: "0 0 15px 0",
                    }}
                />

                <ImageLayout>
                    {data?.length !== 0 &&
                        data?.map((val: any, idx: number) => {
                            return (
                                <Link
                                    key={val.id}
                                    to={{
                                        pathname: `${routes.detail}${val.postId}`,
                                    }}
                                >
                                    <Image src={val.imageUrl} />
                                </Link>
                            );
                        })}
                </ImageLayout>
                <span onClick={handleAllImgClick}>더 보기</span>
            </Layout>
        </Wrapper>
    );
};
