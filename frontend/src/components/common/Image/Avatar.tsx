import styled from "../../../styles/theme-components";

const Wrapper = styled.img<StyleProps>`
    width: ${(props) => `${props.radius}px`};
    height: ${(props) => `${props.radius}px`};
    border-radius: ${(props) => `${props.radius / 2}px`};
`;

interface StyleProps {
    radius: number;
}

interface Props extends StyleProps {
    src: string;
}

export const Avatar = ({ src, radius }: Props) => {
    return <Wrapper src={src} radius={radius} />;
};

Avatar.defaultProps = {
    radius: 28,
};
