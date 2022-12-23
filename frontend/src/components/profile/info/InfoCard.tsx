import styled from "../../../styles/theme-components";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
//functions
import theme from "../../../styles/theme";
//functions
import { BoxShadow } from "../../common/styles/BoxShadow";
import { Text } from "../../common/Text";
import { IconButton } from "../../common/button/IconButton";
import { Summary } from "./Summary";
import { Ability } from "./Ability";
import { UserInfo } from "./UserInfo";

const FlexLayout = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
`;

const LeftLayout = styled.div`
    width: calc(100% - 12px);
    height: auto;
    border-right: 1px solid ${(props) => props.theme.color.lightGray};
    padding: 16px 6px;
    > :nth-child(n + 1) {
        margin-bottom: 10px;
    }
`;

const RightLayout = styled.div`
    width: calc(100% - 32px);
    height: auto;
    padding: 16px;
    > :nth-child(n) {
        margin-bottom: 24px;
    }
`;

const data = ["개요", "경력 및 학력", "연락처 및 기본 정보"];

const dataUrl = [
    "#sk=about",
    "#sk=about_work_and_education",
    "#sk=about_contact_and_basic_info",
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
            <FlexLayout>
                <LeftLayout>
                    <Text
                        text={"정보"}
                        tag={"span"}
                        cssObj={{
                            fontSize: "20px",
                            fontWeight: 700,
                            margin: "0 10px 20px 10px",
                        }}
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
                                        cssObj={{
                                            fontSize: "15px",
                                            fontWeight: 600,
                                            fontColor: theme.color.seaBule,
                                        }}
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
                                        cssObj={{
                                            fontSize: "15px",
                                            fontWeight: 600,
                                            fontColor: theme.color.lightBlack,
                                        }}
                                    />
                                </IconButton>
                            );
                        }
                    })}
                </LeftLayout>
                <RightLayout>
                    {select === 0 && <Summary />}
                    {select === 1 && <Ability />}
                    {select === 2 && <UserInfo />}
                </RightLayout>
            </FlexLayout>
        </BoxShadow>
    );
};
