import theme from "../../styles/theme";
import styled from "../../styles/theme-components";
import { Text } from "../common/Text";

const Wrapper = styled.div`
    max-width: 240px;
    max-height: 395px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    display: grid;
    grid-template-rows: 60% 40%;
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
    min-height: 128px;
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
    margin-bottom: 6px;
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
}

export const FriendCard = ({ user }: Props) => {
    const handleConfirm = (id: number) => {
        console.log("ok: ", id);
    };

    const handleCancle = (id: number) => {
        console.log("cancle: ", id);
    };

    return (
        <Wrapper>
            <ImageWrapper src={user.user.profileImage} />
            <UserInfo>
                <Text
                    text={user.user.nickName}
                    fs={"17px"}
                    fw={600}
                    lh={"20px"}
                />
                <BtnWrapper>
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
                    <CancleBtn
                        type="button"
                        onClick={() => {
                            handleCancle(user.id);
                        }}
                    >
                        <Text
                            text={"삭제"}
                            fs={"15px"}
                            fw={600}
                            lh={"20px"}
                            ta={"center"}
                        />
                    </CancleBtn>
                </BtnWrapper>
            </UserInfo>
        </Wrapper>
    );
};
