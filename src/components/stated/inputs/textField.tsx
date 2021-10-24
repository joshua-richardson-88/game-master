// react
import React, { FC, useRef } from 'react'

// modules

// project files
import useInputMask from 'hooks/useInputMask'
import {
  SHelpText,
  STextContainer,
  STextField,
  STextLabel,
} from 'ui_components'

type Props = {
  disabled?: boolean
  errorMessage: string
  initialText: string
  label: string
  name: string
  placeholder: string
  stretch: boolean
  update: (name: any, value: string, isValid: boolean) => void
  validation: (s: string) => boolean
}
const TextField: FC<Props> = ({
  disabled = false,
  errorMessage,
  initialText,
  label,
  name,
  placeholder,
  stretch,
  update,
  validation,
}) => {
  const ref = useRef<HTMLInputElement>(null)
  const isValid = true
  const [text, formattedText, eventProps] = useInputMask({
    onBlurCallback: () => update(name, text, isValid),
    initialText,
    mask: '(000) 000-0000',
  })
  // const [text, setText, isValid] = useStateWithValidation(
  //   validation,
  //   initialText
  // )

  // const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   const start = event.currentTarget.selectionStart ?? 0
  //   const end = event.currentTarget.selectionEnd ?? start
  //   console.log(`carat start: ${start} and end: ${end}`)

  //   if (event.key === 'Backspace') {
  //     console.log('backspace key used')
  //     setRawText((prevState) => {
  //       const text =
  //         prevState.substring(0, start - 1) + prevState.substring(end)
  //       console.log('new text is: ', text)
  //       return text
  //     })
  //   } else if (event.key === 'Delete') {
  //     console.log('delete key used')
  //     setRawText(
  //       (prevState) =>
  //         prevState.substring(0, start - 1) + prevState.substring(end)
  //     )
  //   }
  // }
  // const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   const start = event.currentTarget.selectionStart ?? 0
  //   const end = event.currentTarget.selectionEnd ?? start
  //   const textValue =
  //     rawText.substring(0, start) + event.key + rawText.substring(end)

  //   setRawText(
  //     (prevState) =>
  //       prevState.substring(0, start) + event.key + prevState.substring(end)
  //   )
  //   setFormattedText((prevState) => {
  //     return formatText(textValue)
  //   })
  // }
  const handleFocus = () => ref.current && ref.current.focus()
  // const handleTextFocus = (event: React.FocusEvent<HTMLInputElement>) => {
  //   const start = event.currentTarget.selectionStart
  //   const end = event.currentTarget.selectionEnd
  //   console.log(`on focus, carat has selection start: ${start} and end ${end}`)
  // }

  return (
    <STextContainer>
      <STextField
        autoComplete='off'
        disabled={disabled}
        grow={stretch}
        name={name}
        placeholder={placeholder}
        ref={ref}
        type='text'
        value={formattedText}
        {...eventProps}
      />
      <STextLabel onClick={handleFocus}>{label}</STextLabel>
      <SHelpText show={!isValid}>{errorMessage}</SHelpText>
    </STextContainer>
  )
}

export default TextField
