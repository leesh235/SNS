import styled from "../../styles/theme-components";

const Layout = styled.span<Props>`
    width: 36px;
    height: 36px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${(props) => props.backgroundColor || ""};
    :hover {
        background-color: ${(props) => props.theme.color.lightGray};
    }
`;

interface Props {
    backgroundColor?: string;
}

export const MoreIcon = ({ backgroundColor }: Props) => {
    return (
        <Layout backgroundColor={backgroundColor}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
            >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
        </Layout>
    );
};
