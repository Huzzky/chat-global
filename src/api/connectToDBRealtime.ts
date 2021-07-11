import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

type IDataPush2DB = {
  date: Date
  from_user: string
  message_from_user: string
  uid_message: number
}

const getDataFromRealtimeDBMessages = () => {
  // обращение к бд
  let database = firebase.database()
  // поиск таблицы messages
  let dbRef = database.ref('messages')
  // сортировка и лимит на 20 сообщений
  let messages = dbRef.orderByKey().limitToLast(20)
  // берем сообщения, где есть значения
  messages.on('value', (snapshot) => {
    const data = snapshot.val()
    // возвращаем массив данных
    return data
  })
}

const pushMessageFromUser2Data = (data: IDataPush2DB) => {
  // обращение к бд и подключение к таблице messages
  let postListRef = firebase.database().ref('/messages')
  // добавление данных в массив данных
  let newPostRef = postListRef.push()
  // отправка данных в бд
  newPostRef.set(data)
}

export { getDataFromRealtimeDBMessages, pushMessageFromUser2Data }
