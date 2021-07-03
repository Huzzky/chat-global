import { memo } from 'react'
import { useSelector } from 'react-redux'

interface IUserNameInStoreProp {
  authReducer: {
    userName: string | undefined | null
  }
}

const UserNameOnPanel = () => {
  const userName = useSelector(
    ({ authReducer }: IUserNameInStoreProp) => authReducer.userName,
  )
  return <p>{!userName ? 'Неизвестный' : userName}</p>
}

export default memo(UserNameOnPanel)
