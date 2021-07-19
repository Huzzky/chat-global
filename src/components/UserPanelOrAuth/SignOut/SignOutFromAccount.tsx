import { useDispatch } from 'react-redux'
import { memo } from 'react'
import { signOutFromAccount } from '../../../api/signOutFromAccount'

type ISignOutFromAccountProps = {
  className: { readonly [key: string]: string }
}

const SignOutFromAccount: React.FunctionComponent<ISignOutFromAccountProps> = ({
  className,
}: ISignOutFromAccountProps): JSX.Element => {
  const dispatch = useDispatch()

  const _signOutFromAccountFuncInFuncComp: Function = (): void => {
    void signOutFromAccount(dispatch)
  }

  return (
    <button
      className={className.userPanel__signOutFromAccountBtn}
      onClick={() => _signOutFromAccountFuncInFuncComp()}
    >
      Выйти
    </button>
  )
}

export default memo(SignOutFromAccount)
