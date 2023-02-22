import styled from "../../styles/theme-components";
import { Link } from "react-router-dom";
import { routes } from "../../utils/routes";

const Wrapper = styled.div<Props>`
    font-size: ${(props) => props.fs};
    font-weight: ${(props) => props.fw};
    color: ${(props) => props.theme.color.seaBule};
`;

interface Props {
    fs?: string;
    fw?: string;
}

export const Logo = ({ fs, fw }: Props) => {
    return (
        <Wrapper fs={fs} fw={fw}>
            <Link to={routes.home}>facebook</Link>
        </Wrapper>
    );
};

Logo.defaultProps = {
    fs: "38px",
    fw: 900,
};
