import styled from 'styled-components'

import color from '../../theme/common/colors/color'

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${color.blue40};
`

const PaginationButtons = styled.span<{ disabled: boolean }>`
  margin-top: 2px;
  font-size: 24px;
  cursor: pointer;
  color: ${props => props.disabled && color.blue40light};
`

const PaginationContent = styled.div`
  padding: 0 36px;
  word-spacing: 2px;
`

export { PaginationWrapper, PaginationButtons, PaginationContent }
