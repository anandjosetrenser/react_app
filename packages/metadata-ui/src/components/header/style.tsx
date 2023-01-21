import styled from 'styled-components'

import colors from '../../theme/common/colors/color'

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background: ${colors.background};
`

export const HeaderItems = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 25px;
  border-bottom: 2px solid ${colors.lineColor.primary};
`
