import { authError, authSignOut } from '../store/actions/constAuthUserActions'
import firebase from 'firebase/app'
import 'firebase/auth'

const signOutFromAccount: Function = (dispatch: Function) => {
  void firebase
    .auth()
    .signOut()
    .then((_) => {
      void authSignOut(dispatch)
    })
    .catch((_) => {
      void authError(dispatch)
    })
}

export { signOutFromAccount }
