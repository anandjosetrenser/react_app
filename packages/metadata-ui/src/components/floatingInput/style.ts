/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styled from 'styled-components'

import colors from '../../theme/common/colors/color'
import { spacingScale } from '../../theme/common/spacing'
import typography from '../../theme/common/typography'

export const Wrapper = styled.div`
  position: relative;
  margin: ${spacingScale(0)}px ${spacingScale(0.5)}px;
`

export const Input = styled.input`
  display: flex;
  font-size: ${typography.fontSize};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: ${spacingScale(1)}px ${spacingScale(2)}px;
  position: static;
  height: ${spacingScale(5)}px;
  background: #010616;
  border: 1px solid #323b5c;
  box-sizing: border-box;
  border-radius: ${spacingScale(1)}px;
  padding-top: ${spacingScale(2.5)}px;
  width: 100%;
  color: ${colors.font.primary};
  &:focus {
    outline: none;
    border: 1px solid #8191b9;
  }
  &:focus + :active {
    border: ${spacingScale(0.25)}px solid #8191b9;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: ${spacingScale(0)};
  }
  -moz-appearance: textfield;
`

export const LabelWrapper = styled.div<{ hasValue?: boolean }>`
  width: 70%;
  position: absolute;
  overflow: hidden;
  word-wrap: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${colors.font.primary};
  font-size: ${props =>
    props.hasValue ? typography.xxsmall : typography.default}px;
  font-weight: normal;
  pointer-events: none;
  margin-left: ${spacingScale(2)}px;
  top: ${props => (props.hasValue ? spacingScale(0.75) : spacingScale(1.25))}px;
  transition: 0.2s ease all;
  ${Input}:focus ~ & {
    top: ${spacingScale(0.75)}px;
  }
`

export const ClearInput = styled.button`
  position: absolute;
  top: ${spacingScale(1.5)}px;
  right: ${spacingScale(0.75)}px;
  background: none;
  border: none;
  padding: ${spacingScale(0)}px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background: ${colors.background};
  }
`
