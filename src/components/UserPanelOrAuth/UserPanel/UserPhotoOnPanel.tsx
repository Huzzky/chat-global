import { memo } from 'react'
import { useSelector } from 'react-redux'

interface IPhotoUserInStoreProp {
  authReducer: {
    userPhoto: string | undefined
  }
}

const UserPhotoOnPanel = ({
  className,
}: {
  className: string
}): JSX.Element => {
  const userPhoto = useSelector(
    ({ authReducer }: IPhotoUserInStoreProp) => authReducer.userPhoto,
  )
  return <img className={className} src={userPhoto} alt="user"></img>
}

export default memo(UserPhotoOnPanel)
