import { memo } from 'react'
import { connect, useSelector } from 'react-redux'
import ConnectToGoole from './SignIn/ConnectToGoogle'
import SignOutFromAccount from './SignOut/SignOutFromAccount'
import { InputBtnToAccount } from './SignIn/InputBtnToAccount'
import UserPanel from './UserPanel/UserPanel'
import styles from '../../assets/_UserPanelOrAuth.module.scss'

interface IAuthReducerProp {
  authReducer: {
    userAuthOrNoAuth: boolean
    isLoading: boolean
  }
}

const UserPanelOrAuth = (): JSX.Element => {
  const state = useSelector(({ authReducer }: IAuthReducerProp) => authReducer)
  return (
    <div className={styles.userPanel}>
      {state.userAuthOrNoAuth ? (
        <>
          <UserPanel />
          <SignOutFromAccount />
        </>
      ) : state.isLoading ? (
        <ConnectToGoole />
      ) : (
        <InputBtnToAccount classNameForStyle={styles} />
      )}
    </div>
  )
}

export default memo(connect()(UserPanelOrAuth))
