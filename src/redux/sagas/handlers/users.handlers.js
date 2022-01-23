import { call, put } from 'redux-saga/effects';
import { requestGetUsers } from '../requests/users.requests';
import { fetchUsers } from '../../user/user.actions';

export function* handleGetUsers() {
    try {
        const response = yield call(requestGetUsers);
        const { data } = response;

        yield put(fetchUsers(data));
    } catch(error) {
        console.log(error)
    }
}
