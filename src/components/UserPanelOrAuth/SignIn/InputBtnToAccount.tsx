import { useDispatch, useSelector } from 'react-redux'
import { connectToGoogle } from '../../../api/connectToGoogle'
import { constAuthUserActions } from '../../../store/actions/constAuthUserActions'

interface IAuthReducerProp {
  authReducer: {
    isLoading: boolean
  }
}

export const InputBtnToAccount = ({
  className,
}: {
  className: {
    readonly [key: string]: string
  }
}): JSX.Element => {
  const dispatch = useDispatch()
  const state = useSelector(({ authReducer }: IAuthReducerProp) => authReducer)
  const voidDispatchForLoadingAndLaunhConnectToAccGoogle = () => {
    void constAuthUserActions.authLoading(dispatch)
    void connectToGoogle(dispatch)
  }
  return (
    <div className={className.userPanel__containerInputBtnToConnectOrExit}>
      {state.isLoading ? (
        <h1 className={className.userPanel__h1Loaded}>Происходит вход</h1>
      ) : (
        <button
          className={className.userPanel__inputBtnToConnect}
          onClick={() => {
            void voidDispatchForLoadingAndLaunhConnectToAccGoogle()
          }}
        >
          Войти
        </button>
      )}
    </div>
  )
}
