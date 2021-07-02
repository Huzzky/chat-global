import { AUTH_USER_ERROR_WITH_GOOGLE_ACCOUNT } from '../../const'

const userActionWithAuthOrSignOut = (typeAuth: string) => {
  return (dispatch: Function) => {
    switch (typeAuth) {
      case 'SignOut':
        void dispatch({
          type: 'SignOut',
        })
        break
      case 'SignIn':
        void dispatch({
          type: 'Load',
        })
        break
      case 'Okey':
        void dispatch({
          type: 'Okey',
        })
        break
      case 'Error':
        void dispatch({
          type: AUTH_USER_ERROR_WITH_GOOGLE_ACCOUNT,
        })
        break
      default:
        void dispatch({
          type: 'Error',
        })
    }
  }
}

export { userActionWithAuthOrSignOut }
