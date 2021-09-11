/* eslint-disable */
import { all, takeEvery, put, call, select, take } from 'redux-saga/effects'
import { getDataQuestionOne, getDataQuestionTwo } from '../../service/getData.service'

export function* GET_DATA_QUESTION_ONE() {
  // const history = useHistory()
  const success = yield call(getDataQuestionOne)
  // console.log(success)
  if (success) {
    yield put({
      type: 'data/SET_STATE',
      payload: {
        dataQuestionOne:success
      },
    })
  }
}

export function* GET_DATA_QUESTION_TWO() {
  // const history = useHistory()
  const success = yield call(getDataQuestionTwo)
  // console.log(success)
  if (success) {
    yield put({
      type: 'data/SET_STATE',
      payload: {
        dataQuestionTwo:success
      },
    })
  }
}


export default function* rootSaga() {
  yield all([
    takeEvery('data/GET_DATA_QUESTION_ONE', GET_DATA_QUESTION_ONE),
    takeEvery('data/GET_DATA_QUESTION_TWO', GET_DATA_QUESTION_TWO),
  ])
}
