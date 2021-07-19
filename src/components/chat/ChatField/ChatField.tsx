import { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffectOnce, useNetworkState } from 'react-use'
import { getDataFromCloudFirebase } from '../../../api/connectToDBStatic'
import { loadMessagesToStore } from '../../../store/actions/constMessagesLoadToStore'

// import { decode } from '../../../utils/cipherDecode'
// import { encode } from '../../../utils/cipherEncode'
import ChatFieldMessage from './ChatFieldMessage'

interface IChatReducerProp {
  chatReducer: {
    isLoadingMessages: boolean
    isErrorLoadingMessages: boolean
    dataMessages: [{}]
  }
}

const ChatField: React.FunctionComponent<unknown> = (): JSX.Element => {
  const stateNetwork: {} | any = useNetworkState()
  const dispatch = useDispatch()
  const state = useSelector(({ chatReducer }: IChatReducerProp) => chatReducer)

  useEffectOnce(() => {
    // Вызов загрузки в store и для отображения в UI
    void loadMessagesToStore(dispatch)
    void getDataFromCloudFirebase(dispatch, state.dataMessages.length)
    // void getCipherCode().then((data: string) => {
    //   console.log(encode('Vladislav', data))
    //   console.log(decode('udTC2Jba2NDY', data))
    // })
  })

  return !stateNetwork.online ? (
    <h1>Ошибка соединения</h1>
  ) : (
    <div>
      {state.isErrorLoadingMessages ? (
        <h1>Соединения нет</h1>
      ) : state.isLoadingMessages ? (
        <h1>Загрузка сообщений</h1>
      ) : (
        <ChatFieldMessage />
      )}
    </div>
  )
}

export default memo(ChatField)
