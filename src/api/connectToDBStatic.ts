import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
import { LOAD_MESSAGES_TO_STORE_SUCCESS } from '../const'

const setDataFrom = (
  userEmail: string,
  userTimeInput: number,
  userUUID4: string,
  userName: string,
) => {
  // запрос к базе данных
  let db = firebase.firestore()
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

async function getDataFromCloudFirebase() {
  let promise = new Promise((resolve) => {
    // запрос к базе данных
    let db = firebase.firestore()
    // запрос к коллекции и начало прослушивание данных
    db.collection('chat-global').onSnapshot((querySnapshot) => {
      // создание переменной для массива данных
      let messages: Array<{}> | undefined = []
      // перебор данных в массиве
      querySnapshot.forEach((doc) => {
        // Если данных нет, то пустой массив
        if (!messages) {
          messages = []
        } else {
          // добавление в массив данных с сервера
          messages.push(doc.data())
        }
      })
      // ! добавление данных с сервера в хранилище
      resolve(messages)
    })
  })
  return promise
}

const getDataFromCloudFirebase2 = (dispatch: Function) => {
  // запрос к базе данных
  let db = firebase.firestore()
  // запрос к коллекции и начало прослушивание данных
  db.collection('chat-global').onSnapshot((querySnapshot) => {
    // создание переменной для массива данных
    let messages: Array<{}> | undefined = []
    // перебор данных в массиве
    querySnapshot.forEach((doc) => {
      // Если данных нет, то пустой массив
      if (!messages) {
        messages = []
      } else {
        // добавление в массив данных с сервера
        messages.push(doc.data())
      }
    })
    // ! добавление данных с сервера в хранилище
    dispatch({
      type: LOAD_MESSAGES_TO_STORE_SUCCESS,
      dataMessages: messages,
    })
  })
}

export { getDataFromCloudFirebase, setDataFrom, getDataFromCloudFirebase2 }
