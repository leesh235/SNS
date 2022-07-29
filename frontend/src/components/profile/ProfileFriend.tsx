import styled from "../../styles/theme-components";
import { FriendCard } from "./friend/FriendCard";

const Wrapper = styled.section`
    width: 908px;
    height: 100vh;
    margin-top: 16px;
`;

export const ProfileFriend = () => {
    return (
        <Wrapper>
            <FriendCard />
        </Wrapper>
    );
};
