import { memo } from 'react'
import { InputBtnToAccount } from './InputBtnToAccount'

type IPropsSignInContainer = {
  styles: { readonly [key: string]: string }
}

const SignInContainter: React.FunctionComponent<IPropsSignInContainer> = ({
  styles,
}: IPropsSignInContainer) => {
  return (
    <div className={styles.userPanel__containerSignIn}>
      <InputBtnToAccount className={styles} />
    </div>
  )
}

export default memo(SignInContainter)
