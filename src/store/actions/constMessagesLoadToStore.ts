import { getDataFromCloudFirebase } from '../../api/connectToDBStatic'
import {
  LOAD_MESSAGES_TO_STORE_REQUEST,
  LOAD_MESSAGES_TO_STORE_SUCCESS,
  LOAD_MESSAGES_TO_STORE_ERROR,
} from '../../const'

const constMessagesLoadToStore = {
  loadMessagesToStore: (dispatch: Function) => {
    dispatch({
      type: LOAD_MESSAGES_TO_STORE_REQUEST,
    })
    getDataFromCloudFirebase()
      .then((data) => {
        dispatch({
          type: LOAD_MESSAGES_TO_STORE_SUCCESS,
          dataMessages: data,
        })
      })
      .catch((_) => {
        dispatch({
          type: LOAD_MESSAGES_TO_STORE_ERROR,
        })
      })
  },
}

export { constMessagesLoadToStore }
