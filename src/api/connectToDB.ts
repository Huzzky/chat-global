import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

type IConfigGetData = {
  apiKey: string
  authDomain: string
  databaseURL: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
  measurementId: string
}

type IDataPush2DB = {
  date: Date
  from_user: string
  message_from_user: string
  uid_message: number
}

const getDataFromCloudFirebase = (config: IConfigGetData) => {
  firebase.initializeApp(config)
  let db = firebase.firestore()

  db.collection('chat-global')
    .get()
    .then((querySnapshot: any) => {
      querySnapshot.forEach((doc: any) => {
        console.log(doc)
      })
    })
}

const getDataFromRealtimeDBMessages = (config: IConfigGetData) => {
  firebase.initializeApp(config)
  let database = firebase.database()

  let dbRef = database.ref('messages')

  // TODO сделать загрузку сообщений
  let messages = dbRef.orderByKey().limitToLast(20)
  messages.on('value', (snapshot) => {
    const data = snapshot.val()
    return data
  })
}

const pushMessageFromUser2Data = (
  config: IConfigGetData,
  data: IDataPush2DB,
) => {
  firebase.initializeApp(config)
  let postListRef = firebase.database().ref('/messages')
  let newPostRef = postListRef.push()
  newPostRef.set(data)
}

export {
  getDataFromCloudFirebase,
  getDataFromRealtimeDBMessages,
  pushMessageFromUser2Data,
}
