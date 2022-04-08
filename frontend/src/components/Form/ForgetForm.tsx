import styled from "../../styles/theme-components";
import { Input } from "../common/input/Input";
import { Button } from "../common/button/Button";
import theme from "../../styles/theme";

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: auto;
    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
`;

const Text1 = styled.div`
    width: 466px;
    padding: 18px 16px 18px 18px;
    font-size: 20px;
    font-weight: 600;
    color: ${(props) => props.theme.color.black};
    border-bottom: solid 1px ${(props) => props.theme.color.lightGray};
`;

const Text2 = styled.div`
    width: 462px;
    margin: 16px;
    font-size: 17px;
    color: ${(props) => props.theme.color.black};
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    width: calc(100% - 32px);
    height: 36px;
    padding: 16px;
    margin-top: 16px;
    border-top: solid 1px ${(props) => props.theme.color.lightGray};
    > :nth-child(2) {
        margin: 0 0 0 8px;
    }
`;

export const ForgetForm = () => {
    return (
        <Wrapper>
            <Text1>내 계정 찾기</Text1>
            <Text2>
                계정을 검색하려면 이메일 주소 또는 휴대폰 번호를 입력하세요.
            </Text2>
            <Input
                width={"444px"}
                padding={"16px 0px 16px 16px"}
                placeholder={"이메일 또는 전화번호"}
            />
            <ButtonWrapper>
                <Button
                    text={"취소"}
                    width={"70px"}
                    height={"36px"}
                    fs={"15px"}
                    fc={theme.color.lightBlack}
                    color={theme.color.gray}
                />
                <Button
                    text={"검색"}
                    width={"70px"}
                    height={"36px"}
                    fs={"15px"}
                />
            </ButtonWrapper>
        </Wrapper>
    );
};
