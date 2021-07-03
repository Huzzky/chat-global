import {
  AUTH_USER_ERROR_WITH_GOOGLE_ACCOUNT,
  AUTH_USER_LOADING_GOOGLE_ACCOUNTS,
  AUTH_USER_SIGNOUT_FROM_ACCOUNT,
  AUTH_USER_SUCCESS_WITH_GOOGLE_ACCOUNT,
} from '../../const'

const initialState = {
  userAuthOrNoAuth: false,
  isLoading: false,
  userName: '',
  userPhoto: '',
}

export const authReducer = (
  state = initialState,
  {
    type,
    userName,
    userPhoto,
  }: {
    type: string
    userName: string | undefined | null
    userPhoto: string | undefined | null
  },
) => {
  switch (type) {
    case AUTH_USER_LOADING_GOOGLE_ACCOUNTS:
      return {
        ...state,
        isLoading: true,
      }
    case AUTH_USER_SUCCESS_WITH_GOOGLE_ACCOUNT:
      return {
        ...state,
        isLoading: false,
        userAuthOrNoAuth: true,
        userName: userName,
        userPhoto: userPhoto,
      }
    case AUTH_USER_SIGNOUT_FROM_ACCOUNT:
      return {
        ...state,
        isLoading: false,
        userAuthOrNoAuth: false,
      }
    case AUTH_USER_ERROR_WITH_GOOGLE_ACCOUNT:
      return {
        ...state,
        isLoading: false,
        userAuthOrNoAuth: false,
      }
    default:
      return state
  }
}
