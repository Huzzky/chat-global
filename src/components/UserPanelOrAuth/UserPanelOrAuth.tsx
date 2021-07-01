import { memo } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import ConnectToGoole from './ConnectToGoogle'
import { authUserAction } from '../../store/actions/authUserAction'

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
        <div>Выйти</div>
      ) : state.isLoading ? (
        <ConnectToGoole />
      ) : (
        <button
          onClick={() => {
            dispatch(authUserAction())
          }}
        >
          Войти
        </button>
      )}
    </div>
  )
}

export default memo(connect()(UserPanelOrAuth))
