import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

// const getDataFromCloudFirebase = () => {
//   // обращение к статичной бд
//   let db = firebase.firestore()
//   // поиск коллекции chat-global в бд
//   db.collection('chat-global')
//     // запрос
//     .get()
//     // после получения обработка
//     .then((querySnapshot: any) => {
//       console.log(querySnapshot.exists)
//       // вывод
//       querySnapshot.forEach((doc: any) => {
//         if (doc.exists) {
//           console.log(doc.data())
//         } else {
//           console.log('123')
//         }
//       })
//     })
// }

const setDataFrom = () => {
  let db = firebase.firestore()
  db.collection('chat-global').add({
    userEmail: 'vladislav.bychkov01@gmail.com',
    userTimeInput: 1626044129151,
    userUUID4: '6afbbee9-3249-4a12-b44f-86484a1481fa',
  })
}

const getDataFromCloudFirebase = () => {
  let db = firebase.firestore()
  db.collection('chat-global').onSnapshot((querySnapshot) => {
    let messages: Array<any> = []
    querySnapshot.forEach((doc) => {
      messages.push(doc.data())
    })
    console.log(messages)
  })
}

export { getDataFromCloudFirebase, setDataFrom }
