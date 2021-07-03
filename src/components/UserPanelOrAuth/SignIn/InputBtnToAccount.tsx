import { useDispatch } from 'react-redux'
import { constAuthUserActions } from '../../../store/actions/constAuthUserActions'

export const InputBtnToAccount = ({
  classNameForStyle,
}: {
  classNameForStyle: {
    readonly [key: string]: string
  }
}): JSX.Element => {
  const dispatch = useDispatch()
  console.log(classNameForStyle)
  return (
    <div className={classNameForStyle.userPanel__containerInputBtnToConnect}>
      <button
        className={classNameForStyle.userPanel__inputBtnToConnect}
        onClick={() => {
          void constAuthUserActions.authLoading(dispatch)
        }}
      >
        Войти
      </button>
    </div>
  )
}
