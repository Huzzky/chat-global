import { memo } from 'react'
import UserNameOnPanel from './UserNameOnPanel'
import UserPhotoOnPanel from './UserPhotoOnPanel'

const UserPanel = ({
  className,
}: {
  className: { readonly [key: string]: string }
}): JSX.Element => {
  return (
    <div className={className.userPanel__infoUser}>
      <UserNameOnPanel className={className.userPanel__userName} />
      <UserPhotoOnPanel className={className.userPanel__userPhoto} />
    </div>
  )
}

export default memo(UserPanel)
