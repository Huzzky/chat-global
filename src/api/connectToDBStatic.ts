import 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
import firebase from 'firebase'

import { constMessagesLoadToStore } from '../store/actions/constMessagesLoadToStore'

const setDataFrom = (
  userEmail: string,
  userTimeInput: number,
  userUUID4: string,
  userName: string,
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
  })
}

const getCipherCode = () => {
  const db: any = firebase.firestore()
  let docRef: any = db.collection('cipherCode').doc('CipherCode')

  docRef
    .get()
    .then((doc: any) => {
      if (doc.exists) {
        return doc.data().cipher
      } else {
        console.log('СРОЧНО НАПИШИТЕ РАЗРАБОТЧКУ')
        return 'Error 404'
      }
    })
    .catch((error: string) => {
      console.log('СРОЧНО НАПИШИТЕ РАЗРАБОТЧКУ')
      return 'Error 404'
    })
}

const getDataFromCloudFirebase = (dispatch: Function) => {
  // запрос к базе данных
  const db = firebase.firestore()
  // запрос к коллекции и начало прослушивание данных
  db.collection('chat-global').onSnapshot((snapshot: any) => {
    if (snapshot.metadata.fromCache === true) {
      constMessagesLoadToStore.errorConnectWithDB(dispatch)
    } else if (snapshot.metadata.fromCache === false) {
      // создание переменной для массива данных
      let messages: Array<{}> | undefined = []
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
      constMessagesLoadToStore.successLoadMessages(dispatch, messages)

      // ! добавление данных с сервера в хранилище
    }
  })
}

export { getDataFromCloudFirebase, setDataFrom, getCipherCode }
