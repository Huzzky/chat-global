import {
  LOAD_MESSAGES_TO_STORE_ERROR,
  LOAD_MESSAGES_TO_STORE_REQUEST,
  LOAD_MESSAGES_TO_STORE_SUCCESS,
} from '../../const'

const compose = (a: any, b: any) => {
  if (a.userTimeInput > b.userTimeInput) {
    return 1
  }
  if (a.userTimeInput < b.userTimeInput) {
    return -1
  } else return 0
}

const constMessagesLoadToStore = {
  loadMessagesToStore: (dispatch: Function) => {
    dispatch({
      type: LOAD_MESSAGES_TO_STORE_REQUEST,
    })
  },
  successLoadMessages: (dispatch: Function, data: Array<any>) => {
    data = data.sort((a: Array<any>, b: Array<any>) => {
      return compose(a, b)
    })
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
