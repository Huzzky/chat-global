import { memo } from 'react'
import { InputBtnToAccount } from './InputBtnToAccount'

const SignInContainter = ({
  styles,
}: {
  styles: { readonly [key: string]: string }
}) => {
  return (
    <div className={styles.userPanel__containerSignIn}>
      <InputBtnToAccount className={styles} />
    </div>
  )
}

export default memo(SignInContainter)
