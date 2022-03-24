import styled from "../../styles/theme-components";
import { IconButton } from "../common/button/IconButton";
import { BoxShadow } from "../styles/BoxShadow";
import { Text } from "../common/Text";
import theme from "../../styles/theme";

const FlexWrapper = styled.div`
    width: calc(100% - 32px);
    height: auto;
    padding: 12px 16px 10px 16px;
`;

const TempoInpout = styled.div`
    width: 100%;
    height: 40px;
`;

const ButtonWrapper = styled.div`
    width: 100%;
    height: auto;
    border-top: 1px solid ${(props) => props.theme.color.lightGray};
    padding-top: 9px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const WritePostCard = () => {
    return (
        <BoxShadow padding={"0px"} tag={"article"}>
            <FlexWrapper>
                <TempoInpout></TempoInpout>
                <ButtonWrapper>
                    <IconButton height={"35px"}>
                        <Text
                            text={"라이브 방송"}
                            fs={"15px"}
                            fw={600}
                            lh={"20px"}
                            width={"auto"}
                            fc={theme.color.lightBlack}
                        />
                    </IconButton>
                    <IconButton height={"35px"}>
                        <Text
                            text={"사진/동영상"}
                            fs={"15px"}
                            fw={600}
                            lh={"20px"}
                            width={"auto"}
                            fc={theme.color.lightBlack}
                        />
                    </IconButton>
                    <IconButton height={"35px"}>
                        <Text
                            text={"중요 이벤트"}
                            fs={"15px"}
                            fw={600}
                            lh={"20px"}
                            width={"auto"}
                            fc={theme.color.lightBlack}
                        />
                    </IconButton>
                </ButtonWrapper>
            </FlexWrapper>
        </BoxShadow>
    );
};
