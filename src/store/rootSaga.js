import { all, fork } from "redux-saga/effects";

import { watchLogin } from "./auth/sagas";

export default function* rootSaga() {
  yield all([watchLogin()]);
}
