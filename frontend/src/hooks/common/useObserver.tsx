import { useEffect, useState, useRef } from "react";

interface Props {
    height: number;
}

export const useObserver = ({ height }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const [check, setCheck] = useState<boolean>(false);

    const handleOnScroll = (e: any) => {
        if (e.currentTarget.window.pageYOffset > height) setCheck(true);
        else setCheck(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleOnScroll);
        return () => {
            window.removeEventListener("scroll", handleOnScroll);
        };
    }, []);

    return { ref, check };
};
