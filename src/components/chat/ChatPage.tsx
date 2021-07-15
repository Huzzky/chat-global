import { memo } from 'react'
import ChatField from './ChatField/ChatField'

const ChatPage = () => {
  return (
    <div>
      <ChatField />
    </div>
  )
}

export default memo(ChatPage)
