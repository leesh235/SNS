import styled from "../../styles/theme-components";
import { IconButton } from "../common/button/IconButton";
import { BoxShadow } from "../styles/BoxShadow";
import { Text } from "../common/Text";
import theme from "../../styles/theme";
import { InputButton } from "../common/button/InputButton";
import { useState } from "react";
import { WritePost } from "../modal/WritePost";

const FlexWrapper = styled.div`
    width: calc(100% - 32px);
    height: auto;
    padding: 12px 16px 10px 16px;
`;

const TopInpout = styled.div`
    width: 100%;
    height: auto;
    > :nth-child(1) {
        margin-bottom: 10px;
    }
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
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose: React.MouseEventHandler = (e) => {
        if (e.target !== e.currentTarget) return;
        if (open) setOpen(false);
    };

    return (
        <>
            <BoxShadow padding={"0px"} tag={"article"}>
                <FlexWrapper>
                    <TopInpout>
                        <InputButton
                            text={"무슨 생각을 하고 계신가요?"}
                            onClick={handleOpen}
                        />
                    </TopInpout>
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
            {open && <WritePost closeFunc={handleClose} setClose={setOpen} />}
        </>
    );
};
