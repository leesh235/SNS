import styled from "../../styles/theme-components";
import { InfoCard } from "./card/InfoCard";
import { QuestionCard } from "./card/QuestionCard";
import { LikeCard } from "./card/LikeCard";

const Wrapper = styled.section`
    width: 908px;
    height: 100vh;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    > :nth-child(n) {
        margin-bottom: 15px;
    }
`;

export const ProfileInfo = () => {
    return (
        <Wrapper>
            <InfoCard />
            <QuestionCard />
            <LikeCard />
        </Wrapper>
    );
};
