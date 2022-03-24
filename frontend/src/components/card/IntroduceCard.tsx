import styled from "../../styles/theme-components";
import { Text } from "../common/Text";
import { Button2 } from "../common/button/Button2";
import { BoxShadow } from "../styles/BoxShadow";
import theme from "../../styles/theme";

const FlexWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    > :nth-child(n + 1) {
        margin-bottom: 16px;
    }
`;

export const IntroduceCard = () => {
    return (
        <BoxShadow tag={"article"}>
            <FlexWrapper>
                <Text
                    margin={"10px"}
                    text={"소개"}
                    fs={"20px"}
                    lh={"24px"}
                    fw={700}
                    width={"95%"}
                />
                <Button2
                    text={"소개 추가"}
                    color={theme.color.gray}
                    fs={"15px"}
                    fw={600}
                    fc={theme.color.black}
                    width={"95%"}
                    height={"36px"}
                />
                <Button2
                    text={"상세 정보 수정"}
                    color={theme.color.gray}
                    fs={"15px"}
                    fw={600}
                    fc={theme.color.black}
                    width={"95%"}
                    height={"36px"}
                />
                <Button2
                    text={"취미 추가"}
                    color={theme.color.gray}
                    fs={"15px"}
                    fw={600}
                    fc={theme.color.black}
                    width={"95%"}
                    height={"36px"}
                />
                <Button2
                    text={"대표 사진 추가"}
                    color={theme.color.gray}
                    fs={"15px"}
                    fw={600}
                    fc={theme.color.black}
                    width={"95%"}
                    height={"36px"}
                />
            </FlexWrapper>
        </BoxShadow>
    );
};
