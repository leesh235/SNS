import { useState, useEffect, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";

interface Props {
    list: any[];
    fetchData: Function;
}

export const useInfiniteScroll = ({ list, fetchData }: Props) => {
    const observerRef = useRef<IntersectionObserver>();
    const [standard, setStandard] = useState<HTMLDivElement | null>(null);

    const intersectionObserver = useCallback(
        (
            entries: IntersectionObserverEntry[],
            observer: IntersectionObserver
        ) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log("entry");
                    // fetchData();
                    observerRef.current?.unobserve(entry.target);
                }
            });
        },
        [list]
    );
    console.log("hooks");
    useEffect(() => {
        console.log("observer");
        observerRef.current = new IntersectionObserver(intersectionObserver);
    }, []);

    useEffect(() => {
        console.log("ref");
        if (standard) {
            observerRef?.current?.observe(standard);
        }
        return () => {
            observerRef.current && observerRef.current.disconnect();
        };
    }, [standard]);

    return { setStandard };
};
