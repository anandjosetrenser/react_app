import React from 'react'

import { SpinnerProps } from './interface'
import { StyledSpinner, LoadingText } from './style'

export default function Spinner(props: SpinnerProps) {
  const { title = 'Searching...' } = props
  return (
    <>
      <StyledSpinner>
        <div className="lds-spinner">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </StyledSpinner>
      <LoadingText>{title}</LoadingText>
    </>
  )
}
