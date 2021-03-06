import theme from "../../styles/theme";
import styled from "../../styles/theme-components";
import { Text } from "../common/Text";
import { useDispatch } from "react-redux";
import {
    setRefuse,
    setResponse,
    setAllList,
    setRequestList,
} from "../../modules/action/friends";

const Wrapper = styled.div`
    max-width: 240px;
    max-height: 395px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    display: grid;
    grid-template-rows: 60% minmax(auto, 128px);
`;

const ImageWrapper = styled.img`
    min-width: 190px;
    min-height: 190px;
    width: 100%;
    height: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border: 0;
`;

const UserInfo = styled.div`
    min-width: 166px;
    max-height: 128px;
    width: calc(100% - 24px);
    height: calc(100% - 24px);
    border-radius: 8px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const BtnWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`;

const ConfirmBtn = styled.button`
    border: 0;
    border-radius: 6px;
    width: 100%;
    height: 36px;
    margin: 25px 0 6px 0;
    background-color: ${(props) => props.theme.color.seaBule};
    :hover {
        background-color: ${(props) => props.theme.color.lightSeaBlue};
    }
`;

const CancleBtn = styled.button`
    border: 0;
    border-radius: 6px;
    width: 100%;
    height: 36px;
    :hover {
        background-color: ${(props) => props.theme.color.lightGray};
    }
`;

interface Props {
    user: any;
    type: "req" | "res" | "friend";
}

export const FriendCard = ({ user, type }: Props) => {
    const mode = {
        req: "삭제",
        res: "대기",
        friend: "친구 삭제",
    };
    const dispatch = useDispatch();

    const handleConfirm = (id: number) => {
        console.log("ok: ", id);
        if (window.confirm(`친구 수락을 하시겠습니까?`)) {
            dispatch(setResponse({ id }));
            dispatch(setAllList());
            dispatch(setRequestList());
        }
    };

    const handleCancle = (id: number) => {
        console.log("cancle: ", id);
        if (window.confirm(`${mode[type]} 하시겠습니까?`)) {
            dispatch(setRefuse({ id }));
            dispatch(setAllList());
            dispatch(setRequestList());
        }
    };

    return (
        <Wrapper>
            <ImageWrapper src={user.profileImage} />
            <UserInfo>
                <Text text={user.nickName} fs={"17px"} fw={600} lh={"20px"} />
                <BtnWrapper>
                    {type === "req" && (
                        <ConfirmBtn
                            type="button"
                            onClick={() => {
                                handleConfirm(user.id);
                            }}
                        >
                            <Text
                                text={"확인"}
                                fs={"15px"}
                                fw={600}
                                lh={"20px"}
                                ta={"center"}
                                fc={theme.color.white}
                            />
                        </ConfirmBtn>
                    )}
                    {type !== "res" && (
                        <CancleBtn
                            type="button"
                            onClick={() => {
                                handleCancle(user.id);
                            }}
                        >
                            <Text
                                text={mode[type]}
                                fs={"15px"}
                                fw={600}
                                lh={"20px"}
                                ta={"center"}
                            />
                        </CancleBtn>
                    )}
                </BtnWrapper>
            </UserInfo>
        </Wrapper>
    );
};
