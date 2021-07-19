type ITimeOfMessageInFieldOfMessageProps = {
  timeOfSendMessage: string
}

export const TimeOfMessageInFieldOfMessage:React.FunctionComponent<ITimeOfMessageInFieldOfMessageProps> = ({
  timeOfSendMessage,
}: ITimeOfMessageInFieldOfMessageProps): JSX.Element => (
  <time>{timeOfSendMessage}</time>
)
