import { takeLatest } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import { handleGetUsers } from './handlers/users.handlers';

export default function* watcherSaga() {
    yield takeLatest(UserActionTypes.FETCH_USERS, handleGetUsers);
}