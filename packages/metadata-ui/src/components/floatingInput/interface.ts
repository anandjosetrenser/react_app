export type InputTypes = 'text' | 'number' | 'email'

export interface InputProps {
  label: string
  name: string
  value: string
  onChange: (val: string) => void
  dataTestId?: string
  type?: InputTypes
  autoComplete?: 'off' | 'on'
  min?: string
  clearOption?: boolean
  disabled?: boolean
  required?: boolean
}
