import styled from "../../../styles/theme-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
//functions
import theme from "../../../styles/theme";
import { routes } from "../../../utils/routes";
//components
import { Text } from "../../common/Text";

const Layout = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    padding: 10px;
    ${(props) =>
        props.theme.media.mobileU(`
            width: 100%;
    `)}
    ${(props) =>
        props.theme.media.mobileD(`
            width: 90vw;         
        `)}
`;

const FlexLayout = styled.div`
    width: 100%;
    height: auto;
`;

const MenuLayout = styled.ul`
    width: 100%;
    height: 60px;
    margin: 8px 0 16px 0;
    display: flex;
    flex-direction: row;
`;

const Menu = styled.li<{ click: boolean }>`
    width: 82px;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: ${(props) => (props.click ? "0" : "6")}px;
    border-bottom: 3px solid
        ${(props) =>
            props.click ? props.theme.color.seaBule : props.theme.color.white};
    :hover {
        background-color: ${(props) =>
            !props.click
                ? props.theme.color.lightGray
                : props.theme.color.white};
    }
`;

const ImageLayout = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 8px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 10px;
`;

const Image = styled.img`
    width: 100%;
    height: 162px;
    border-radius: 6px;
    cursor: pointer;
`;

const menuList = ["내 사진", "사진첩"];

export const ImageCard = () => {
    const { loading, data, error } = useSelector(
        (state: any) => state?.profile?.allImage
    );

    const [menu, setMenu] = useState<number>(0);

    const handleMenu = (id: number) => {
        setMenu(id);
    };

    useEffect(() => {}, [loading]);

    return (
        <Layout>
            <FlexLayout>
                <Text
                    text={"사진"}
                    tag={"span"}
                    cssObj={{
                        fontSize: "20px",
                        fontWeight: 700,
                    }}
                />
            </FlexLayout>
            <MenuLayout>
                {menuList.map((val, idx) => (
                    <Menu
                        click={idx === menu}
                        key={idx}
                        onClick={() => {
                            handleMenu(idx);
                        }}
                    >
                        <Text
                            text={val}
                            cssObj={{
                                fontSize: "15px",
                                fontWeight: 600,
                                fontColor:
                                    idx === menu
                                        ? theme.color.seaBule
                                        : theme.color.lightBlack,
                            }}
                        />
                    </Menu>
                ))}
            </MenuLayout>
            <ImageLayout>
                {data?.map((val: any, idx: number) => {
                    return (
                        <Link
                            key={val.id}
                            to={{
                                pathname: `${routes.detail}${val.postId}`,
                            }}
                        >
                            <Image src={val.url} />
                        </Link>
                    );
                })}
            </ImageLayout>
        </Layout>
    );
};
