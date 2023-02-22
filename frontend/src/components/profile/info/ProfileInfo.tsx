import styled from "../../../styles/theme-components";
import { InfoCard } from "./InfoCard";
import { useGetImage } from "../../../hooks/profile/useGetImage";
import { QuestionCard } from "./QuestionCard";
import { LikeCard } from "./LikeCard";

const Wrapper = styled.section`
    max-width: 950px;
    width: 100%;
    min-height: calc(100vh - 556px);
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > :nth-child(n) {
        margin-bottom: 15px;
    }
`;

export const ProfileInfo = () => {
    return (
        <Wrapper>
            <InfoCard />
            {/* <QuestionCard />
            <LikeCard /> */}
        </Wrapper>
    );
};
