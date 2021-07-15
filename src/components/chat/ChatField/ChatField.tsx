import { memo } from 'react'
import { useEffectOnce } from 'react-use'
import { useDispatch } from 'react-redux'
// import { constMessagesLoadToStore } from '../../../store/actions/constMessagesLoadToStore'
import { getDataFromCloudFirebase2 } from '../../../api/connectToDBStatic'
const ChatField = () => {
  const dispatch = useDispatch()
  useEffectOnce(() => {
    // constMessagesLoadToStore.loadMessagesToStore(dispatch)
    getDataFromCloudFirebase2(dispatch)
  })
  return <div></div>
}

export default memo(ChatField)
