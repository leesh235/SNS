import { useState, useEffect, useMemo, useRef, MutableRefObject } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsActionCreator } from "../../modules/action/posts";
import { ListType } from "../../types/lib/post";

interface Props extends ListType {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number;
    take?: number;
}

export const useGetPosts = ({
    root = null,
    rootMargin = "0px",
    threshold = 1,
    type = "allPosts",
    take = 4,
}: Props) => {
    const target = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    const [count, setCount] = useState<number>(0);

    const { loading, data, error } = useSelector((state: any) => {
        return {
            loading: state.post.loading,
            data: state.post[type],
            error: state.post.error,
        };
    });

    const observer = useMemo(() => {
        return new IntersectionObserver(
            (
                entries: IntersectionObserverEntry[],
                observer: IntersectionObserver
            ) => {
                if (target?.current === null) return;
                if (entries[0].isIntersecting) {
                    setCount((prev) => prev + take);
                    observer.disconnect();
                }
            },
            { root, rootMargin, threshold }
        );
    }, []);

    useEffect(() => {
        if (target?.current === null) return;

        if (count <= Object.keys(data).length) observer.observe(target.current);

        return () => {
            if (target.current !== null && observer) {
                observer.unobserve(target.current);
            }
        };
    }, [data]);

    useEffect(() => {
        dispatch(postsActionCreator[type]({ take: count }));
    }, [count]);

    return { target, loading, data, error };
};
