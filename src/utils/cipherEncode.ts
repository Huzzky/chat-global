const encode = (text: string, keyCode: string) => {
  let j: number = 0
  let str: string = ''
  let key: string = utf8_encode(keyCode)
  text = utf8_encode(text)
  for (let i: number = 0; i < text.length; i++) {
    let a: number = text.charCodeAt(i)
    let b: number = key.charCodeAt(j)
    let c: number = a + b
    if (c > 255) c -= 255
    str += String.fromCharCode(c)
    if (j === key.length - 1) j = 0
    else j++
  }
  return window.btoa(str)
}

const utf8_encode = (text: string): string => {
  let str: string = ''
  for (let i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) > 255) {
      str += String.fromCharCode(text.charCodeAt(i) - 848)
    } else {
      str += text.charAt(i)
    }
  }
  return str
}

export { encode, utf8_encode }
