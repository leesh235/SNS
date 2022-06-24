import styled from "../../../styles/theme-components";
import { useEffect, useState } from "react";
import { Text } from "../../common/Text";
import { Button2 } from "../../common/button/Button2";
import { BoxShadow } from "../../styles/BoxShadow";
import theme from "../../../styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { setIntroduce } from "../../../modules/action/user";

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    > :nth-child(n + 1) {
        margin-bottom: 16px;
    }
    > form {
        width: 95%;
        height: auto;
    }
`;

const FlexWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: end;
    > :nth-child(1) {
        margin-right: 5px;
    }
`;

const IntroduceInput = styled.textarea`
    width: calc(100% - 24px);
    height: 60px;
    padding: 8px 12px;
    border: 1px solid ${(props) => props.theme.color.lightGray};
    border-radius: 6px;
    outline: none;
    resize: none;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    background-color: ${(props) => props.theme.color.gray};
    :hover {
        background-color: ${(props) => props.theme.color.lightGray};
    }
    :focus {
        background-color: ${(props) => props.theme.color.white};
        border: 1px solid ${(props) => props.theme.color.seaBule};
    }
`;

const IntroduceButton = styled.button`
    width: 54px;
    height: 36px;
    border: 0;
    border-radius: 6px;
    background-color: ${(props) => props.theme.color.gray};
    font-size: 15px;
    font-weight: 600;
    color: ${(props) => props.theme.color.black};
    :hover {
        background-color: ${(props) => props.theme.color.lightGray};
    }
`;

interface Props {
    handleUrl: any;
}

export const IntroduceCard = ({ handleUrl }: Props) => {
    const [openIntro, setOpenIntro] = useState<boolean>(false);

    const loginInfo = useSelector((state: any) => state?.user?.loginInfo);
    const userInfo = useSelector((state: any) => state?.user?.profile);

    const dispatch = useDispatch();

    const openIntroduce = () => {
        setOpenIntro(true);
    };

    const closeIntroduce = () => {
        setOpenIntro(false);
    };

    const writeIntroduce: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const { introduce } = e.currentTarget;
        dispatch(setIntroduce({ introduce: introduce.value }));
        setOpenIntro(false);
    };

    useEffect(() => {}, []);

    return (
        <BoxShadow tag={"article"}>
            <Wrapper>
                <Text
                    margin={"10px"}
                    text={"소개"}
                    fs={"20px"}
                    lh={"24px"}
                    fw={700}
                    width={"95%"}
                />
                {userInfo?.data?.email === loginInfo?.data?.email ? (
                    <>
                        {openIntro ? (
                            <form onSubmit={writeIntroduce}>
                                <IntroduceInput
                                    name="introduce"
                                    defaultValue={userInfo?.data?.introduction}
                                    placeholder="   회원님에 대해 소개해주세요"
                                />
                                <Text
                                    text={"101자 남음"}
                                    fs={"13px"}
                                    fc={theme.color.darkGray}
                                    width={"100%"}
                                    ta={"right"}
                                    margin={"8px 0"}
                                />
                                <FlexWrapper>
                                    <IntroduceButton
                                        type="button"
                                        onClick={closeIntroduce}
                                    >
                                        취소
                                    </IntroduceButton>
                                    <IntroduceButton>저장</IntroduceButton>
                                </FlexWrapper>
                            </form>
                        ) : (
                            <>
                                <Text
                                    text={userInfo?.data?.introduction}
                                    fs={"15px"}
                                    width={"100%"}
                                    ta={"center"}
                                    margin={"8px 0"}
                                />
                                <Button2
                                    text={"소개 추가"}
                                    color={theme.color.gray}
                                    fs={"15px"}
                                    fw={600}
                                    fc={theme.color.black}
                                    width={"95%"}
                                    height={"36px"}
                                    onClick={openIntroduce}
                                />
                            </>
                        )}
                    </>
                ) : (
                    <Text
                        text={userInfo?.data?.introduction}
                        fs={"15px"}
                        width={"100%"}
                        ta={"center"}
                        margin={"8px 0"}
                    />
                )}
                {userInfo?.data?.email === loginInfo?.data?.email && (
                    <>
                        <Button2
                            text={"상세 정보 수정"}
                            color={theme.color.gray}
                            fs={"15px"}
                            fw={600}
                            fc={theme.color.black}
                            width={"95%"}
                            height={"36px"}
                            onClick={() => {
                                handleUrl({ id: 1 });
                            }}
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
                    </>
                )}
            </Wrapper>
        </BoxShadow>
    );
};
