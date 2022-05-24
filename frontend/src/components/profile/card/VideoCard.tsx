import styled from "../../../styles/theme-components";
import { BoxShadow } from "../../styles/BoxShadow";
import { Text } from "../../common/Text";

const FlexWrapper = styled.div`
    width: 100%;
    height: auto;
`;

export const VideoCard = () => {
    return (
        <BoxShadow tag={"article"}>
            <FlexWrapper>
                <Text
                    text={"동영상"}
                    fs={"20px"}
                    fw={700}
                    lh={"24px"}
                    width={"auto"}
                />
            </FlexWrapper>
        </BoxShadow>
    );
};
