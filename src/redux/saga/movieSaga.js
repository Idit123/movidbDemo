import { call, put } from "redux-saga/effects"
import { getApiCall } from "../../API/ApiCallGet"
import actionType from "../actions/actionType"

const callApi = async (category, pagecount) => {
  const { title, Response } = await getApiCall(category, pagecount)
  return { title, Response }
}

export function* getApiData(action) {
  try {
    // const result = yield call(
    //   callApi,
    //   action.payload.category,
    //   action.payload.pagcount
    // )
    // yield put({
    //   type: SET_FETCH_SUCCESS_API_DATA,
    //   payload: {
    //     pagetitle: result.title,
    //     data: result.data,
    //     pagecount: result.pagecount,
    //   },
    // })
    // console.log(`result`, result)
  } catch (error) {
    console.log(error)
  }
}

export default { getApiData }
