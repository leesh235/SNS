import styled from "../../styles/theme-components";
import { BoxShadow } from "../styles/BoxShadow";
import { Text } from "../common/Text";

const FlexWrapper = styled.div`
    width: 100%;
    height: auto;
`;

export const QuestionCard = () => {
    return (
        <BoxShadow tag={"article"} padding={"0"}>
            <FlexWrapper>
                <Text
                    text={"질문"}
                    fs={"20px"}
                    fw={700}
                    lh={"24px"}
                    width={"auto"}
                />
            </FlexWrapper>
        </BoxShadow>
    );
};
