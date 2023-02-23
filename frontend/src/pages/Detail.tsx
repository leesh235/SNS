import styled from "../styles/theme-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { postActionCreator } from "../modules/action/post";
import { commentActionCreator } from "../modules/action/comment";
import { ImageView } from "../components/detail/ImageView";
import { TextView } from "../components/detail/TextView";
import { LogoIcon } from "../assets/icon/LogoIcon";
import { useNavigate } from "react-router-dom";
import { OptionMenu } from "../components/common/header/OptionMenu";

const Layout = styled.main`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 999;
`;

const FlexLayout = styled.div`
    ${(props) =>
        props.theme.media.mobileU(`
        display: grid;
        grid-template-columns: calc(100vw - 360px) 360px;
    `)}
    ${(props) =>
        props.theme.media.mobileD(`
        display: grid;
        grid-template-rows: 60vh 40vh;
    `)}
`;

const Top = styled.div`
    width: 100%;
    height: 57px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 1000;
    ${(props) =>
        props.theme.media.mobileD(`
        background-color: ${props.theme.color.white};
    `)}
`;

const LeftMenu = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding-left: 20px;
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${(props) =>
        props.theme.media.mobileU(`
        width: 360px;
        border-bottom: 1px solid ${props.theme.color.lightGray};
        background-color: ${props.theme.color.white};
    `)}
`;

const CloseBtn = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.color.white};
    cursor: pointer;
`;

const Detail = () => {
    const { postId } = useParams<{ postId: string }>();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { loading, detail } = useSelector((state: any) => state.post);

    const handleClose = () => {
        navigate(-1);
    };

    useEffect(() => {
        if (!postId) return;
        dispatch(postActionCreator.detail({ postId: Number(postId) }));
    }, [postId]);

    if (!detail) return <></>;
    return (
        <Layout>
            <Top>
                <LeftMenu>
                    <CloseBtn onClick={handleClose}>X</CloseBtn>
                    <LogoIcon />
                </LeftMenu>
                <RightMenu>
                    <OptionMenu></OptionMenu>
                </RightMenu>
            </Top>
            <FlexLayout>
                <ImageView />
                <TextView post={detail} />
            </FlexLayout>
        </Layout>
    );
};

export default Detail;
