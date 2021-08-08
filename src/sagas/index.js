import { all } from "redux-saga/effects";
import user from '../redux/user'

export default function* rootSagas(){
    yield all([
        user(),
    ])
}