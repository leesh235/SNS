import styled from "../styles/theme-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SideMenu } from "../components/side/SideMenu";
import { Welcome } from "../components/start/Welcome";

const Wrapper = styled.main`
    background-color: ${(props) => props.theme.color.gray};
    width: 100%;
    min-height: calc(100vh - 56px);
    display: grid;
    grid-template-columns: minmax(auto, 360px) auto minmax(auto, 360px);
    padding-top: 56px;
    > :nth-child(2) {
        justify-items: center;
        grid-column: 2 / span 1;
    }
`;

const Start = () => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState<number>(1);

    const handleMenu = (id: number) => {
        navigate("/", { state: id });
    };

    useEffect(() => {}, []);

    return (
        <Wrapper>
            <SideMenu handleMenu={handleMenu} />
            <Welcome />
        </Wrapper>
    );
};

export default Start;
