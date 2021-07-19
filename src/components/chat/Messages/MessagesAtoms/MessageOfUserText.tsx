type IMessageOfUserTextProps = {
  textInMessageFromUser: string
}

export const MessageOfUserText:React.FunctionComponent<IMessageOfUserTextProps> = ({
  textInMessageFromUser,
}: IMessageOfUserTextProps): JSX.Element => <h2>{textInMessageFromUser}</h2>
