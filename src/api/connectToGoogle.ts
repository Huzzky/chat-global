import firebase from 'firebase/app'
import 'firebase/auth'
import { constAuthUserActions } from '../store/actions/constAuthUserActions'

const connectToGoogle = (dispatch: Function) => {
  let provider = new firebase.auth.GoogleAuthProvider()

  void firebase
    .auth()
    .signInWithPopup(provider)
    .then((result: any) => {
      const profile = result.additionalUserInfo.profile
      void constAuthUserActions.authSuccess(dispatch, profile)
    })
    .catch((_) => {
      void console.log('error')
      void constAuthUserActions.authError(dispatch)
    })
}

export { connectToGoogle }
