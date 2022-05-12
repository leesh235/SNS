import styled from "../../styles/theme-components";
import { Text } from "../common/Text";

const Wrapper = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;

const CardWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const BithdayList = () => {
    return (
        <Wrapper>
            <Text
                text={"생일"}
                fs={"20px"}
                fw={700}
                lh={"24px"}
                margin={"0 0 16px 0"}
            />
            <CardWrapper></CardWrapper>
        </Wrapper>
    );
};
