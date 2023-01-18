import styled from "../../../styles/theme-components";
import { InfoCard } from "./InfoCard";
import { QuestionCard } from "./QuestionCard";
import { LikeCard } from "./LikeCard";

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
            {/* <QuestionCard />
            <LikeCard /> */}
        </Wrapper>
    );
};