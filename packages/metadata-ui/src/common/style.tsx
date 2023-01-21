import styled from 'styled-components'

import colors from '../theme/common/colors/color'

const Container = styled.div`
  padding: 32px;
  color: ${colors.font.primary};
`
const Title = styled.label`
  color: ${colors.font.primary};
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
  display: inline-block;
`

const IconContainer = styled.div<{ isActive?: boolean }>`
  color: ${props =>
    props.isActive !== undefined && props.isActive
      ? colors.icon.active
      : colors.icon.disable};
  cursor: pointer;
  display: flex;
`

export { Container, Title, IconContainer }
