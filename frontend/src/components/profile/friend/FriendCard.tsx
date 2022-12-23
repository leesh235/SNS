import styled from "../../../styles/theme-components";
//components
import { BoxShadow } from "../../common/styles/BoxShadow";
import { Text } from "../../common/Text";

const FlexLayout = styled.div`
    width: 100%;
    height: auto;
`;

export const FriendCard = () => {
    return (
        <BoxShadow tag={"article"}>
            <FlexLayout>
                <Text
                    text={"친구"}
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
