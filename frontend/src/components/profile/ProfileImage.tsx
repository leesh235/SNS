import styled from "../../styles/theme-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ImageCard } from "./card/ImageCard";
import { setAlltImages } from "../../modules/action/image";

const Wrapper = styled.section`
    width: 908px;
    height: 100vh;
    margin-top: 16px;
`;

export const ProfileImage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAlltImages());
    }, []);

    return (
        <Wrapper>
            <ImageCard />
        </Wrapper>
    );
};
