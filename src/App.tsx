import styles from './App.module.scss'
import UserPanelOrAuth from './components/UserPanelOrAuth/UserPanelOrAuth'
import { configConnect2Firebase } from './config'
import firebase from 'firebase/app'

firebase.initializeApp(configConnect2Firebase)

const App = (): JSX.Element => {
  return (
    <div className={styles.App}>
      <UserPanelOrAuth />
    </div>
  )
}

export default App
