import { memo } from 'react'
import { useSelector } from 'react-redux'
import { MessageField } from '../Messages/MessageField/MessageField'

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

const ChatFieldMessage: React.FunctionComponent<unknown> = () => {
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
          return <MessageField index={index} value={value} itsUser={true} />
        } else {
          return <MessageField index={index} value={value} itsUser={false} />
        }
      })}
    </div>
  )
}

export default memo(ChatFieldMessage)
