import styled from "../../styles/theme-components";
import { BoxShadow } from "../styles/BoxShadow";
import { Text } from "../common/Text";
import { LinkText } from "../common/button/LinkText";

const FlexWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0;
`;

export const FriendCard = () => {
    return (
        <BoxShadow tag={"article"}>
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
    );
};
