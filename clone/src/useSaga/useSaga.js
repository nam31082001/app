import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { DETAIL, DETAIL_API, GET, GET_API } from "../redux/action";



function* api() {
    try {
        const res = yield axios.get('https://fakestoreapi.com/products')
        yield put(
            {
                type: GET_API,
                payload: res.data
            }

        )
    } catch (error) {
        console.log(error)
    }
}

function* detail(action){
    const id=action.payload
    try {
        const res = yield axios.get(`https://fakestoreapi.com/products/${id}`)
        yield put(
            {
                type: DETAIL_API,
                payload: res.data
            }

        )
    } catch (error) {
        console.log(error)
    }
}

export default function* rootSaga() {
    yield takeLatest(GET, api)
    yield takeLatest(DETAIL, detail)
}