import styled from "../../styles/theme-components";
import { BoxShadow } from "../styles/BoxShadow";
import { Text } from "../common/Text";
import { IconButton } from "../common/button/IconButton";
import theme from "../../styles/theme";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const FlexWrapper = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
`;

const LeftWrapper = styled.div`
    width: calc(100% - 12px);
    height: auto;
    border-right: 1px solid ${(props) => props.theme.color.lightGray};
    padding: 16px 6px;
    > :nth-child(n + 1) {
        margin-bottom: 10px;
    }
`;

const RightWrapper = styled.div`
    width: 100%;
    height: auto;
`;

const data = [
    "개요",
    "경력 및 학력",
    "이전 거주지",
    "연락처 및 기본 정보",
    "가족 및 결혼/연애 상태",
    "자세한 내 소개",
    "중요 이벤트",
];

const dataUrl = [
    "#sk=about",
    "#sk=about_work_and_education",
    "#sk=about_places",
    "#sk=about_contact_and_basic_info",
    "#sk=about_family_and_relationships",
    "#sk=about_details",
    "#sk=about_life_events",
];

export const InfoCard = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [select, setSelect] = useState<number>(0);

    const handleOnClick = (id: number) => {
        setSelect(id);
        navigate(`${dataUrl[id]}`, { replace: true });
    };

    useEffect(() => {}, [location]);

    return (
        <BoxShadow tag={"article"} padding={"0"}>
            <FlexWrapper>
                <LeftWrapper>
                    <Text
                        text={"정보"}
                        fs={"20px"}
                        fw={700}
                        lh={"24px"}
                        width={"auto"}
                        margin={"0 10px 20px 10px"}
                    />
                    {data.map((val, idx) => {
                        if (idx === select) {
                            return (
                                <IconButton
                                    width={"100%"}
                                    height={"35px"}
                                    key={idx}
                                    onClick={() => {
                                        handleOnClick(idx);
                                    }}
                                    color={"rgb(231, 243, 255)"}
                                    hover={false}
                                >
                                    <Text
                                        text={val}
                                        fs={"15px"}
                                        fw={600}
                                        lh={"20px"}
                                        width={"100%"}
                                        fc={theme.color.seaBule}
                                    />
                                </IconButton>
                            );
                        } else {
                            return (
                                <IconButton
                                    width={"100%"}
                                    height={"35px"}
                                    key={idx}
                                    onClick={() => {
                                        handleOnClick(idx);
                                    }}
                                >
                                    <Text
                                        text={val}
                                        fs={"15px"}
                                        fw={600}
                                        lh={"20px"}
                                        width={"100%"}
                                        fc={theme.color.lightBlack}
                                    />
                                </IconButton>
                            );
                        }
                    })}
                </LeftWrapper>
                <RightWrapper></RightWrapper>
            </FlexWrapper>
        </BoxShadow>
    );
};
