const compose: Function = (a: any, b: any): number => {
  if (a.userTimeInput > b.userTimeInput) {
    return 1
  }
  if (a.userTimeInput < b.userTimeInput) {
    return -1
  } else return 0
}

export { compose }
