import { call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";

export const createPromise = (type: string, pomiseCreator: any) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return function* saga(action: any) {
        try {
            const { data }: AxiosResponse = yield call(
                pomiseCreator,
                action.data
            );
            yield put({ type: SUCCESS, data });
        } catch (error) {
            yield put({ type: ERROR, error: true, data: error });
        }
    };
};

export const createJWTPromise = (type: string, pomiseCreator: any) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return function* saga(action: any) {
        try {
            const { data }: AxiosResponse = yield call(
                pomiseCreator,
                action.data
            );
            localStorage.setItem("token", data.accessToken);
            yield put({ type: SUCCESS, data });
        } catch (error) {
            yield put({ type: ERROR, error: true, data: error });
        }
    };
};
