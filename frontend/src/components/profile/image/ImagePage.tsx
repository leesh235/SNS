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
    height: 100vh;
    margin-top: 16px;
`;

const Layout = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
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
`;

const FlexLayout = styled.div`
    width: 100%;
    height: auto;
`;

const MenuLayout = styled.ul`
    width: 100%;
    height: 60px;
    margin: 8px 0 16px 0;
    display: flex;
    flex-direction: row;
`;

const Menu = styled.li<{ click: boolean }>`
    width: 82px;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: ${(props) => (props.click ? "0" : "6")}px;
    border-bottom: 3px solid
        ${(props) =>
            props.click ? props.theme.color.seaBule : props.theme.color.white};
    :hover {
        background-color: ${(props) =>
            !props.click
                ? props.theme.color.lightGray
                : props.theme.color.white};
    }
`;

const ImageLayout = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 8px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 10px;
`;

const Image = styled.img`
    width: 100%;
    height: 162px;
    border-radius: 6px;
    cursor: pointer;
`;

interface Props {}

export const ImagePage = ({ isYou = false }: { isYou: boolean }) => {
    const { email } = useParams();

    const { loading, data, error } = useGetImage("all", email);
    // const data: any[] = [];
    return (
        <Wrapper>
            <Layout>
                <FlexLayout>
                    <Text
                        text={"사진"}
                        tag={"span"}
                        cssObj={{
                            fontSize: "20px",
                            fontWeight: 700,
                        }}
                    />
                </FlexLayout>
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
                                    <Image src={val.url} />
                                </Link>
                            );
                        })}
                </ImageLayout>
            </Layout>
        </Wrapper>
    );
};
