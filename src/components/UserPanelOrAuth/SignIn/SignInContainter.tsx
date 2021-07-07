import { memo } from 'react'
import CheckboxForChoiceSaveAccountInCookies from './CheckboxForChoiceSaveAccountInStorage'
import { InputBtnToAccount } from './InputBtnToAccount'

const SignInContainter = ({
  styles,
}: {
  styles: { readonly [key: string]: string }
}) => {
  return (
    <div className={styles.userPanel__containerSignIn}>
      <InputBtnToAccount className={styles} />
      <CheckboxForChoiceSaveAccountInCookies className={styles} />
    </div>
  )
}

export default memo(SignInContainter)
