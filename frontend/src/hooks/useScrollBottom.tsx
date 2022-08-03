import { useState, useEffect, useCallback, useRef } from "react";

export const useScrollBottom = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [id, setId] = useState<string>("");

    useEffect(() => {
        ref?.current?.scrollTo({ top: ref.current?.scrollHeight });
    }, [id]);

    return { ref, setId };
};
