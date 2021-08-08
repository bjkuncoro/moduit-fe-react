/* eslint-disable */
import { all, takeEvery, put, call, select, take } from 'redux-saga/effects'
import { REHYDRATE } from 'redux-persist/lib/constants'
import { login } from '../../service/login.service'

export function* LOGIN({ payload }) {
  // const history = useHistory()
  const { email, password } = payload
  const success = yield call(login, email, password)
  console.log(success)
  if (success) {
    yield put({
      type: 'user/SET_STATE',
      payload: {
        userInfo: success,
        authenticated: true,
      },
    })
  }
  if (!success) {
    yield put({
      type: 'user/SET_STATE',
      payload: {
        loading: false,
      },
    })
  }
}


export default function* rootSaga() {
  console.log('Waiting for rehydration')
  yield take(REHYDRATE) // Wait for rehydrate to prevent sagas from running with empty store
  console.log('Rehydrated')
  yield all([
    takeEvery('user/LOGIN', LOGIN),
  ])
}
