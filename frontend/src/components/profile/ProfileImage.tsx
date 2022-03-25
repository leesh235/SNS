import styled from "../../styles/theme-components";
import { ImageCard } from "../card/ImageCard";

const Wrapper = styled.section`
    width: 908px;
    height: 100vh;
    margin-top: 16px;
`;

export const ProfileImage = () => {
    return (
        <Wrapper>
            <ImageCard />
        </Wrapper>
    );
};
