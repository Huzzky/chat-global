type IMessageOfUserTextProps = {
  textInMessageFromUser: string
}

export const MessageOfUserText = ({
  textInMessageFromUser,
}: IMessageOfUserTextProps): JSX.Element => <h2>{textInMessageFromUser}</h2>
