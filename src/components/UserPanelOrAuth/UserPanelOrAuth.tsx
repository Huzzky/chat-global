import { memo } from 'react'
import { useSelector } from 'react-redux'
import styles from '../../assets/_UserPanelOrAuth.module.scss'
import UserPanelContainer from './UserPanel/UserPanelContainer'
import SignInContainter from './SignIn/SignInContainter'

interface IAuthReducerProp {
  authReducer: {
    userAuthOrNoAuth: boolean
  }
}

const UserPanelOrAuth: React.FunctionComponent<any> = (): JSX.Element => {
  const state = useSelector(({ authReducer }: IAuthReducerProp) => authReducer)
  return (
    <header className={styles.userPanel}>
      {state.userAuthOrNoAuth ? (
        <UserPanelContainer className={styles} />
      ) : (
        <SignInContainter styles={styles} />
      )}
    </header>
  )
}

export default memo(UserPanelOrAuth)
