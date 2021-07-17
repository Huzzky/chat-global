import firebase from 'firebase'
const getCipherCode = () => {
  const db: any = firebase.firestore()
  let docRef: any = db.collection('cipherCode').doc('CipherCode')

  return docRef
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

export { getCipherCode }
