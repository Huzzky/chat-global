import { memo } from 'react'
import { useSelector } from 'react-redux'

interface IChatFieldReducerProp {
  chatReducer: {
    dataMessages: Array<{
      userMessage: string
      userName: string
      userTimeInput: number
    }>
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
          return (
            <div key={index}>
              <h1>{value.userMessage} + 123</h1>
            </div>
          )
        } else {
          return (
            <div key={index}>
              <div>
                <p>{value.userName}</p>
                <p>{new Date(value.userTimeInput).toLocaleString()}</p>
              </div>
              <h1>{value.userMessage}</h1>
            </div>
          )
        }
      })}
    </div>
  )
}

export default memo(ChatFieldMessage)
