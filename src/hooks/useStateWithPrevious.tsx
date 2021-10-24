// react
import { useState } from 'react'

// modules

// project files
import usePrevious from './usePrevious'

/**
 * @param initialValue the value to initialize the useState hook with
 */
export default function useStateWithPrevious(initialValue: unknown) {
  const [currentState, setCurrentState] = useState(initialValue)
  const previousState = usePrevious(initialValue)

  return [currentState, previousState, setCurrentState]
}

// example
/*
const PhoneInput = ({ value, placeholder, onChange, ...props}) => {
  const { maskedValue, eventProps } = useInputMask({
    mask: '(+1) 999 999 9999',
    value,
    onChange
  })

  return (
    <input
      value={maskedValue}
      placeholder={placeholder || 'Enter phone number...'}
      {...props}
      {...eventProps}
    />
  )
}
*/
