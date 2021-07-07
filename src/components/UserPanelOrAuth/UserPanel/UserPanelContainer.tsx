import { memo } from 'react'
import SignOutFromAccount from '../SignOut/SignOutFromAccount'
import UserPanel from './UserPanel'

const UserPanelContainer = ({
  className,
}: {
  className: { readonly [key: string]: string }
}): JSX.Element => {
  return (
    <div className={className.userPanel__containerUserPanel}>
      <UserPanel className={className} />
      <SignOutFromAccount className={className} />
    </div>
  )
}

export default memo(UserPanelContainer)
