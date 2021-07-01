import styles from './App.module.scss'
import UserPanelOrAuth from './components/UserPanelOrAuth/UserPanelOrAuth'

const App = (): JSX.Element => {
  return (
    <div className={styles.App}>
      <UserPanelOrAuth />
    </div>
  )
}

export default App
