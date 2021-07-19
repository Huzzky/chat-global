import {
  LOAD_MESSAGES_TO_STORE_ERROR,
  LOAD_MESSAGES_TO_STORE_REQUEST,
  LOAD_MESSAGES_TO_STORE_SUCCESS,
} from '../../const'
import { compose } from '../../utils/sortData'

const loadMessagesToStore: Function = (dispatch: Function) => {
  dispatch({
    type: LOAD_MESSAGES_TO_STORE_REQUEST,
  })
}

const successLoadMessages: Function = (
  dispatch: Function,
  data: Array<any>,
) => {
  data = data.sort((a: Array<any>, b: Array<any>) => {
    return compose(a, b)
  })
  dispatch({
    type: LOAD_MESSAGES_TO_STORE_SUCCESS,
    dataMessages: data.reverse(),
  })
}

const errorConnectWithDB: Function = (dispatch: Function) => {
  dispatch({
    type: LOAD_MESSAGES_TO_STORE_ERROR,
  })
}

export { loadMessagesToStore, errorConnectWithDB, successLoadMessages }
