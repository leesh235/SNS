import styled from "../../../styles/theme-components";
import { batch } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
//functions
import { profileActionCreator } from "../../../modules/action/profile";
//components
import { IntroduceCard } from "./IntroduceCard";
import { WritePostCard } from "./WritePostCard";
import { PostListCard } from "./PostListCard";
import { BoxShadow } from "../../common/styles/BoxShadow";
import { Text } from "../../common/Text";
import { LatestImageCard } from "./LatestImageCard";

const Layout = styled.section`
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

const LeftLayout = styled.section`
    width: 360px;
    display: flex;
    flex-direction: column;
    > :nth-child(n) {
        margin-bottom: 15px;
    }
`;

const RightLayout = styled.section`
    width: 500px;
    display: flex;
    flex-direction: column;
    > :nth-child(1) {
        margin-bottom: 15px;
    }
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
}

export const ProfilePost = ({ handleUrl, check }: Props) => {
    const { email } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        batch(() => {
            dispatch(profileActionCreator.getLatestImage());
        });
    }, [email]);

    return (
        <>
            <Layout>
                <LeftLayout className={check ? "fix" : ""}>
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
                </LeftLayout>
                {check && <div style={{ width: "360px" }}></div>}
                <RightLayout>
                    <WritePostCard />
                    <PostListCard />
                </RightLayout>
            </Layout>
        </>
    );
};
