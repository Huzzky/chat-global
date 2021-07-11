import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

const getDataFromCloudFirebase = () => {
  let db = firebase.firestore()

  db.collection('chat-global')
    .get()
    .then((querySnapshot: any) => {
      querySnapshot.forEach((doc: any) => {
        console.log(doc)
      })
    })
}

export { getDataFromCloudFirebase }
