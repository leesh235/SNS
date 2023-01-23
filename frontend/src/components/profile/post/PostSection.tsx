import styled from "../../../styles/theme-components";
import { useState } from "react";
//functions
import theme from "../../../styles/theme";
//components
import { BoxShadow } from "../../common/styles/BoxShadow";
import { IconButton } from "../../common/button/IconButton";
import { Text } from "../../common/Text";
import { ListIcon, ListIconC } from "../../../assets/icon/ListIcon";
import { GridIcon, GridIconC } from "../../../assets/icon/GridIcon";
import { PostGridList } from "./PostGridList";
import { PostList } from "../../main/PostList";

const GridLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: flex-end;
    height: 40px;
    padding: 0 14px;
    border-top: 1px solid ${(props) => props.theme.color.lightGray};
`;

const FlexLayout = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 54px;
    padding: 0 14px;
`;

const ButtonLayout = styled.div<{ color: string }>`
    border-bottom: 3px solid ${(props) => props.color};
`;

const menuList = ["리스트 보기", "그리드 보기"];

interface Props {}

export const PostSection = ({}: Props) => {
    const [menu, setMenu] = useState<number>(0);

    const handleOnClick = (id: number) => {
        setMenu(id);
    };

    return (
        <>
            <BoxShadow padding={"0px"}>
                <FlexLayout>
                    <Text
                        text={"게시물"}
                        cssObj={{
                            fontSize: "20px",
                            fontWeight: 700,
                        }}
                    />
                </FlexLayout>
                <GridLayout>
                    {menuList.map((val, idx) => {
                        if (menu === idx) {
                            return (
                                <ButtonLayout
                                    key={idx}
                                    color={theme.color.seaBule}
                                    onClick={() => {
                                        handleOnClick(idx);
                                    }}
                                >
                                    <IconButton
                                        width={"100%"}
                                        height={"32px"}
                                        hover={false}
                                    >
                                        {idx === 0 ? (
                                            <ListIconC />
                                        ) : (
                                            <GridIconC />
                                        )}
                                        <Text
                                            text={val}
                                            tag={"span"}
                                            cssObj={{
                                                width: "auto",
                                                fontSize: "15px",
                                                fontWeight: 600,
                                                fontColor: theme.color.seaBule,
                                            }}
                                        />
                                    </IconButton>
                                </ButtonLayout>
                            );
                        } else {
                            return (
                                <ButtonLayout
                                    key={idx}
                                    color={theme.color.white}
                                    onClick={() => {
                                        handleOnClick(idx);
                                    }}
                                >
                                    <IconButton width={"100%"} height={"32px"}>
                                        {idx === 0 ? (
                                            <ListIcon />
                                        ) : (
                                            <GridIcon />
                                        )}
                                        <Text
                                            text={val}
                                            tag={"span"}
                                            cssObj={{
                                                width: "auto",
                                                fontSize: "15px",
                                                fontWeight: 600,
                                                fontColor:
                                                    theme.color.lightBlack,
                                            }}
                                        />
                                    </IconButton>
                                </ButtonLayout>
                            );
                        }
                    })}
                </GridLayout>
            </BoxShadow>
            {menu === 0 ? <PostList /> : <PostGridList />}
        </>
    );
};
