const initialState = {
  userAuthOrNoAuth: false,
  isLoading: false,
}

export const authReducer = (
  state = initialState,
  {
    type,
  }: {
    type: string
  },
) => {
  switch (type) {
    case 'Load':
      return {
        ...state,
        isLoading: true,
      }
    case 'Okey':
      return {
        ...state,
        isLoading: false,
        userAuthOrNoAuth: true,
      }
    default:
      return state
  }
}
