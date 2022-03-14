import styled from "../styles/theme-components";
import { Logo } from "../components/common/Logo";

const Wrapper = styled.section`
    > :nth-child(1) {
        margin: 8px 0 16px 0;
    }
`;

const Text1 = styled.div`
    font-size: 28px;
    margin: 0 0 8px 0;
`;

const Text2 = styled.div`
    font-size: 15px;
    margin: 0 0 24px 0;
`;

export const LogInList = () => {
    return (
        <Wrapper>
            <Logo />
            <Text1>최근 로그인 기록</Text1>
            <Text2>사진을 클릭하거나 계정을 추가하세요.</Text2>
        </Wrapper>
    );
};
