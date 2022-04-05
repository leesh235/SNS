import { call, put } from "redux-saga/effects";
import { ServerResponse } from "http";

export const createPromise = (type: string, pomiseCreator: any) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return function* saga(action: any) {
        try {
            const data: ServerResponse = yield call(pomiseCreator, action.data);
            yield put({ type: SUCCESS, data });
        } catch (error) {
            yield put({ type: ERROR, error: true, data: error });
        }
    };
};
