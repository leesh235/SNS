import styled from "../../styles/theme-components";

const Wrapper = styled.main`
    background-color: ${(props) => props.theme.color.white};
    max-width: 360px;
    min-height: calc(100vh - 56px);
`;

export const SideFriend = () => {
    return (
        <Wrapper>
            <div>Friends</div>
        </Wrapper>
    );
};
