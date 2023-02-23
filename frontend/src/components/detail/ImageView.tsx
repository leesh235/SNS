import styled from "../../styles/theme-components";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//components

const Layout = styled.section`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.color.black};
    display: flex;
    align-items: center;
    justify-content: center;
    ${(props) =>
        props.theme.media.mobileD(`
        margin-top: 57px;
        min-height: 400px;
    `)}
`;

const Contents = styled.article`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
        display: none;
    }
    :hover {
        justify-content: space-between;
        > div {
            display: flex;
        }
    }
`;

const Image = styled.img``;

const NextPreBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 24px;
    background-color: rgb(228, 230, 235, 0.5);
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    :hover {
        background-color: ${(props) => props.theme.color.white};
    }
`;

export const ImageView = () => {
    const navigate = useNavigate();

    const { loading, detail, error } = useSelector((state: any) => state.post);

    const [select, setSelect] = useState<number>(0);

    const handleClose = () => {
        navigate(-1);
    };

    const handleNext = () => {
        if (detail?.images.length - 1 <= select) setSelect(0);
        else setSelect((prev) => prev + 1);
    };

    const handlePrev = () => {
        if (0 >= select) setSelect(detail?.images.length - 1);
        else setSelect((prev) => prev - 1);
    };

    if (!detail) return <></>;
    return (
        <Layout>
            {detail?.images.length !== 0 && (
                <Contents>
                    <NextPreBtn onClick={handlePrev}>{"<"}</NextPreBtn>
                    {detail.images && (
                        <Image src={detail?.images[select].imageUrl} />
                    )}
                    <NextPreBtn onClick={handleNext}>{">"}</NextPreBtn>
                </Contents>
            )}
        </Layout>
    );
};
