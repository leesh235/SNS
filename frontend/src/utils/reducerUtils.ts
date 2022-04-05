export const reducerUtils = {
    initial: (inintialData: any) => ({
        loading: false,
        data: inintialData,
        error: null,
    }),
    loading: (prevState: any) => ({
        loading: false,
        data: prevState,
        error: null,
    }),
    success: (data: any) => ({
        loading: true,
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
                        keepData ? state[key].data : null
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
