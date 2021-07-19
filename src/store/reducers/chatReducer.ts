import {
  LOAD_MESSAGES_TO_STORE_ERROR,
  LOAD_MESSAGES_TO_STORE_REQUEST,
  LOAD_MESSAGES_TO_STORE_SUCCESS,
} from '../../const'

const initialState: object = {
  isLoadingMessages: false,
  isErrorLoadingMessages: false,
  dataMessages: [],
}

type IChatReducerProps = {
  type: string
  dataMessages: Array<{}>
}

export const chatReducer = (
  state = initialState,
  { type, dataMessages }: IChatReducerProps,
) => {
  switch (type) {
    case LOAD_MESSAGES_TO_STORE_REQUEST:
      return {
        ...state,
        isLoadingMessages: true,
      }
    case LOAD_MESSAGES_TO_STORE_SUCCESS:
      return {
        ...state,
        isLoadingMessages: false,
        isErrorLoadingMessages: false,
        dataMessages: dataMessages,
      }
    case LOAD_MESSAGES_TO_STORE_ERROR:
      return {
        ...state,
        isLoadingMessages: false,
        isErrorLoadingMessages: true,
      }
    default:
      return state
  }
}
