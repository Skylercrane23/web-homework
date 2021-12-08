import { useEffect, useState } from 'react'
import { InputEvent } from './InputEvent'

const UseSecretCommand = (secretCommandPattern) => {
  const [codeCount, setCodeCount] = useState(0)
  const [success, setSuccess] = useState(false)
  const key = InputEvent()

  useEffect(() => {
    if (key == null) return
    if (key !== secretCommandPattern[codeCount]) {
      setCodeCount(0)
      return
    }

    setCodeCount((state) => state + 1)
    if (codeCount + 1 === secretCommandPattern.length) {
      setSuccess(true)
    }
  }, [key])

  return success
}

export default UseSecretCommand
