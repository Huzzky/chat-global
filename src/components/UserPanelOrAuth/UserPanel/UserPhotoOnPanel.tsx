import { memo } from 'react'
import { useSelector } from 'react-redux'

interface IPhotoUserInStoreProp {
  authReducer: {
    userPhoto: string | undefined
  }
}

const UserPhotoOnPanel = (): JSX.Element => {
  const userPhoto = useSelector(
    ({ authReducer }: IPhotoUserInStoreProp) => authReducer.userPhoto,
  )
  return <img src={userPhoto} alt="user"></img>
}

export default memo(UserPhotoOnPanel)
