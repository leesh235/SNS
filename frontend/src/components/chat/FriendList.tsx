import styled from "../../styles/theme-components";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Avatar } from "../common/Image/Avatar";
import { Text } from "../common/Text";

const Wrapper = styled.div`
    width: calc(100% - 20px);
    min-height: 157px;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

const List = styled.div`
    width: calc(100% - 10px);
    height: 38px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 6px;
    padding: 5px;
    cursor: pointer;
    :hover {
        background-color: ${(props) => props.theme.color.lightGray};
    }
`;

interface Props {
    handleSelect: any;
}

export const FriendList = ({ handleSelect }: Props) => {
    const { loading, data, error } = useSelector(
        (state: any) => state.friends.friend_list
    );

    useEffect(() => {}, [loading]);

    return (
        <Wrapper>
            {data?.map((val: any, idx: number) => {
                return (
                    <List
                        key={val.id}
                        onClick={() => {
                            handleSelect(val.email, val.nickName);
                        }}
                    >
                        <Avatar src={val.profileImage} margin={"0 10px 0 0"} />
                        <Text text={val.nickName} fs={"15px"} />
                    </List>
                );
            })}
        </Wrapper>
    );
};
