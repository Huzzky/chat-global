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
  let database = firebase.database()

  let dbRef = database.ref('messages')
  let messages = dbRef.orderByKey().limitToLast(20)
  messages.on('value', (snapshot) => {
    const data = snapshot.val()
    return data
  })
}

const pushMessageFromUser2Data = (data: IDataPush2DB) => {
  let postListRef = firebase.database().ref('/messages')
  let newPostRef = postListRef.push()
  newPostRef.set(data)
}

export { getDataFromRealtimeDBMessages, pushMessageFromUser2Data }
