import { useEffect, useMemo, MutableRefObject, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {
    target: MutableRefObject<HTMLDivElement | null>;

    root?: Element | null;
    rootMargin?: string;
    threshold?: number;
}

export const useObserver = ({
    target,
    root = null,
    rootMargin = "0px",
    threshold = 1,
}: Props) => {
    const [check, setCheck] = useState<boolean>(false);

    const observer = useMemo(() => {
        return new IntersectionObserver(
            (
                entries: IntersectionObserverEntry[],
                observer: IntersectionObserver
            ) => {
                if (target?.current === null) return;

                console.log("entry");
                if (!entries[0].isIntersecting) {
                    setCheck(true);
                } else {
                    setCheck(false);
                }
                observer.disconnect();
            },
            { root, rootMargin, threshold }
        );
    }, []);

    useEffect(() => {
        if (target?.current === null) return;

        observer.observe(target.current);

        return () => {
            if (target.current !== null && observer) {
                observer.unobserve(target.current);
            }
        };
    }, []);

    return { check };
};
