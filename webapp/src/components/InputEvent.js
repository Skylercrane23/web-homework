import { useEffect, useState } from 'react'
export const InputEvent = () => {
  const [key, setKey] = useState(null)
  useEffect(() => {
    const keyDownHandler = ({ code }) => setKey(code)
    const keyUpHandler = () => setKey(null)
    global.addEventListener('keydown', keyDownHandler)
    global.addEventListener('keyup', keyUpHandler)
    return () => {
      global.removeEventListener('keydown', keyDownHandler)
      global.removeEventListener('keyup', keyUpHandler)
    }
  }, [])
  return key
}
