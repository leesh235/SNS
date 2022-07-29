import styled from "../../styles/theme-components";
import { VideoCard } from "./video/VideoCard";

const Wrapper = styled.section`
    width: 908px;
    height: 100vh;
    margin-top: 16px;
`;

export const ProfileVideo = () => {
    return (
        <Wrapper>
            <VideoCard />
        </Wrapper>
    );
};
