import styled from "../../styles/theme-components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogoIcon } from "../../assets/icon/LogoIcon";
import { Text } from "../common/Text";

const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.color.black};
`;

const Top = styled.div`
    width: calc(100% - 40px);
    height: 56px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30px, auto));
    grid-template-rows: 56px;
    align-items: center;
    justify-items: center;
    column-gap: 10px;
    padding: 0 20px;
`;

const Contents = styled.article`
    width: calc(100% - 40px);
    height: calc(100% - 112px);
    padding: 0 20px 56px 20px;
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

const CloseBtn = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.color.white};
    cursor: pointer;
`;

const NextPreBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 24px;
    background-color: rgb(228, 230, 235, 0.5);
    cursor: pointer;
    :hover {
        background-color: ${(props) => props.theme.color.white};
    }
`;

export const ImageView = () => {
    const navigate = useNavigate();

    const { loading, data, error } = useSelector(
        (state: any) => state?.post?.postDetail
    );

    const [select, setSelect] = useState<number>(0);

    const handleClose = () => {
        navigate(-1);
    };

    const handleNext = () => {
        if (data?.images.length - 1 <= select) setSelect(0);
        else setSelect((prev) => prev + 1);
    };

    const handlePrev = () => {
        if (0 >= select) setSelect(data?.images.length - 1);
        else setSelect((prev) => prev - 1);
    };

    useEffect(() => {
        console.log(data?.images);
    }, [loading]);

    return (
        <Wrapper>
            <Top>
                <CloseBtn onClick={handleClose}>X</CloseBtn>
                <LogoIcon />
            </Top>
            <Contents>
                <NextPreBtn onClick={handlePrev}>
                    <Text text={"<"} fs={"20px"} fw={600} width={"auto"} />
                </NextPreBtn>
                <Image src={data?.images[select].url} />
                <NextPreBtn onClick={handleNext}>
                    <Text text={">"} fs={"20px"} fw={600} width={"auto"} />
                </NextPreBtn>
            </Contents>
        </Wrapper>
    );
};
