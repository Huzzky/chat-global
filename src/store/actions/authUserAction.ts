const authUserAction = () => {
  return (dispatch: Function) => {
    dispatch({
      type: 'Load',
    })
  }
}

export { authUserAction }
