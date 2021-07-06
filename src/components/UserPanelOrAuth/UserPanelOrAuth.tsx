import { memo } from 'react'
import { useSelector } from 'react-redux'
import SignOutFromAccount from './SignOut/SignOutFromAccount'
import { InputBtnToAccount } from './SignIn/InputBtnToAccount'
import UserPanel from './UserPanel/UserPanel'
import styles from '../../assets/_UserPanelOrAuth.module.scss'

interface IAuthReducerProp {
  authReducer: {
    userAuthOrNoAuth: boolean
  }
}

const UserPanelOrAuth = (): JSX.Element => {
  const state = useSelector(({ authReducer }: IAuthReducerProp) => authReducer)
  return (
    <div className={styles.userPanel}>
      {state.userAuthOrNoAuth ? (
        <div className={styles.userPanel__containerUserPanel}>
          <UserPanel className={styles} />
          <SignOutFromAccount className={styles} />
        </div>
      ) : (
        <InputBtnToAccount className={styles} />
      )}
    </div>
  )
}

export default memo(UserPanelOrAuth)
