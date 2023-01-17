import styled from "../../../styles/theme-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
//functions
import { logOut } from "../../../utils/authUtils";
import { authActionCreator } from "../../../modules/action/auth";
//components
import { HoverButton } from "../button/HoverButton";

const Wrapper = styled.div`
    width: calc(200px - 30px);
    height: auto;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 4px 8px rgb(0 0 0 / 20%);
    background-color: ${(props) => props.theme.color.white};
    position: absolute;
    top: 45px;
    display: flex;
    flex-direction: column;
    > :nth-child(1) {
        border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
        padding-bottom: 8px;
        margin-bottom: 8px;
    }
`;

interface Props {
    closeFunc: any;
}

export const SeeMore = ({ closeFunc }: Props) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(authActionCreator.logout());
        logOut();
    };

    useEffect(() => {
        window.addEventListener("click", closeFunc);
        return () => {
            window.removeEventListener("click", closeFunc);
        };
    }, []);

    return (
        <Wrapper>
            <div></div>
            <div>
                <HoverButton text={"로그아웃"} onClick={handleClick} />
            </div>
        </Wrapper>
    );
};
