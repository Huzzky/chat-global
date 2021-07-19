const encode = (_x116120116S: string, _x107099SS: string) => {
  // кодирование данных
  let _x106N: number = 0
  let _x115S: string = ''
  let _x107S: string = utf8_encode(_x107099SS)
  _x116120116S = utf8_encode(_x116120116S)
  for (let _x105N: number = 0; _x105N < _x116120116S.length; _x105N++) {
    let _x97N: number = _x116120116S.charCodeAt(_x105N)
    let _x98N: number = _x107S.charCodeAt(_x106N)
    let _x099N: number = _x97N + _x98N
    if (_x099N > 255) _x099N -= 255
    _x115S += String.fromCharCode(_x099N)
    if (_x106N === _x107S.length - 1) _x106N = 0
    else _x106N++
  }
  return window.btoa(_x115S)
}

const utf8_encode = (_x116120116S: string): string => {
  // Грубое кодированние
  let _x115S: string = ''
  for (let _x105N = 0; _x105N < _x116120116S.length; _x105N++) {
    if (_x116120116S.charCodeAt(_x105N) > 255) {
      _x115S += String.fromCharCode(_x116120116S.charCodeAt(_x105N) - 848)
    } else {
      _x115S += _x116120116S.charAt(_x105N)
    }
  }
  return _x115S
}

export { encode, utf8_encode }
