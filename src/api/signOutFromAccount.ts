import { constAuthUserActions } from '../store/actions/constAuthUserActions'
import firebase from 'firebase/app'
import 'firebase/auth'

const signOutFromAccount = (dispatch: Function) => {
  void firebase
    .auth()
    .signOut()
    .then((_) => {
      void constAuthUserActions.authSignOut(dispatch)
    })
    .catch((_) => {
      void constAuthUserActions.authError(dispatch)
    })
}

export { signOutFromAccount }
