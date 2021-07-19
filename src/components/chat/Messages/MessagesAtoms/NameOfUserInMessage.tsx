import React from 'react'

type INameOfUserInmessageProps = {
  nameOfUser: string
}

export const NameOfUserInMessage:React.FunctionComponent<INameOfUserInmessageProps> = ({
  nameOfUser,
}: INameOfUserInmessageProps) => <p>{nameOfUser}</p>
