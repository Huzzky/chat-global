import { memo } from 'react'
import { useSelector } from 'react-redux'

interface IChatFieldReducerProp {
  chatReducer: {
    dataMessages: Array<{}>
  }
}

const ChatFieldMessage = () => {
  const state = useSelector(
    ({ chatReducer }: IChatFieldReducerProp) => chatReducer,
  )

  return (
    <div>
      {state.dataMessages.map((value: any, index: number) => {
        return <h1 key={index}>{value.userName}</h1>
      })}
    </div>
  )
}

export default memo(ChatFieldMessage)
