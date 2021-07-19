import { memo } from 'react'
import ChatField from './ChatField/ChatField'

const ChatPage: React.FunctionComponent<unknown> = (): JSX.Element => {
  return (
    <main>
      <ChatField />
    </main>
  )
}

export default memo(ChatPage)
