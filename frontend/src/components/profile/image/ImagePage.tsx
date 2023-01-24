import styled from "../../../styles/theme-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImageCard } from "./ImageCard";
import { profileActionCreator } from "../../../modules/action/profile";
import { useParams } from "react-router-dom";

const Wrapper = styled.section`
    width: 908px;
    height: 100vh;
    margin-top: 16px;
`;

interface Props {}

export const ImagePage = ({}: Props) => {
    const { email } = useParams();
    const dispatch = useDispatch();

    const { loading, data, error } = useSelector(
        (state: any) => state?.profile?.profile
    );

    useEffect(() => {
        dispatch(profileActionCreator.getAllImage({}));
    }, [email]);

    return (
        <Wrapper>
            <ImageCard />
        </Wrapper>
    );
};
