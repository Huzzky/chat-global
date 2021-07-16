import { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffectOnce, useNetworkState } from 'react-use'
import { getDataFromCloudFirebase } from '../../../api/connectToDBStatic'

import { constMessagesLoadToStore } from '../../../store/actions/constMessagesLoadToStore'
import ChatFieldMessage from './ChatFieldMessage'

interface IChatReducerProp {
  chatReducer: {
    isLoadingMessages: boolean
    isErrorLoadingMessages: boolean
  }
}

const ChatField = (): JSX.Element => {
  const stateNetwork: {} | any = useNetworkState()
  const dispatch = useDispatch()
  const state = useSelector(({ chatReducer }: IChatReducerProp) => chatReducer)
  useEffectOnce(() => {
    // Вызов загрузки в store и для отображения в UI
    void constMessagesLoadToStore.loadMessagesToStore(dispatch)
    void getDataFromCloudFirebase(dispatch)
  })

  return !stateNetwork.online ? (
    <h1>Ошибка соединения</h1>
  ) : (
    <div>
      {state.isErrorLoadingMessages ? (
        <h1>Соединения нет</h1>
      ) : state.isLoadingMessages ? (
        <h1>Загрузка</h1>
      ) : (
        <ChatFieldMessage />
      )}
    </div>
  )
}

export default memo(ChatField)
