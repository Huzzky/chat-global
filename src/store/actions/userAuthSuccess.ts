const userAuthSuccess = () => {
  return (dispatch: Function) => {
    dispatch({
      type: 'Okey',
    })
  }
}

export { userAuthSuccess }
