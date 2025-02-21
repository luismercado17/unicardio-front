import { KeyboardEventHandler } from 'react'

export interface IInput {
  name: string
  control?: any
  label?: string
  placeholder?: string
  password?: boolean
  defaultValue?: string
  value?: string
  type?: string
  maxLength?: number
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>
  children?: any
}
