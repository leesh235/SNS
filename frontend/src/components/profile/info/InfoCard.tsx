import styled from "../../../styles/theme-components";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
//functions
import theme from "../../../styles/theme";
import { useGetInformation } from "../../../hooks/profile/useGetInfo";
import { useGetProfile } from "../../../hooks/profile/useGetProfile";
//functions
import { Text } from "../../common/Text";
import { IconButton } from "../../common/button/IconButton";
import { Ability } from "./Ability";
import { School } from "./School";
import { University } from "./University";
import { Address } from "./Address";
import { Number } from "./Number";

const Layout = styled.div`
    border-radius: 8px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    padding: 8px;
    ${(props) =>
        props.theme.media.mobileU(`
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1px 2fr;
    `)}
    ${(props) =>
        props.theme.media.mobileD(`
            width: 90vw;
            display: column;
           
        `)}
`;

const LeftLayout = styled.div`
    width: 100%;
    height: auto;
    padding: 16px 6px;
    > :nth-child(n + 1) {
        margin-bottom: 10px;
    }
`;

const Line = styled.div`
    ${(props) =>
        props.theme.media.mobileU(`
            border-right: 1px solid ${props.theme.color.lightGray};
    `)}
    ${(props) =>
        props.theme.media.mobileD(`
            border-bottom: 1px solid ${props.theme.color.lightGray}; 
        `)}
`;

const RightLayout = styled.div`
    width: 100%;
    height: auto;
    padding: 16px;
    > :nth-child(n) {
        margin-bottom: 24px;
    }
`;

const menuList = ["개요", "경력 및 학력", "연락처 및 기본 정보"];

const dataUrl = [
    "#sk=about",
    "#sk=about_work_and_education",
    "#sk=about_contact_and_basic_info",
];

export const InfoCard = () => {
    const { email } = useParams();

    const navigate = useNavigate();
    const location = useLocation();

    const { loading, data, error } = useGetInformation({ email });
    const store_profile = useGetProfile();

    const [select, setSelect] = useState<number>(0);

    const handleOnClick = (id: number) => {
        setSelect(id);
        navigate(`${dataUrl[id]}`, { replace: true });
    };

    useEffect(() => {}, [location]);

    if (loading || !data)
        return (
            <Layout>
                <LeftLayout></LeftLayout>
            </Layout>
        );
    return (
        <Layout>
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
                {menuList.map((val, idx) => {
                    return (
                        <IconButton
                            width={"100%"}
                            height={"35px"}
                            key={idx}
                            onClick={() => {
                                handleOnClick(idx);
                            }}
                            color={
                                idx === select
                                    ? "rgb(231, 243, 255)"
                                    : theme.color.white
                            }
                            hover={idx !== select}
                        >
                            <Text
                                text={val}
                                cssObj={{
                                    fontSize: "15px",
                                    fontWeight: 600,
                                    fontColor:
                                        idx === select
                                            ? theme.color.seaBule
                                            : theme.color.lightBlack,
                                }}
                            />
                        </IconButton>
                    );
                })}
            </LeftLayout>
            <Line />
            <RightLayout>
                {(select === 0 || select === 1) && (
                    <Ability data={data?.ability} />
                )}

                {(select === 0 || select === 1) && (
                    <University data={data?.university} />
                )}

                {(select === 0 || select === 1) && (
                    <School data={data?.school} />
                )}

                {(select === 0 || select === 2) && <Number data={null} />}

                {(select === 0 || select === 2) && <Address data={null} />}
            </RightLayout>
        </Layout>
    );
};
