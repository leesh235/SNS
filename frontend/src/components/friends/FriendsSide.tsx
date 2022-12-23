import styled from "../../styles/theme-components";
//components
import { Text } from "../common/Text";

const Layout = styled.section`
    background-color: ${(props) => props.theme.color.white};
    max-width: 360px;
    min-height: calc(100vh - 56px);
`;

const TitleLayout = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 16px 12px 16px;
`;

const MenuLayout = styled.nav`
    display: flex;
    flex-direction: column;
    padding: 0 8px;
`;

const Menu = styled.li<{ hover: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: calc(100% - 16px);
    height: 52px;
    border-radius: 6px;
    padding: 0 8px;
    cursor: pointer;
    background-color: ${(props) => props.hover && props.theme.color.gray};
    :hover {
        background-color: ${(props) => !props.hover && props.theme.color.gray};
    }
`;

const Icon = styled.div<{ hover: boolean }>`
    width: 36px;
    height: 36px;
    border-radius: 18px;
    background-color: ${(props) =>
        props.hover ? props.theme.color.seaBule : props.theme.color.gray};
    margin: 8px 12px 8px 0;
`;

interface Props {
    menu: number;
    handleMenu: any;
}

const menuList = ["홈", "친구 요청", "친구 대기", "모든 친구", "생일"];

export const FriendsSide = ({ menu, handleMenu }: Props) => {
    return (
        <Layout>
            <TitleLayout>
                <Text
                    text={"친구"}
                    tag={"span"}
                    cssObj={{ fontSize: "24px", fontWeight: 700 }}
                />
            </TitleLayout>
            <MenuLayout>
                {menuList.map((val, idx) => {
                    if (menu === idx) {
                        return (
                            <Menu
                                hover={true}
                                key={idx}
                                onClick={() => {
                                    handleMenu(idx);
                                }}
                            >
                                <Icon hover={true} />
                                <Text
                                    text={val}
                                    tag={"span"}
                                    cssObj={{
                                        fontSize: "17px",
                                        fontWeight: 500,
                                    }}
                                />
                            </Menu>
                        );
                    } else {
                        return (
                            <Menu
                                hover={false}
                                key={idx}
                                onClick={() => {
                                    handleMenu(idx);
                                }}
                            >
                                <Icon hover={false} />
                                <Text
                                    text={val}
                                    tag={"span"}
                                    cssObj={{
                                        fontSize: "17px",
                                        fontWeight: 500,
                                    }}
                                />
                            </Menu>
                        );
                    }
                })}
            </MenuLayout>
        </Layout>
    );
};
