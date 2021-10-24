// react
import React, { useEffect, useState } from 'react'
import useStateWithPrevious from './useStateWithPrevious'

// modules

// project files

type Props = {
  alwaysShowMask?: boolean
  onBlurCallback?: () => void
  initialText: string
  mask: string
  maskPlaceholder?: string
}
type CaratSelection = {
  start: number
  end: number
  length: number
}
/**
 * @param alwaysShowMask whether or not to show the mask when input is not in focus
 * @param onBlurCallback a function to execute when input blur, in addition to internal functionality
 * @param initialText the text to start the state off with
 * @param mask a string that dictates what text-mask to apply to the input
 * @param maskPlaceholder a character to apply to the formatted string to show the user where they still need to enter data
 */
export default function useInputMask({
  alwaysShowMask = true,
  onBlurCallback,
  initialText,
  mask,
  maskPlaceholder = '_',
}: Props) {
  const [previousRawText, rawText, setRawText] =
    useStateWithPrevious(initialText)
  const [previousFormattedText, formattedText, setFormattedText] =
    useStateWithPrevious(formatText(initialText, mask, maskPlaceholder))
  const [selection, setSelection] = useStateWithPrevious({
    start: 0,
    end: 0,
    length: 0,
  })

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!!onBlurCallback) onBlurCallback()
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {}
  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    setSelection(getSelection(event))
  }
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {}
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setSelection(getSelection(event))
  }

  useEffect(() => {
    // console.log(`carat selection: `, selection)
  }, [selection])

  return [
    rawText,
    formattedText,
    {
      onBlur: handleBlur,
      onChange: handleChange,
      onClick: handleClick,
      onFocus: handleFocus,
      onKeyUp: handleKeyUp,
    },
  ]
}

const formatText = (
  textToFormat: string,
  mask: string,
  maskPlaceholder: string
): string => {
  const maskKeys = ['0', 'a', 'A', 'w', '*']

  console.log(
    `got text: ${textToFormat}, mask: ${mask} and mask placeholder: ${maskPlaceholder}`
  )

  const rawText = [...textToFormat]
  const maskArray = [...mask]
  let useRawText = true

  // console.log('==============================================================')
  // console.log('format function was called')
  // console.log('raw text array initialized as: ', rawText)
  // // console.log('useRawText initialized as: ', useRawText)
  // // console.log('maskArray initialized as: ', maskArray)

  const formattedText = maskArray
    .map((maskCharacter) => {
      // console.log('-----------------------------------------------------------')
      // console.log(`checking to see if ${maskCharacter} is a static character`)
      // this returns static characters in mask
      if (!maskKeys.includes(maskCharacter)) return maskCharacter

      // console.log(`${maskCharacter} wasn't static`)
      // console.log('Checking to see if we should still use the raw text')
      // console.log(`useRawText is currently: ${useRawText}`)

      // if we already had an illegal character, we don't need
      // to check anything else in the raw text
      if (!useRawText) return maskPlaceholder

      // console.log(`Currently rawText has a length of ${rawText.length}`)

      // if no more characters to match against, we don't need to check anything
      // so stop here
      if (rawText.length === 0) {
        useRawText = false
        return maskPlaceholder
      }

      // console.log('We can currently utilize rawText: ', rawText)

      // check if character in raw text matches the mask character
      // at this position
      let char = rawText[0]
      // console.log(`The current character we're checking is ${char}`)
      switch (maskCharacter) {
        case '0': // allow 0-9
          // console.log('mask character is a number')
          if (rawText[0].match(/\d/)) {
            // console.log('character matched')
            rawText.shift()
            return char
          }
          // console.log('character did not match')
          useRawText = false
          return maskPlaceholder
        case 'a': // allow a-z
          // console.log('mask character is lower-cased letter')
          if (rawText[0].match(/[a-z]/)) {
            // console.log('character matched')
            rawText.shift()
            return char
          }
          // console.log('character did not match')
          useRawText = false
          return maskPlaceholder
        case 'A': // allow A-Z
          // console.log('mask character is an upper-cased letter')
          if (rawText[0].match(/[A-Z]/)) {
            // console.log('character matched')
            rawText.shift()
            return char
          }
          // console.log('character did not match')
          useRawText = false
          return maskPlaceholder
        case 'w': // allow A-Za-z
          // console.log('mask character is any-cased letter')
          if (rawText[0].match(/[A-Za-z]/)) {
            // console.log('character matched')
            rawText.shift()
            return char
          }
          // console.log('character did not match')
          useRawText = false
          return maskPlaceholder
        default:
          // allow any character
          // console.log('mask character is allow all')
          rawText.shift()
          return char
      }
    })
    .join('')

  return formattedText
}
const getSelection = (
  event:
    | React.FocusEvent<HTMLInputElement>
    | React.KeyboardEvent<HTMLInputElement>
    | React.MouseEvent<HTMLInputElement>
): CaratSelection => {
  const caratStart = event.currentTarget.selectionStart ?? 0
  const caratEnd = event.currentTarget.selectionEnd ?? caratStart
  const selectionLength = caratEnd - caratStart

  return { start: caratStart, end: caratEnd, length: selectionLength }
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
