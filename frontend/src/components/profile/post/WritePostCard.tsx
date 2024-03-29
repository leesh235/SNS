import styled from "../../../styles/theme-components";
import { useState } from "react";
//functions
import theme from "../../../styles/theme";
import { useModal } from "../../../hooks/common/useModal";
//components
import { IconButton } from "../../common/button/IconButton";
import { BoxShadow } from "../../common/styles/BoxShadow";
import { Text } from "../../common/Text";
import { InputButton } from "../../common/button/InputButton";
import { WritePost } from "../../common/card/WritePost";
import { ModalLayout } from "../../common/styles/ModalLayout";

const FlexLayout = styled.div`
    width: 100%;
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

const ButtonLayout = styled.div`
    width: 100%;
    height: auto;
    border-top: 1px solid ${(props) => props.theme.color.lightGray};
    padding-top: 9px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const WritePostCard = () => {
    const { modal, handleModal } = useModal();

    return (
        <>
            <BoxShadow padding={"0px"} tag={"article"}>
                <FlexLayout>
                    <TopInpout>
                        <InputButton
                            text={"무슨 생각을 하고 계신가요?"}
                            onClick={handleModal}
                        />
                    </TopInpout>
                    <ButtonLayout>
                        <IconButton height={"35px"}>
                            <Text
                                text={"라이브 방송"}
                                tag={"span"}
                                cssObj={{
                                    fontColor: theme.color.lightBlack,
                                    fontSize: "15px",
                                    fontWeight: 600,
                                }}
                            />
                        </IconButton>
                        <IconButton height={"35px"}>
                            <Text
                                text={"사진/동영상"}
                                tag={"span"}
                                cssObj={{
                                    fontColor: theme.color.lightBlack,
                                    fontSize: "15px",
                                    fontWeight: 600,
                                }}
                            />
                        </IconButton>
                        <IconButton height={"35px"}>
                            <Text
                                text={"중요 이벤트"}
                                tag={"span"}
                                cssObj={{
                                    fontColor: theme.color.lightBlack,
                                    fontSize: "15px",
                                    fontWeight: 600,
                                }}
                            />
                        </IconButton>
                    </ButtonLayout>
                </FlexLayout>
            </BoxShadow>
            {modal && (
                <ModalLayout onCloseClick={handleModal}>
                    <WritePost closeFunc={handleModal} />
                </ModalLayout>
            )}
        </>
    );
};
