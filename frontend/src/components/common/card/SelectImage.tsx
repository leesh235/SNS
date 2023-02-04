import styled from "../../../styles/theme-components";
import { useEffect, useState } from "react";
//functions
import theme from "../../../styles/theme";
//components
import { Text } from "../Text";

const Layout = styled.section`
    width: 548px;
    height: 600px;
    border-radius: 6px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Top = styled.article`
    width: 100%;
    height: 59px;
    border-bottom: 1px solid ${(props) => props.theme.color.gray};
    padding: 0 0 0 60px;
    display: grid;
    grid-template-columns: auto 60px;
    align-items: center;
    > :nth-child(1) {
        justify-self: center;
    }
`;

const CloseBtn = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 18px;
    background-color: ${(props) => props.theme.color.gray};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const MenuLayout = styled.div`
    width: 516px;
    height: 46px;
    margin: 0 16px;
    display: flex;
    flex-direction: row;
`;

const Menu = styled.div<{ color?: string }>`
    width: 258px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-bottom: 4px solid ${(props) => props.color};
`;

const ImageLayout = styled.article`
    width: 100%;
    margin-top: 16px;
`;

interface Props {
    closeFunc: any;
}

export const SelectImage = ({ closeFunc }: Props) => {
    const [clicked, setClicked] = useState<boolean>(true);

    const handleMenu = (val: boolean) => {
        setClicked(val);
    };
    useEffect(() => {}, []);

    return (
        <Layout>
            <Top>
                <Text
                    text={"사진 선택"}
                    tag={"span"}
                    cssObj={{
                        fontSize: "20px",
                        fontWeight: 700,
                    }}
                />
                <CloseBtn onClick={closeFunc}>X</CloseBtn>
            </Top>
            <MenuLayout>
                <Menu
                    onClick={() => handleMenu(true)}
                    color={clicked ? theme.color.seaBule : theme.color.white}
                >
                    <Text
                        text={"최근 사진"}
                        cssObj={{
                            fontSize: "15px",
                            fontWeight: 500,
                        }}
                    />
                </Menu>
                <Menu
                    onClick={() => handleMenu(false)}
                    color={!clicked ? theme.color.seaBule : theme.color.white}
                >
                    <Text
                        text={"사진첩"}
                        cssObj={{
                            fontSize: "15px",
                            fontWeight: 500,
                        }}
                    />
                </Menu>
            </MenuLayout>
            <ImageLayout></ImageLayout>
        </Layout>
    );
};
