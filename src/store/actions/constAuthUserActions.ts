import {
  AUTH_USER_ERROR_WITH_GOOGLE_ACCOUNT,
  AUTH_USER_LOADING_GOOGLE_ACCOUNTS,
  AUTH_USER_SIGNOUT_FROM_ACCOUNT,
  AUTH_USER_SUCCESS_WITH_GOOGLE_ACCOUNT,
} from '../../const'

const authSuccess: Function = (
  dispatch: Function,
  profile: {
    readonly [key: string]: string
  },
) => {
  dispatch({
    type: AUTH_USER_SUCCESS_WITH_GOOGLE_ACCOUNT,
    userName: profile.name,
    userEmail: profile.email,
    userID: profile.id,
    userPhoto: profile.picture,
  })
}

const authError: Function = (dispatch: Function) => {
  dispatch({ type: AUTH_USER_ERROR_WITH_GOOGLE_ACCOUNT })
}

const authLoading: Function = (dispatch: Function) => {
  dispatch({
    type: AUTH_USER_LOADING_GOOGLE_ACCOUNTS,
  })
}

const authSignOut: Function = (dispatch: Function) => {
  dispatch({
    type: AUTH_USER_SIGNOUT_FROM_ACCOUNT,
  })
}

export { authSuccess, authSignOut, authLoading, authError }
