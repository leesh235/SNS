import styled, { css } from "../../../styles/theme-components";
//functions
//components
import { IntroduceCard } from "./IntroduceCard";
import { WritePostCard } from "./WritePostCard";
import { PostSection } from "./PostSection";
import { BoxShadow } from "../../common/styles/BoxShadow";
import { Text } from "../../common/Text";
import { LatestImageCard } from "./LatestImageCard";

const Layout = styled.section`
    width: 100%;
    min-height: calc(100vh - 556px);
    padding: 0 16px;
    margin-top: 16px;
    ${(props) =>
        props.theme.media.mobileU(`
        max-width: 908px;
        display: grid;
        grid-template-columns: repeat(2, auto);
        column-gap: 16px;
    `)}
    ${(props) =>
        props.theme.media.mobileD(`
        display: flex;
        flex-direction: column;
        align-items:center;
    `)}
`;

const FixLayout = styled.span<{ check: boolean }>`
    width: 100%;
    display: flex;
    flex-direction: column;
    > :nth-child(n) {
        margin-bottom: 15px;
    }
    ${(props) =>
        props.theme.media.mobileU(`
        ${
            props.check &&
            css`
                width: 360px;
                position: fixed;
                top: 129px;
                z-index: 0;
            `
        }
    `)}
`;

const LeftLayout = styled.section`
    ${(props) =>
        props.theme.media.mobileU(`
        width: 360px;
    `)}
    ${(props) =>
        props.theme.media.mobileD(`
        width: 80vw;
        display: flex;
        flex-direction: column;
    `)}
`;

const RightLayout = styled.section`
    display: flex;
    flex-direction: column;
    > :nth-child(1) {
        margin-bottom: 15px;
    }
    ${(props) =>
        props.theme.media.mobileU(`
        width: 500px;
    `)}
    ${(props) =>
        props.theme.media.mobileD(`
        width: 80vw;
    `)}
`;

const FlexLayout = styled.div`
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
    isYou: boolean;
}

export const PostPage = ({ handleUrl, check, isYou }: Props) => {
    return (
        <>
            <Layout>
                <LeftLayout>
                    <FixLayout check={check}>
                        <IntroduceCard handleUrl={handleUrl} />
                        <LatestImageCard handleUrl={handleUrl} />
                        <BoxShadow>
                            <FlexLayout>
                                <Text
                                    text={"친구"}
                                    tag={"span"}
                                    cssObj={{
                                        fontSize: "20px",
                                        fontWeight: 700,
                                    }}
                                />
                            </FlexLayout>
                        </BoxShadow>
                    </FixLayout>
                </LeftLayout>
                <RightLayout>
                    {isYou && <WritePostCard />}
                    <PostSection />
                </RightLayout>
            </Layout>
        </>
    );
};
