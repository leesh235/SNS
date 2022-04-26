import styled from "../../styles/theme-components";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogoIcon } from "../../assets/icon/LogoIcon";

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
    width: 100%;
    height: calc(100% - 112px);
    padding: 0 0 56px 0;
    display: flex;
    align-items: center;
    justify-content: center;
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

export const ImageView = () => {
    const { loading, data, error } = useSelector(
        (state: any) => state?.post?.postDetail
    );

    const navigate = useNavigate();

    const handleClose = () => {
        navigate(-1);
    };

    useEffect(() => {}, [loading]);

    return (
        <Wrapper>
            <Top>
                <CloseBtn onClick={handleClose}>X</CloseBtn>
                <LogoIcon />
            </Top>
            <Contents>
                <Image src={data?.images[0]} />
            </Contents>
        </Wrapper>
    );
};
