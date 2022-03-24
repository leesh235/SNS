import styled from "../../styles/theme-components";
import { IntroduceCard } from "../card/IntroduceCard";
import { ImageCard } from "../card/ImageCard";
import { FriendCard } from "../card/FriendCard";
import { WritePostCard } from "../card/WritePostCard";
import { PostFlexCard } from "../card/PostFlexCard";
import { WritePost } from "../modal/WritePost";

const Wrapper = styled.section`
    width: 908px;
    padding: 0 16px;
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 16px;
`;

const LeftWrapper = styled.section`
    width: 360px;
    display: flex;
    flex-direction: column;
    > :nth-child(n) {
        margin-bottom: 15px;
    }
`;

const RightWrapper = styled.section`
    width: 500px;
    display: flex;
    flex-direction: column;
    > :nth-child(1) {
        margin-bottom: 15px;
    }
`;

export const ProfilePost = () => {
    return (
        <Wrapper>
            <LeftWrapper>
                <IntroduceCard />
                <ImageCard />
                <FriendCard />
            </LeftWrapper>
            <RightWrapper>
                <WritePostCard />
                <PostFlexCard />
            </RightWrapper>
            {/* <WritePost /> */}
        </Wrapper>
    );
};
