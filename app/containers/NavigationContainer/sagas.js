// import { take, call, put, select } from 'redux-saga/effects';

import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {
  REQUEST_TOPICS,
  requestTopicsSucceeded,
  requestTopicsFailed,
} from './actions';

export function fetchTopicsFromServer() {
  console.log('fetching');
  return fetch('http://localhost:3000/api/topics').then(
    response => response.JSON,
  );
}

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSucceeded(topics));
  } catch (e) {
    yield put(requestTopicsFailed(e.message));
  }
}

// Individual exports for testing
export function* fetchTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

// All sagas to be loaded
export default [fetchTopicsSaga];
