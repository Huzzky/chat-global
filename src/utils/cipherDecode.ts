import { keyAmount } from '../config'
import { utf8_encode } from './cipherEncode'

const decode = (text: string): string => {
  let j: number = 0
  let str: string = ''
  let key: string = utf8_encode(keyAmount())
  text = window.atob(text)
  for (let i: number = 0; i < text.length; i++) {
    let a: number = text.charCodeAt(i)
    let b: number = key.charCodeAt(j)
    let c: number = a - b
    if (c < 0) c += 255
    str += String.fromCharCode(c)
    if (j === key.length - 1) j = 0
    else j++
  }
  return utf8_decode(str)
}
const utf8_decode = (text: string): string => {
  let str: string = ''
  for (let i: number = 0; i < text.length; i++) {
    if (text.charCodeAt(i) > 127) {
      str += String.fromCharCode(text.charCodeAt(i) + 848)
    } else {
      str += text.charAt(i)
    }
  }
  return str
}

export { decode }
