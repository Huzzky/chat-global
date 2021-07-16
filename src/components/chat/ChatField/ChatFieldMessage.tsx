import { memo } from 'react'
import { useSelector } from 'react-redux'

interface IChatFieldReducerProp {
  chatReducer: {
    dataMessages: Array<{}>
  }
}

interface IUserReducerProp {
  authReducer: {
    userEmail: string
    userID: string
  }
}

const ChatFieldMessage = () => {
  const stateMessages = useSelector(
    ({ chatReducer }: IChatFieldReducerProp) => chatReducer,
  )
  const stateUser = useSelector(
    ({ authReducer }: IUserReducerProp) => authReducer,
  )

  return (
    <div>
      {stateMessages.dataMessages.map((value: any, index: number) => {
        if (
          value.userEmail === stateUser.userEmail &&
          value.userUUID4 === stateUser.userID
        ) {
          return <h1 key={index}>{value.userName} + 123</h1>
        } else {
          return <h1 key={index}>{value.userName}</h1>
        }
      })}
    </div>
  )
}

export default memo(ChatFieldMessage)
