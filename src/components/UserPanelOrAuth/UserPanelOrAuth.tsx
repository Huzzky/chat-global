import { memo } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import ConnectToGoole from './SignIn/ConnectToGoogle'
import SignOutFromAccount from './SignOut/SignOutFromAccount'
import { constAuthUserActions } from '../../store/actions/constAuthUserActions'

interface IAuthReducerProp {
  authReducer: {
    userAuthOrNoAuth: boolean
    isLoading: boolean
  }
}

const UserPanelOrAuth = (): JSX.Element => {
  const dispatch = useDispatch()
  const state = useSelector(({ authReducer }: IAuthReducerProp) => authReducer)
  return (
    <div>
      {state.userAuthOrNoAuth ? (
        <SignOutFromAccount />
      ) : state.isLoading ? (
        <ConnectToGoole />
      ) : (
        <button
          onClick={() => {
            void constAuthUserActions.authLoading(dispatch)
          }}
        >
          Войти
        </button>
      )}
    </div>
  )
}

export default memo(connect()(UserPanelOrAuth))
