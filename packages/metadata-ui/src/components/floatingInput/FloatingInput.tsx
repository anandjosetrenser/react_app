import { useEffect, useState } from 'react'

import { InputProps } from './interface'
import { ClearInput, Input, LabelWrapper, Wrapper } from './style'
import { FaFieldClose } from '../../assets/icons/svgComponents'
import colors from '../../theme/common/colors/color'
import { OnKeyDown, OnKeyPress } from '../../utils/keyEventHandler'

function FloatingInput(props: InputProps): JSX.Element {
  const {
    label,
    name,
    value,
    type = 'text',
    onChange,
    dataTestId = '',
    autoComplete = 'on',
    min = '0',
    clearOption = true,
    disabled = false
  } = props
  const [hasValue, setHasValue] = useState(false)

  useEffect(() => {
    if (value === '' || value === undefined) {
      return setHasValue(false)
    }
    return setHasValue(true)
  }, [value])

  const onChangeValue = (val: string) => {
    onChange(val)
    if (val === '' || val === undefined) {
      return setHasValue(false)
    }
    return setHasValue(true)
  }

  return (
    <Wrapper>
      <Input
        disabled={disabled}
        type={type}
        name={name}
        autoComplete={autoComplete}
        value={value}
        data-testid={dataTestId}
        onChange={event => onChangeValue(event.target.value)}
        onKeyPress={e => {
          OnKeyPress(e, type)
        }}
        onKeyDown={e => {
          OnKeyDown(e, type)
        }}
        min={min}
      />
      <LabelWrapper hasValue={hasValue}>{label}</LabelWrapper>
      {value !== '' && clearOption && (
        <ClearInput
          type="button"
          onClick={() => {
            onChangeValue('')
          }}
          style={{ color: colors.font.primary }}
        >
          <FaFieldClose />
        </ClearInput>
      )}
    </Wrapper>
  )
}

export default FloatingInput
