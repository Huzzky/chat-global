import firebase from 'firebase/app'
import 'firebase/auth'
import { authError, authSuccess } from '../store/actions/constAuthUserActions'

const connectToGoogle: Function = (dispatch: Function) => {
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
      void authSuccess(dispatch, profile)
    })
    .catch((_) => {
      void console.error('Что-то не так с вашим аккаунтом или со связью')
      void authError(dispatch)
    })
}

export { connectToGoogle }
