import { all } from "redux-saga/effects";
import data from '../redux/data'

export default function* rootSagas(){
    yield all([
        data()
    ])
}