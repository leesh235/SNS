import styled from "../../../styles/theme-components";
//components
import { BoxShadow } from "../../common/styles/BoxShadow";
import { Text } from "../../common/Text";

const FlexLayout = styled.div`
    width: 100%;
    height: auto;
`;

export const VideoCard = () => {
    return (
        <BoxShadow tag={"article"}>
            <FlexLayout>
                <Text
                    text={"동영상"}
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
