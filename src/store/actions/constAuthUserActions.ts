import {
  AUTH_USER_ERROR_WITH_GOOGLE_ACCOUNT,
  AUTH_USER_LOADING_GOOGLE_ACCOUNTS,
  AUTH_USER_SIGNOUT_FROM_ACCOUNT,
  AUTH_USER_SUCCESS_WITH_GOOGLE_ACCOUNT,
} from '../../const'

const constAuthUserActions = {
  authSuccess(dispatch: Function) {
    dispatch({ type: AUTH_USER_SUCCESS_WITH_GOOGLE_ACCOUNT })
  },
  authError(dispatch: Function) {
    dispatch({ type: AUTH_USER_ERROR_WITH_GOOGLE_ACCOUNT })
  },
  authLoading(dispatch: Function) {
    dispatch({
      type: AUTH_USER_LOADING_GOOGLE_ACCOUNTS,
    })
  },
  authSignOut(dispatch: Function) {
    dispatch({
      type: AUTH_USER_SIGNOUT_FROM_ACCOUNT,
    })
  },
}

export { constAuthUserActions }
