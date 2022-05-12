import styled from "../../styles/theme-components";
import { useSelector } from "react-redux";
import { Post } from "./Post";
import { People } from "./People";

const Wrapper = styled.section`
    width: calc(100% - 64px);
    height: auto;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

interface Props {
    menuKey: string;
    menu: number;
}

export const SearchAll = ({ menuKey, menu }: Props) => {
    const { loading, data, error } = useSelector(
        (state: any) => state?.search[menuKey]
    );

    return (
        <Wrapper>
            {data?.people?.length !== 0 && menu !== 1 && (
                <People people={data?.people} />
            )}
            {data?.post?.length !== 0 && menu !== 2 && (
                <Post post={data?.post} />
            )}
        </Wrapper>
    );
};
