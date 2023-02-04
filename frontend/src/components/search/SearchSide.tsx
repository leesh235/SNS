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
    width: 100%;
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

const menuList = ["모두", "게시글", "사람"];

interface Props {
    menu: number;
    handleMenu: any;
}

export const SearchSide = ({ menu, handleMenu }: Props) => {
    return (
        <Layout>
            <TitleLayout>
                <Text
                    text={"검색 결과"}
                    tag={"span"}
                    cssObj={{
                        fontSize: "24px",
                        fontWeight: 700,
                    }}
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
