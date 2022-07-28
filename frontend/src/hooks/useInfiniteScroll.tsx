import { useState, useEffect, useMemo, MutableRefObject } from "react";

interface Props {
    target: MutableRefObject<HTMLDivElement | null>;

    root?: Element | null;
    rootMargin?: string;
    threshold?: number;

    pageSize: number;
    targetArray: Array<any>;
    endPoint?: number;
}

export const useInfiniteScroll = ({
    target,
    root = null,
    rootMargin = "0px",
    threshold = 1,
    pageSize,
    targetArray,
}: Props) => {
    const [count, setCount] = useState<number>(0);

    const observer = useMemo(() => {
        return new IntersectionObserver(
            (
                entries: IntersectionObserverEntry[],
                observer: IntersectionObserver
            ) => {
                if (target?.current === null) return;

                if (entries[0].isIntersecting) {
                    console.log("entry");
                    setCount((prev) => prev + 1);
                    observer.disconnect();
                }
            },
            { root, rootMargin, threshold }
        );
    }, []);

    useEffect(() => {
        if (target?.current === null) return;

        if (pageSize * (count + 1) <= targetArray.length)
            observer.observe(target.current);

        return () => {
            if (target.current !== null && observer) {
                observer.unobserve(target.current);
            }
        };
    }, [count, targetArray]);

    return { count, setCount };
};
