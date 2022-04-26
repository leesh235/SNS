import styled from "../../styles/theme-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { BoxShadow } from "../styles/BoxShadow";
import { Text } from "../common/Text";
import theme from "../../styles/theme";
import { routes } from "../../utils/routes";

const Wrapper = styled.div`
    width: calc(100%-16px);
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

const FlexWrapper = styled.div`
    width: 100%;
    height: auto;
`;

const MenuWrapper = styled.ul`
    width: 100%;
    height: 60px;
    margin: 8px 0 16px 0;
    display: flex;
    flex-direction: row;
`;

const Menu = styled.li<{ click: boolean }>`
    width: 82px;
    height: calc(100%-3px);
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

const ImageWrapper = styled.div`
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
        (state: any) => state?.image?.allImages
    );

    const [menu, setMenu] = useState<number>(0);

    const handleMenu = (id: number) => {
        setMenu(id);
    };

    useEffect(() => {}, [loading]);

    return (
        <BoxShadow tag={"article"}>
            <Wrapper>
                <FlexWrapper>
                    <Text
                        text={"사진"}
                        fs={"20px"}
                        fw={700}
                        lh={"24px"}
                        width={"auto"}
                    />
                </FlexWrapper>
                <MenuWrapper>
                    {menuList.map((val, idx) => {
                        if (idx === menu) {
                            return (
                                <Menu
                                    click={true}
                                    key={idx}
                                    onClick={() => {
                                        handleMenu(idx);
                                    }}
                                >
                                    <Text
                                        text={val}
                                        fs={"15px"}
                                        fw={600}
                                        lh={"20pxx"}
                                        width={"100%"}
                                        ta={"center"}
                                        fc={theme.color.seaBule}
                                    />
                                </Menu>
                            );
                        } else {
                            return (
                                <Menu
                                    click={false}
                                    key={idx}
                                    onClick={() => {
                                        handleMenu(idx);
                                    }}
                                >
                                    <Text
                                        text={val}
                                        fs={"15px"}
                                        fw={600}
                                        lh={"20pxx"}
                                        width={"100%"}
                                        ta={"center"}
                                        fc={theme.color.lightBlack}
                                    />
                                </Menu>
                            );
                        }
                    })}
                </MenuWrapper>
                <ImageWrapper>
                    {data?.map((val: any, idx: number) => {
                        return (
                            <Link
                                key={idx}
                                to={{ pathname: `${routes.detail}${val.id}` }}
                            >
                                <Image src={val.image} />
                            </Link>
                        );
                    })}
                </ImageWrapper>
            </Wrapper>
        </BoxShadow>
    );
};
