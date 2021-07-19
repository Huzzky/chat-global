import { MessageOfUserText } from '../MessagesAtoms/MessageOfUserText'
import { NameOfUserInMessage } from '../MessagesAtoms/NameOfUserInMessage'
import { TimeOfMessageInFieldOfMessage } from '../MessagesAtoms/TimeOfMessageInFieldOfMessage'

type MessageFieldProps = {
  index: number
  value: {
    userMessage: string
    userName: string
    userTimeInput: number
  }
  itsUser: boolean
}

export const MessageField: React.FunctionComponent<MessageFieldProps> = ({
  index,
  value,
  itsUser,
}: MessageFieldProps): JSX.Element => (
  <div key={index}>
    <div>
      {itsUser ? (
        <NameOfUserInMessage nameOfUser={`You (${value.userName})`} />
      ) : (
        <NameOfUserInMessage nameOfUser={value.userName} />
      )}

      <TimeOfMessageInFieldOfMessage
        timeOfSendMessage={new Date(value.userTimeInput).toLocaleString()}
      />
    </div>
    <MessageOfUserText textInMessageFromUser={value.userMessage} />
  </div>
)
