import { memo } from 'react'
import { useSelector } from 'react-redux'

interface IUserNameInStoreProp {
  authReducer: {
    userName: string | undefined | null
  }
}

const UserNameOnPanel = ({ className }: { className: string }) => {
  const userName = useSelector(
    ({ authReducer }: IUserNameInStoreProp) => authReducer.userName,
  )
  return <p className={className}>{!userName ? 'Неизвестный' : userName}</p>
}

export default memo(UserNameOnPanel)
