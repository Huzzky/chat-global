import { memo } from 'react'
import { useEffectOnce } from 'react-use'
import { setDataFrom } from '../../api/connectToDBStatic'

const ChatPage = () => {
  useEffectOnce(() => {
    // setDataFrom()
  })
  return <div></div>
}

export default memo(ChatPage)
