import styled from "../../../styles/theme-components";
import { Text } from "../../common/Text";

const Layout = styled.div`
    width: 100%;
    height: 52px;
    display: grid;
    grid-template-columns: 52px calc(100% - 92px) 40px;
    grid-template-rows: 52px;
    align-items: center;
    > :nth-child(2) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        > :nth-child(1) {
            width: 100%;
            display: flex;
            flex-direction: row;
        }
    }
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.color.gray};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IsNotUserInfo = ({
    select,
    ability,
    school,
    university,
}: {
    select: number;
    ability: any;
    school: any;
    university: any;
}) => {
    return (
        <>
            {(select === 0 || select === 1) && (
                <>
                    <Text
                        text={"직장"}
                        cssObj={{ fontSize: "17px", fontWeight: 600 }}
                    />
                    {!ability ? (
                        <div>없음</div>
                    ) : (
                        <Layout>
                            <Icon />
                            <div>
                                <div>
                                    <Text
                                        text={ability?.job}
                                        tag={"span"}
                                        cssObj={{
                                            fontSize: "13px",
                                            fontWeight: 600,
                                        }}
                                    />
                                    <Text
                                        text={ability?.position}
                                        tag={"span"}
                                        cssObj={{ fontSize: "13px" }}
                                    />
                                </div>
                                <Text
                                    text={`${ability?.start}-${ability?.end}`}
                                    cssObj={{ fontSize: "13px" }}
                                />
                            </div>
                        </Layout>
                    )}
                </>
            )}

            {(select === 0 || select === 1) && (
                <>
                    <Text
                        text={"대학"}
                        cssObj={{ fontSize: "17px", fontWeight: 600 }}
                    />
                    {!university ? (
                        <div>없음</div>
                    ) : (
                        <Layout>
                            <Icon />
                            <div>
                                <div>
                                    <Text
                                        text={university?.university}
                                        cssObj={{
                                            fontSize: "13px",
                                            fontWeight: 600,
                                        }}
                                    />
                                    <Text
                                        text={university?.major}
                                        cssObj={{ fontSize: "13px" }}
                                    />
                                </div>
                                <Text
                                    text={`${university?.degree}/${university?.start}-${university?.end}`}
                                    cssObj={{ fontSize: "13px" }}
                                />
                            </div>
                        </Layout>
                    )}
                </>
            )}

            {(select === 0 || select === 1) && (
                <>
                    <Text
                        text={"고등학교"}
                        cssObj={{ fontSize: "17px", fontWeight: 600 }}
                    />
                    {!school ? (
                        <div>없음</div>
                    ) : (
                        <Layout>
                            <Icon />
                            <div>
                                <div>
                                    <Text
                                        text={school?.school}
                                        cssObj={{ fontSize: "15px" }}
                                    />
                                </div>
                                <Text
                                    text={`${school?.start}-${school?.end}`}
                                    cssObj={{ fontSize: "13px" }}
                                />
                            </div>
                        </Layout>
                    )}
                </>
            )}

            {(select === 0 || select === 2) && (
                <>
                    <Text
                        text={"전화번호"}
                        cssObj={{ fontSize: "17px", fontWeight: 600 }}
                    />
                </>
            )}

            {(select === 0 || select === 2) && (
                <>
                    <Text
                        text={"주소"}
                        cssObj={{ fontSize: "17px", fontWeight: 600 }}
                    />
                </>
            )}
        </>
    );
};
