import { useDispatch, useSelector } from 'react-redux'
import { connectToGoogle } from '../../../api/connectToGoogle'
import { authLoading } from '../../../store/actions/constAuthUserActions'

interface IAuthReducerProp {
  authReducer: {
    isLoading: boolean
  }
}

type InputBtnToAccountProps = {
  className: {
    readonly [key: string]: string
  }
}

export const InputBtnToAccount: React.FunctionComponent<InputBtnToAccountProps> =
  ({ className }: InputBtnToAccountProps): JSX.Element => {
    // hooks
    const dispatch = useDispatch()
    const state = useSelector(
      ({ authReducer }: IAuthReducerProp) => authReducer,
    )

    // функция загрузки флажка и аккаунта
    const _voidDispatchForLoadingAndLaunhConnectToAccGoogle: Function =
      (): any => {
        // флажок, что вход в аккаунт
        void authLoading(dispatch)
        // открывается окно с выбором аккаунтов
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
              _voidDispatchForLoadingAndLaunhConnectToAccGoogle()
            }}
          >
            Войти
          </button>
        )}
      </div>
    )
  }
