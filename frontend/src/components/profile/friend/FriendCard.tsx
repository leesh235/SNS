import styled from "../../../styles/theme-components";
import { BoxShadow } from "../../common/styles/BoxShadow";
import { Text } from "../../common/Text";

const FlexWrapper = styled.div`
    width: 100%;
    height: auto;
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
