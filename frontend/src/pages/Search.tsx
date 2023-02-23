import styled from "../styles/theme-components";
import queryString from "query-string";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchActionCreator } from "../modules/action/search";
import { SearchSide } from "../components/search/SearchSide";
import { SearchAll } from "../components/search/SearchAll";

const Wrapper = styled.main`
    background-color: ${(props) => props.theme.color.gray};
    width: 100%;
    min-height: calc(100vh - 56px);
    display: grid;
    grid-template-columns: minmax(auto, 360px) auto;
    padding-top: 56px;
    > :nth-child(2) {
        justify-items: center;
        grid-column: 2 / span 1;
    }
`;

const keys = ["all", "post", "people"];

const Search = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const query = queryString.parse(location.search);

    const [menu, setMenu] = useState<number>(0);

    const handleMenu = (id: number) => {
        setMenu(id);
    };

    useEffect(() => {
        dispatch(searchActionCreator.all({ word: `${query?.word}` }));
    }, [menu, query?.word]);

    return (
        <Wrapper>
            <SearchSide menu={menu} handleMenu={handleMenu} />
            <SearchAll menuKey={keys[menu]} menu={menu} />
        </Wrapper>
    );
};

export default Search;
