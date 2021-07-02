import { connect, useDispatch } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import { memo } from 'react'
import { constAuthUserActions } from '../../../store/actions/constAuthUserActions'

const SignOutFromAccount = (): JSX.Element => {
  const dispatch = useDispatch()
  const func = (): void => {
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

  return <button onClick={() => void func()}>Выйти</button>
}

export default memo(connect()(SignOutFromAccount))
