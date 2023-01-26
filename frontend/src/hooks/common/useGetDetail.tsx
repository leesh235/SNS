import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ListType } from "../../types/lib/post";

interface Props extends ListType {
    id: number;
}
export const useGetDetail = ({ type = "allPosts", id }: Props) => {
    const { loading, data, error } = useSelector(
        (state: any) => state.post[type]
    );

    return { post: data && data[id] };
};
