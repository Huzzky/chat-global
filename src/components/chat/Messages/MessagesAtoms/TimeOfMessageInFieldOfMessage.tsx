type ITimeOfMessageInFieldOfMessageProps = {
  timeOfSendMessage: string
}

export const TimeOfMessageInFieldOfMessage = ({
  timeOfSendMessage,
}: ITimeOfMessageInFieldOfMessageProps): JSX.Element => (
  <time>{timeOfSendMessage}</time>
)
