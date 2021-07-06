import { useDispatch } from 'react-redux'
import { memo } from 'react'
import { signOutFromAccount } from '../../../api/signOutFromAccount'

const SignOutFromAccount = ({
  className,
}: {
  className: { readonly [key: string]: string }
}): JSX.Element => {
  const dispatch = useDispatch()
  const signOutFromAccountFuncInFuncComp = (): void => {
    signOutFromAccount(dispatch)
  }

  return (
    <button
      className={className.userPanel__signOutFromAccountBtn}
      onClick={() => void signOutFromAccountFuncInFuncComp()}
    >
      Выйти
    </button>
  )
}

export default memo(SignOutFromAccount)
