import styled from "../../styles/theme-components";
import { useDispatch } from "react-redux";
//functions
import theme from "../../styles/theme";
import { friendsActionCreator } from "../../modules/action/friends";
//components
import { Text } from "../common/Text";

const Layout = styled.div`
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

const ImageLayout = styled.img`
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

const BtnLayout = styled.div`
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
            dispatch(friendsActionCreator.response({ id }));
            dispatch(friendsActionCreator.allList());
            dispatch(friendsActionCreator.requestList());
        }
    };

    const handleCancle = (id: number) => {
        console.log("cancle: ", id);
        if (window.confirm(`${mode[type]} 하시겠습니까?`)) {
            dispatch(friendsActionCreator.refuse({ id }));
            dispatch(friendsActionCreator.allList());
            dispatch(friendsActionCreator.requestList());
        }
    };

    return (
        <Layout>
            <ImageLayout src={user.profileImage} />
            <UserInfo>
                <Text
                    text={user.nickName}
                    cssObj={{
                        fontSize: "17px",
                        fontWeight: 600,
                    }}
                />
                <BtnLayout>
                    {type === "req" && (
                        <ConfirmBtn
                            type="button"
                            onClick={() => {
                                handleConfirm(user.id);
                            }}
                        >
                            <Text
                                text={"확인"}
                                cssObj={{
                                    fontSize: "15px",
                                    fontWeight: 600,
                                    fontColor: theme.color.white,
                                }}
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
                                cssObj={{
                                    fontSize: "15px",
                                    fontWeight: 600,
                                }}
                            />
                        </CancleBtn>
                    )}
                </BtnLayout>
            </UserInfo>
        </Layout>
    );
};
