import styled from "../../../styles/theme-components";
import { BoxShadow } from "../../common/styles/BoxShadow";
import { Text } from "../../common/Text";

const FlexWrapper = styled.div`
    width: 100%;
    height: auto;
`;

export const LikeCard = () => {
    return (
        <BoxShadow tag={"article"} padding={"0"}>
            <FlexWrapper>
                <Text
                    text={"좋아요"}
                    fs={"20px"}
                    fw={700}
                    lh={"24px"}
                    width={"auto"}
                />
            </FlexWrapper>
        </BoxShadow>
    );
};
