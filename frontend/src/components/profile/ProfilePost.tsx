import styled from "../../styles/theme-components";
import { IntroduceCard } from "./post/IntroduceCard";
import { WritePostCard } from "./post/WritePostCard";
import { PostListCard } from "./post/PostListCard";
import { BoxShadow } from "../common/styles/BoxShadow";
import { Text } from "../common/Text";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setLatestImage } from "../../modules/action/image";
import { setMyPosts } from "../../modules/action/posts";
import { setPostDetails } from "../../modules/action/post";
import { useEffect, useRef } from "react";
import { LatestImageCard } from "./post/LatestImageCard";
import { batch } from "react-redux";
import { useObserver } from "../../hooks/useObserver";

const Wrapper = styled.section`
    width: 908px;
    padding: 0 16px;
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 16px;
    .fix {
        position: fixed;
        top: 142px;
        z-index: 1;
    }
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

interface Props {
    handleUrl: any;
    check: boolean;
}

export const ProfilePost = ({ handleUrl, check }: Props) => {
    const { email } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        batch(() => {
            dispatch(setLatestImage({ email }));
        });
    }, [email]);

    return (
        <>
            <Wrapper>
                <LeftWrapper className={check ? "fix" : ""}>
                    <IntroduceCard handleUrl={handleUrl} />
                    <LatestImageCard handleUrl={handleUrl} />
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
                {check && <div style={{ width: "360px" }}></div>}
                <RightWrapper>
                    <WritePostCard />
                    <PostListCard />
                </RightWrapper>
            </Wrapper>
        </>
    );
};
