import theme from "../../styles/theme";
import styled from "../../styles/theme-components";
import { Button } from "../common/button/Button";
import { RequireInput } from "../common/input/RequireInput";
import { useDispatch } from "react-redux";
import { setJoin } from "../../modules/action/join";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const BoxWrapper = styled.div`
    width: 432px;
    height: 512px;
    margin: 20px;
    background-color: ${(props) => props.theme.color.white};
    border-radius: 8px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
`;

const TopWrapper = styled.div`
    padding: 10px 16px;
    border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    > :nth-child(n) {
        margin-bottom: 10px;
    }
`;

const FlexWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const ColumnWrapper = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;
`;

const SubTitle = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${(props) => props.theme.color.lightBlack};
    line-height: 24px;
`;

const Text = styled.div`
    font-size: 12px;
    line-height: 20px;
    color: ${(props) => props.theme.color.lightBlack};
`;

const Contents = styled.p`
    height: 56px;
    font-size: 11px;
    line-height: 14.74px;
    color: ${(props) => props.theme.color.lightBlack};
`;

interface Props {
    onClose: () => void;
}

export const Join = ({ onClose }: Props) => {
    const dispatch = useDispatch();

    const handleJoin = async () => {
        dispatch(
            setJoin({
                firstName: "lee",
                secondName: "seongho",
                email: "wksehs23@naver.com",
                password: "tjdgh235",
                birth: "19960403",
                gender: "male",
            })
        );
        onClose();
    };

    return (
        <Wrapper>
            <BoxWrapper>
                <TopWrapper>
                    <FlexWrapper>
                        <Title>가입하기</Title>
                        <div onClick={onClose}>X</div>
                    </FlexWrapper>
                    <SubTitle>빠르고 쉽습니다.</SubTitle>
                </TopWrapper>
                <FormWrapper>
                    <FlexWrapper>
                        <RequireInput placeholder={"성()"} width={"170px"} />
                        <RequireInput
                            placeholder={"이름(성은 제외)"}
                            width={"170px"}
                        />
                    </FlexWrapper>
                    <RequireInput placeholder={"휴대폰 번호 또는 이메일"} />
                    <RequireInput placeholder={"새 비밀번호"} />
                    <ColumnWrapper>
                        <Text>생일</Text>
                        <FlexWrapper>
                            <div>년</div>
                            <div>월</div>
                            <div>일</div>
                        </FlexWrapper>
                    </ColumnWrapper>
                    <ColumnWrapper>
                        <Text>성별</Text>
                        <FlexWrapper>
                            <div>여성</div>
                            <div>남성</div>
                            <div>직접 지정</div>
                        </FlexWrapper>
                    </ColumnWrapper>
                    <Contents>
                        가입하기 버튼을 클릭하면 Facebook의 약관, 데이터 정책 및
                        쿠키 정책에 동의하게 됩니다. Facebook으로부터 SMS 알림을
                        받을 수 있으며 알림은 언제든지 옵트 아웃할 수 있습니다.
                    </Contents>
                    <Button
                        text={"가입하기"}
                        width={"194px"}
                        height={"36px"}
                        color={theme.color.lightGreen}
                        fs={"17px"}
                        type={"button"}
                        onClick={handleJoin}
                    />
                </FormWrapper>
            </BoxWrapper>
        </Wrapper>
    );
};
