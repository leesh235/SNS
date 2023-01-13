import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { imageApi } from "../../lib/index";
import { imageAction } from "../action/image";

const single = createPromise(imageAction.single, imageApi.singleUpload);
const array = createPromise(imageAction.array, imageApi.arrayUpload);
const remove = createPromise(imageAction.remove, imageApi.removeFile);

export function* imageSaga() {
    yield takeEvery(imageAction.single, single);
    yield takeEvery(imageAction.array, array);
    yield takeEvery(imageAction.remove, remove);
}
