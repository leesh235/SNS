import styled from "../../styles/theme-components";
import { Text } from "../common/Text";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriendList } from "../../modules/action/friends";
import {
    setCreateGroupRoom,
    setJoinRoom,
    setRoomList,
} from "../../modules/action/chat";
import { FriendList } from "./FriendList";
import theme from "../../styles/theme";

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    right: 90px;
    z-index: 9;
    width: 328px;
    height: 455px;
    border-radius: 6px;
    background-color: ${(props) => props.theme.color.white};
`;

const Top = styled.div`
    width: calc(100% - 20px);
    min-height: 76px;
    border-bottom: 1px solid ${(props) => props.theme.color.gray};
    display: flex;
    flex-direction: column;
    padding: 10px;
    > :nth-child(1) {
        width: 100%;
        height: 38px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    > :nth-child(2) {
        width: 100%;
        min-height: 38px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    > :nth-child(3) {
        width: 100%;
        min-height: 38px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    }
`;

const SelectWrapper = styled.div`
    margin-left: 5px;
`;

const SelectStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 79px;
    height: 32px;
    border-radius: 6px;
    background-color: ${(props) => props.theme.color.lightSeaBlue};
`;

const SelectCancle = styled.div`
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: 8px;
`;

const CloseBtn = styled.div`
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const Middle = styled.input`
    width: calc(100% - 20px);
    height: 40px;
    padding: 10px;
    border: 0;
    border-bottom: 1px solid ${(props) => props.theme.color.gray};
`;

const CreateBtn = styled.div`
    width: 60px;
    height: 30px;
    border-radius: 6px;
    background-color: ${(props) => props.theme.color.lightSeaBlue};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

interface Props {
    closeFunc: any;
}

export const CreateChatRoom = ({ closeFunc }: Props) => {
    const dispatch = useDispatch();

    const [select, setSelect] = useState<string[]>([]);
    const [selectNickName, setSelectNickName] = useState<any[]>([]);
    const [search, setSearch] = useState<string>("");

    const { loading, data, error } = useSelector(
        (state: any) => state.chat.createGroupRoom
    );

    const handleSelect = (email: string, nickName: string) => {
        const arr = select.filter((email) => {
            return email === email;
        });
        const arr2 = selectNickName.filter((obj) => {
            return obj.email === email;
        });
        if (arr.length === 0) setSelect((pre) => pre.concat(email));
        if (arr2.length === 0)
            setSelectNickName((pre) => pre.concat({ email, nickName }));
    };

    const handleSelectCancle = (email: string) => {
        const arr = select.filter((email) => {
            return email !== email;
        });
        const arr2 = selectNickName.filter((obj) => {
            return obj.email !== email;
        });
        setSelect(arr);
        setSelectNickName(arr2);
    };

    const handleSearch: React.FormEventHandler<HTMLInputElement> = (e) => {
        setSearch(e.currentTarget.value);
    };

    const handleCreateGroupRoom = () => {
        dispatch(setCreateGroupRoom({ select: selectNickName }));
        dispatch(setRoomList());
        dispatch(setJoinRoom({ id: data?._id }));
        closeFunc();
    };

    useEffect(() => {
        dispatch(setFriendList({ select, search }));
    }, [select, search]);

    return (
        <Wrapper>
            <Top>
                <div>
                    <Text
                        text={"??? ?????????"}
                        fs={"15px"}
                        fw={500}
                        lh={"20px"}
                        width={"auto"}
                    />
                    <CloseBtn onClick={closeFunc}>X</CloseBtn>
                </div>
                <div>
                    <Text
                        text={"?????? ??????:"}
                        fs={"15px"}
                        fw={500}
                        lh={"20px"}
                        width={"auto"}
                    />
                    <SelectWrapper>
                        {selectNickName?.map((val: any, idx: number) => {
                            return (
                                <SelectStyle key={idx}>
                                    <Text
                                        text={val.nickName}
                                        fs={"13px"}
                                        fw={600}
                                        lh={"16px"}
                                        width={"auto"}
                                        fc={theme.color.seaBule}
                                    />
                                    <SelectCancle
                                        onClick={() => {
                                            handleSelectCancle(val.email);
                                        }}
                                    >
                                        <Text
                                            text={"x"}
                                            fs={"13px"}
                                            fw={600}
                                            lh={"16px"}
                                            width={"auto"}
                                            fc={theme.color.seaBule}
                                        />
                                    </SelectCancle>
                                </SelectStyle>
                            );
                        })}
                    </SelectWrapper>
                </div>
                {selectNickName.length !== 0 && (
                    <div>
                        <CreateBtn onClick={handleCreateGroupRoom}>
                            <Text
                                text={"??????"}
                                fs={"13px"}
                                fw={600}
                                lh={"16px"}
                                width={"auto"}
                                fc={theme.color.seaBule}
                            />
                        </CreateBtn>
                    </div>
                )}
            </Top>
            <Middle
                name="search"
                onInput={handleSearch}
                placeholder="?????? ??????"
            />
            <FriendList handleSelect={handleSelect} />
        </Wrapper>
    );
};
