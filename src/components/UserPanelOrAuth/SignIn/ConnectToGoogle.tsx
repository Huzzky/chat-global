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
      void console.log(result.user?.displayName)
      void constAuthUserActions.authSuccess(dispatch)
    })
    .catch((_) => {
      void console.log('error')
      void constAuthUserActions.authError(dispatch)
    })

  return <h1>Происходит вход</h1>
}

export default memo(connect()(ConnectToGoole))
