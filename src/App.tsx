import styles from './App.module.scss'
import UserPanelOrAuth from './components/UserPanelOrAuth/UserPanelOrAuth'
import { configConnect2Firebase } from './config'
import firebase from 'firebase/app'
import ChatPage from './components/chat/ChatPage'

firebase.initializeApp(configConnect2Firebase)

const App: React.FunctionComponent<any> = (): JSX.Element => {
  return (
    <div className={styles.App}>
      <UserPanelOrAuth />
      <ChatPage />
    </div>
  )
}

export default App
