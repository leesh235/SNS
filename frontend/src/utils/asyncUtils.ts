import { call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";

export const createPromise = (type: string, pomiseCreator: any) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return function* saga(action: any) {
        try {
            const meta = action.meta;
            const { data }: AxiosResponse = yield call(
                pomiseCreator,
                action.data
            );
            yield put({ type: SUCCESS, data, meta });
        } catch (error) {
            yield put({ type: ERROR, error: true, data: error });
        }
    };
};

//작성, 삭제 -> 새 리스트 받아오기
export const createMultiPromise = (
    type: string,
    pomiseCreator: any,
    pomiseCreator2: any
) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return function* saga(action: any) {
        try {
            const res1: AxiosResponse = yield call(pomiseCreator, action.data);
            yield setTimeout(() => {}, 1000);
            const res2: AxiosResponse = yield call(pomiseCreator2);
            yield put({ type: SUCCESS, data: res2.data });
        } catch (error) {
            yield put({ type: ERROR, error: true, data: error });
        }
    };
};

export const createMetaPromise = (type: string, pomiseCreator: any) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return function* saga(action: any) {
        try {
            const meta = action.meta;
            const { data }: AxiosResponse = yield call(
                pomiseCreator,
                action.data
            );
            yield put({ type: SUCCESS, data: data, meta });
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
            yield put({ type: SUCCESS, data });
            yield localStorage.setItem("token", data.accessToken);
        } catch (error) {
            yield put({ type: ERROR, error: true, data: error });
        }
    };
};
