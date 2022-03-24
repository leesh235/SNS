import styled from "../../styles/theme-components";
import { IntroduceCard } from "../card/IntroduceCard";
import { WritePostCard } from "../card/WritePostCard";
import { PostFlexCard } from "../card/PostFlexCard";
import { WritePost } from "../modal/WritePost";
import { BoxShadow } from "../styles/BoxShadow";
import { Text } from "../common/Text";

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

const FlexWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0;
`;

export const ProfilePost = () => {
    return (
        <Wrapper>
            <LeftWrapper>
                <IntroduceCard />
                <BoxShadow>
                    <FlexWrapper>
                        <Text
                            text={"사진"}
                            fs={"20px"}
                            fw={700}
                            lh={"24px"}
                            width={"auto"}
                        />
                    </FlexWrapper>
                </BoxShadow>
                <BoxShadow>
                    <FlexWrapper>
                        <Text
                            text={"친구"}
                            fs={"20px"}
                            fw={700}
                            lh={"24px"}
                            width={"auto"}
                        />
                    </FlexWrapper>
                </BoxShadow>
            </LeftWrapper>
            <RightWrapper>
                <WritePostCard />
                <PostFlexCard />
            </RightWrapper>
            {/* <WritePost /> */}
        </Wrapper>
    );
};
