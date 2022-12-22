import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

interface Props {
    initValues?: any;
    onSubmit: any;
    result: any;
    validate?: any;
    stateFunc: (state: any) => {};
}

export const useForm = ({
    initValues,
    onSubmit,
    result,
    validate = null,
    stateFunc,
}: Props) => {
    const [values, setValues] = useState<any>(initValues);
    const [errors, setErrors] = useState<any>({});
    const [isLoaing, setIsLoading] = useState<boolean>(false);

    const { loading, data, error }: any = useSelector(stateFunc);

    const setOption = (name: string) => {
        const onChange: React.FormEventHandler<HTMLInputElement> = (e) => {
            setValues({ ...values, [name]: e.currentTarget.value });
        };
        return { name, onChange };
    };

    const getValue = (name: string) => {
        if (name) return values[name];
        else return values;
    };

    const setValue = (name: string, value: string | number) => {
        setValues({ ...values, [name]: value });
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (validate) setErrors(validate(values));
    };

    useEffect(() => {
        if (isLoaing) {
            if (Object.keys(errors).length === 0) {
                onSubmit(values);
                setIsLoading(false);
            }
        }
    }, [isLoaing]);

    useEffect(() => {
        if (data || error) {
            result(data, error);
        }
    }, [loading]);

    return { errors, getValue, setValue, setOption, handleSubmit };
};
