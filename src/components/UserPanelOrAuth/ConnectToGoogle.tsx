import { connect, useDispatch } from 'react-redux'
import { configConnect2Firebase } from '../../const'
import firebase from 'firebase/app'
import 'firebase/auth'
import { userAuthSuccess } from '../../store/actions/userAuthSuccess'
import { memo } from 'react'

// type iResultOfConnectToGoogle = {
//   result: any
// }

const ConnectToGoole = (): JSX.Element => {
  const dispatch = useDispatch()
  firebase.initializeApp(configConnect2Firebase)
  let provider = new firebase.auth.GoogleAuthProvider()
  void firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      void console.log(result.user?.displayName)
      void dispatch(userAuthSuccess())
    })
    .catch((error) => {
      void console.log(error)
      void dispatch(userAuthSuccess())
    })

  return <h1>Происходит вход</h1>
}

export default memo(connect()(ConnectToGoole))
