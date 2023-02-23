import {
    useCallback,
    useEffect,
    useMemo,
    MutableRefObject,
    useState,
} from "react";

interface Props {
    target: MutableRefObject<HTMLDivElement | null>;
}

export const useResizeEl = ({ target }: Props) => {
    const [isResize, setIsResize] = useState<boolean>(false);

    const obserber = useMemo(() => {
        return new ResizeObserver((entries, observer) => {
            entries.forEach((val) => {
                if (val.contentRect.height > window.innerHeight) {
                    setIsResize(true);
                    observer.disconnect();
                }
            });
        });
    }, []);

    useEffect(() => {
        if (!target.current) return;
        obserber.observe(target.current);

        return () => {
            if (target.current) obserber.unobserve(target.current);
        };
    }, [target, isResize]);

    return { isResize };
};
