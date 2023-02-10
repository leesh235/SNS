import { useState, useEffect } from "react";

interface Props {
    defaultValue: string | number;
}

export const useMenuFunc = ({ defaultValue = "" }: Props) => {
    const [selected, setSelected] = useState<string | number>(defaultValue);

    const handleMenuClick: React.MouseEventHandler = (e) => {
        const { id } = e.currentTarget as any;
        setSelected(id);
    };

    useEffect(() => {}, []);

    return { selected, handleMenuClick };
};
