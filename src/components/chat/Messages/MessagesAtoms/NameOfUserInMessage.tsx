import React from 'react'

type INameOfUserInmessageProps = {
  nameOfUser: string
}

export const NameOfUserInMessage = ({
  nameOfUser,
}: INameOfUserInmessageProps) => <p>{nameOfUser}</p>
