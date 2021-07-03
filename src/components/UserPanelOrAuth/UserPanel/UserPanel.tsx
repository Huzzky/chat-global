import { memo } from 'react'
import UserNameOnPanel from './UserNameOnPanel'
import UserPhotoOnPanel from './UserPhotoOnPanel'

const UserPanel = () => {
  return (
    <div className="user-panel__info-user">
      <UserNameOnPanel />
      <UserPhotoOnPanel />
    </div>
  )
}

export default memo(UserPanel)
