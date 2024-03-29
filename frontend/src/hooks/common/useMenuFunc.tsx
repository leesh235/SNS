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

    const ininMenu = (data: string | number) => {
        setSelected(data);
    };

    useEffect(() => {}, []);

    return { selected, handleMenuClick, ininMenu };
};
