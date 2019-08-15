import {
  all, call, put, takeLatest, select,
} from 'redux-saga/effects';
import api from '../../services/api';
import { navigate } from '../../services/navigation';
import { Creators as LoginActions, Types as LoginTypes } from '../ducks/login';
import { Creators as RepositoriesActions, Types as RepositoriesTypes } from '../ducks/repositories';


function* login(action) {
  try {
    const { username } = action.payload;

    yield call(api.get, `/users/${username}`);

    yield put(LoginActions.loginSuccess(username));
    navigate('Repositories');
  } catch (err) {
    yield put(LoginActions.loginFailure());
  }
}

function* loadRepositories() {
  try {
    const { username } = yield select((state) => state.login);

    const { data } = yield call(api.get, `/users/${username}/repos`);

    yield put(RepositoriesActions.repositoriesSuccess(data));
  } catch (err) {
    yield put(RepositoriesActions.repositoriesFailure());
  }
}

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
    takeLatest(RepositoriesTypes.REPOSITORIES_REQUEST, loadRepositories),
  ]);
}
