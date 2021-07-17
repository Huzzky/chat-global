import {
  LOAD_MESSAGES_TO_STORE_ERROR,
  LOAD_MESSAGES_TO_STORE_REQUEST,
  LOAD_MESSAGES_TO_STORE_SUCCESS,
} from '../../const'

const constMessagesLoadToStore = {
  loadMessagesToStore: (dispatch: Function) => {
    dispatch({
      type: LOAD_MESSAGES_TO_STORE_REQUEST,
    })
  },
  successLoadMessages: (dispatch: Function, data: Array<{}>) => {
    dispatch({
      type: LOAD_MESSAGES_TO_STORE_SUCCESS,
      dataMessages: data.reverse(),
    })
  },
  errorConnectWithDB: (dispatch: Function) => {
    dispatch({
      type: LOAD_MESSAGES_TO_STORE_ERROR,
    })
  },
}

export { constMessagesLoadToStore }
