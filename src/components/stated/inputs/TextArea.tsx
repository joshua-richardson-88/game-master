// react
import React, { FC, useEffect, useRef, useState } from 'react'

// modules

// project files
import {
  SHelpText,
  STextContainer,
  STextFieldArea,
  STextLabel,
} from 'ui_components'
import useStateWithValidation from 'hooks/useStateWithValidation'
import { Typography } from 'components'

type Props = {
  disabled?: boolean
  errorMessage: string
  initialText: string
  label: string
  name: string
  update: (name: any, value: string, isValid: boolean) => void
  validation: (s: string) => boolean
}
const TextArea: FC<Props> = ({
  disabled = false,
  errorMessage,
  initialText,
  label,
  name,
  update,
  validation,
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [text, setText, isValid] = useStateWithValidation(
    validation,
    initialText
  )
  const [textAreaHeight, setTextAreaHeight] = useState('auto')
  const [parentHeight, setParentHeight] = useState('auto')

  useEffect(() => {
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`)
    setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`)
  }, [text])

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaHeight('auto')
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`)
    setText(event)
  }
  const handleFocus = () => textAreaRef.current && textAreaRef.current.focus()
  const handleBlur = () => update(name, text, isValid)

  return (
    <STextContainer height={parentHeight}>
      <STextFieldArea
        disabled={disabled}
        grow={true}
        height={textAreaHeight}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        ref={textAreaRef}
        rows={1}
        value={text}
      />
      <Typography component='body1' color='secondary'>
        Characters: {text.length}
      </Typography>
      <STextLabel onClick={handleFocus}>{label}</STextLabel>
      <SHelpText show={!isValid}>{errorMessage}</SHelpText>
    </STextContainer>
  )
}

export default TextArea
