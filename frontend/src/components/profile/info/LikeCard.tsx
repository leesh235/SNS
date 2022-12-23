import styled from "../../../styles/theme-components";
//components
import { BoxShadow } from "../../common/styles/BoxShadow";
import { Text } from "../../common/Text";

const FlexLayout = styled.div`
    width: 100%;
    height: auto;
`;

export const LikeCard = () => {
    return (
        <BoxShadow tag={"article"} padding={"0"}>
            <FlexLayout>
                <Text
                    text={"좋아요"}
                    tag={"span"}
                    cssObj={{
                        fontSize: "20px",
                        fontWeight: 700,
                    }}
                />
            </FlexLayout>
        </BoxShadow>
    );
};
