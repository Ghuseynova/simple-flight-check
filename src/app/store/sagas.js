import { call, put, takeLatest, all } from 'redux-saga/effects';

import firebase from '../../firebase';
import Api from '../api';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  FETCH_FLIGTS_REQUEST,
  FETCH_FLIGTS_SUCCESS,
  FETCH_FLIGTS_ERROR,
} from './types';

function* login(action) {
  const { email, password } = action.user;
  const auth = firebase.auth();

  try {
    const result = yield call(
      [auth, auth.createUserWithEmailAndPassword],
      email,
      password
    );

    yield put({ type: LOGIN_SUCCESS, user: action.user });
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      const result = yield call(
        [auth, auth.signInWithEmailAndPassword],
        email,
        password
      );
      yield put({ type: LOGIN_SUCCESS, user: action.user });
    } else {
      const error_message = { code: error.code, message: error.message };

      yield put({ type: LOGIN_ERROR, error: error_message });
    }
  }
}

function* logout() {
  try {
    const auth = firebase.auth();
    const result = yield call([auth, auth.signOut]);

    yield put({ type: LOGOUT_SUCCESS, payload: '' });
  } catch (error) {
    const error_message = { code: error.code, message: error.message };

    yield put({ type: LOGOUT_ERROR, error: error_message });
  }
}

function* fetchFlights(action) {
  const { date } = action;
  try {
    const flights = yield call(Api.fetchFlights, date);

    yield put({ type: FETCH_FLIGTS_SUCCESS, flights: flights });
  } catch (error) {
    const error_message = { code: error.code, message: error.message };

    yield put({ type: FETCH_FLIGTS_ERROR, error: error_message });
  }
}

function* rootSaga() {
  yield all([
    takeLatest(LOGIN_REQUEST, login),
    takeLatest(LOGOUT_REQUEST, logout),
    takeLatest(FETCH_FLIGTS_REQUEST, fetchFlights),
  ]);
}

export default rootSaga;
