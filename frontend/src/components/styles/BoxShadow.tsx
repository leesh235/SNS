import styled from "../../styles/theme-components";

const Wrapper = styled.div<StyleProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: 8px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    padding: ${(props) => props.padding};
`;

interface StyleProps {
    width?: string;
    height?: string;
    padding?: string;
}

interface Props extends StyleProps {
    children: React.ReactNode;
    tag?: keyof JSX.IntrinsicElements;
}

export const BoxShadow = ({ tag, children, width, height, padding }: Props) => {
    return (
        <Wrapper as={tag} width={width} height={height} padding={padding}>
            {children}
        </Wrapper>
    );
};

BoxShadow.defaultProps = {
    width: "100%",
    height: "auto",
    padding: "8px",
    tag: "div",
};
