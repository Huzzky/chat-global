import { memo } from 'react'
import ChatField from './ChatField/ChatField'

const ChatPage = () => {
  return (
    <main>
      <ChatField />
    </main>
  )
}

export default memo(ChatPage)
