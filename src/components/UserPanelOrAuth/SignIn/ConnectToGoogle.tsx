import { connect, useDispatch } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import { memo } from 'react'
import { constAuthUserActions } from '../../../store/actions/constAuthUserActions'

const ConnectToGoole = (): JSX.Element => {
  const dispatch = useDispatch()
  let provider = new firebase.auth.GoogleAuthProvider()
  void firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const userName = result.user?.displayName
      const userPhoto = result.user?.photoURL
      console.log(result.user?.photoURL, userPhoto)
      void constAuthUserActions.authSuccess(dispatch, userName, userPhoto)
    })
    .catch((_) => {
      void console.log('error')
      void constAuthUserActions.authError(dispatch)
    })

  return <h1>Происходит вход</h1>
}

export default memo(connect()(ConnectToGoole))
