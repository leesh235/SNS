import styled from "../../../styles/theme-components";

const Wrapper = styled.img<StyleProps>`
    width: ${(props) => `${props.radius}px`};
    height: ${(props) => `${props.radius}px`};
    border-radius: ${(props) => `${props.radius / 2}px`};
    margin: ${(props) => props.margin};
`;

interface StyleProps {
    radius: number;
    margin?: string;
}

interface Props extends StyleProps {
    src: string;
}

export const Avatar = ({ src, radius, margin }: Props) => {
    return <Wrapper src={src} radius={radius} margin={margin} />;
};

Avatar.defaultProps = {
    radius: 28,
    margin: "0",
};
