import firebase from 'firebase/app'
import 'firebase/auth'
import { constAuthUserActions } from '../store/actions/constAuthUserActions'

const connectToGoogle = (dispatch: Function) => {
  // подключение к Google провайдеру
  let provider = new firebase.auth.GoogleAuthProvider()

  // вызов функции запроса
  void firebase
    // авторизация
    .auth()
    // вход с помощью провайдера
    .signInWithPopup(provider)
    // после обработка аккаунта и диспатч экшена для отправки данных в хранилище
    .then((result: any) => {
      // берем данные пользователя
      const profile = result.additionalUserInfo.profile
      // диспатч экшена с данными
      void constAuthUserActions.authSuccess(dispatch, profile)
    })
    .catch((_) => {
      void console.log('error')
      void constAuthUserActions.authError(dispatch)
    })
}

export { connectToGoogle }
