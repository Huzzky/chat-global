import firebase from 'firebase'

import { constMessagesLoadToStore } from '../store/actions/constMessagesLoadToStore'

const setDataFrom = (
  userEmail: string,
  userTimeInput: number,
  userUUID4: string,
  userName: string,
  userMessage: string,
) => {
  const db = firebase.firestore()
  // запрос к базе данных
  // запрос к коллекции и добавлении данных
  db.collection('chat-global').add({
    // Имя пользователя
    userEmail: userEmail,
    // время нажатия на кнопку отправки
    userTimeInput: userTimeInput,
    // UUID
    userUUID4: userUUID4,
    // Имя пользователя
    userName: userName,
    userMessage: userMessage,
  })
}

const getDataFromCloudFirebase = (
  dispatch: Function,
  lengthDataMessages: number,
) => {
  // запрос к базе данных
  const db = firebase.firestore()
  // запрос к коллекции и начало прослушивание данных
  db.collection('chat-global')
    // лимит на 20 сообщений
    .limit(lengthDataMessages + 20)
    // начало прослушивания
    .onSnapshot((snapshot: any) => {
      // создание переменной для массива данных
      let messages: Array<object> = []
      // перебор данных в массиве
      snapshot.forEach((doc: any) => {
        // Если данных нет, то пустой массив
        if (!messages) {
          messages = []
        } else {
          // добавление в массив данных с сервера
          messages.push(doc.data())
        }
      })
      // диспатч --> экшн о появлении сообщений --> добавление в store данных
      constMessagesLoadToStore.successLoadMessages(dispatch, messages)
    })
}

export { getDataFromCloudFirebase, setDataFrom }
