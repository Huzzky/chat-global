import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { AUTH_USER_SAVE_DATA_ACCOUNT_IN_STORAGE } from '../../../const'

const CheckboxForChoiceSaveAccountInStorage = ({
  className,
}: {
  className: { readonly [key: string]: string }
}) => {
  const dispatch = useDispatch()
  const dispatchValueCheckboxToStore = (value: boolean) => {
    dispatch({
      type: AUTH_USER_SAVE_DATA_ACCOUNT_IN_STORAGE,
      choiceSaveInStorage: value,
    })
  }
  return (
    <div className={className.userPanel__checkboxContainer}>
      <input
        className={className.userPanel__checkboxField}
        type="checkbox"
        id="checkboxSaveCookiesAccount"
        onChange={(e) => {
          dispatchValueCheckboxToStore(e.currentTarget.checked)
        }}
      ></input>
      <label
        htmlFor="checkboxSaveCookiesAccount"
        className={className.userPanel__checkboxContainer__label}
      ></label>
      <label htmlFor="checkboxSaveCookiesAccount">
        Сохранить данные об аккаунте?
      </label>
    </div>
  )
}

export default memo(CheckboxForChoiceSaveAccountInStorage)
