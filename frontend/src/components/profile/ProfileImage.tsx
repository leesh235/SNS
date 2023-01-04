import styled from "../../styles/theme-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImageCard } from "./image/ImageCard";
import { imageActionCreator } from "../../modules/action/image";
import { useParams } from "react-router-dom";

const Wrapper = styled.section`
    width: 908px;
    height: 100vh;
    margin-top: 16px;
`;

interface Props {}

export const ProfileImage = ({}: Props) => {
    const { email } = useParams();
    const dispatch = useDispatch();

    const { loading, data, error } = useSelector(
        (state: any) => state?.user?.profile
    );

    useEffect(() => {
        dispatch(imageActionCreator.allImage({ email }));
    }, [email]);

    return (
        <Wrapper>
            <ImageCard />
        </Wrapper>
    );
};
