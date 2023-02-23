export const reducerUtils = {
    initial: (inintialData: any) => ({
        loading: false,
        data: inintialData,
        error: null,
    }),
    loading: (prevState: any) => ({
        loading: true,
        data: prevState,
        error: null,
    }),
    success: (data: any) => ({
        loading: false,
        data,
        error: null,
    }),
    error: (error: any) => ({
        loading: false,
        data: null,
        error,
    }),
};

//reducer module
//사용하면 combineReducers에서 error발생
export const handleAsyncReducer = (
    type: string,
    key: string,
    keepData: boolean = false
) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state: any, action: any) => {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: reducerUtils.loading(
                        keepData ? state[key]?.data : null
                    ),
                };
            case SUCCESS:
                return {
                    ...state,
                    [key]: reducerUtils.success(action.data),
                };
            case ERROR:
                return {
                    ...state,
                    [key]: reducerUtils.error(action.data),
                };
            default:
                return state;
        }
    };
};

export const defaultReducer = (
    type: string,
    key: string,
    keepData: boolean = false
) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state: any, action: any) => {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    loading: true,
                    error: "",
                    [key]: keepData && state[key] ? state[key] : null,
                };
            case SUCCESS:
                return {
                    ...state,
                    loading: false,
                    [key]: action.data,
                };
            case ERROR:
                return {
                    ...state,
                    loading: false,
                    error: action.data,
                };
            default:
                return state;
        }
    };
};

export const addReducer = (
    type: string,
    key: string,
    keepData: boolean = false
) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state: any, action: any) => {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    loading: true,
                    error: "",
                    [key]: keepData && state[key] ? state[key] : null,
                };
            case SUCCESS:
                const newState = state[key];
                newState.unshift(action.data);
                return {
                    ...state,
                    loading: false,
                    [key]: newState,
                };
            // return {
            //     ...state,
            //     loading: false,
            //     [key]: {
            //         ...state[key],
            //         [action.data.id]: { ...action.data },
            //     },
            // };
            case ERROR:
                return {
                    ...state,
                    loading: false,
                    error: action.data,
                };
            default:
                return state;
        }
    };
};

export const modifyReducer = (
    type: string,
    key: string,
    keepData: boolean = false
) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state: any, action: any) => {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    loading: true,
                    error: "",
                    [key]: keepData ? state[key] : null,
                };
            case SUCCESS:
                const newState = state[key];
                newState.forEach((val: any, idx: number) => {
                    if (val.id === action.meta.id) {
                        newState[idx] = { ...newState[idx], ...action.data };
                        console.log(action.data);
                    }
                });
                console.log(newState);
                return {
                    ...state,
                    loading: false,
                    [key]: newState,
                };
            case ERROR:
                return {
                    ...state,
                    loading: false,
                    error: action.data,
                };
            default:
                return state;
        }
    };
};

export const removeReducer = (
    type: string,
    key: string,
    keepData: boolean = false
) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state: any, action: any) => {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    loading: true,
                    error: "",
                    [key]: keepData ? state[key] : null,
                };
            case SUCCESS:
                const newState: any[] = state[key];
                const result: any[] = newState.filter(
                    (val) => val.id !== action.meta.id
                );
                return {
                    ...state,
                    loading: false,
                    [key]: result,
                };
            case ERROR:
                return {
                    ...state,
                    loading: false,
                    error: action.data,
                };
            default:
                return state;
        }
    };
};
