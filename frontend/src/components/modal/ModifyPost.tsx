import styled from "../../styles/theme-components";
import { useEffect } from "react";

const Wrapper = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 900;
`;

const Box = styled.form`
    width: 500px;
    min-height: 418px;
    height: auto;
    margin: 20px;
    background-color: ${(props) => props.theme.color.white};
    border-radius: 8px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    justify-content: space-around;
    align-items: center;
`;

interface Props {
    fileList: Array<any>;
}

export const ModifyPost = ({ fileList }: Props) => {
    useEffect(() => {
        document.body.style.cssText = `
            overflow: hidden;
        `;
        return () => {
            document.body.style.cssText = ``;
        };
    }, []);

    return (
        <Wrapper>
            <Box>ModifyPost</Box>
        </Wrapper>
    );
};
