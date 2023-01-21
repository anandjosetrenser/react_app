import styled from 'styled-components'

import { spacingScale } from '../../theme/common/spacing'

const StyledTable = styled.table`
  margin: ${spacingScale(4)}px ${spacingScale(0)}px;
  -webkit-border-horizontal-spacing: ${spacingScale(0)};
  width: 100%;
`

const Thead = styled.thead``
const Tbody = styled.tbody``
const Tr = styled.tr`
  border: none;
  color: #8191b9;
  background: #121729;
`

const Th = styled.th`
  padding: ${spacingScale(1.5)}px;
  text-align: left;
  position: -webkit-sticky;
  position: sticky;
  top: ${spacingScale(0)};
`

const THeadRow = styled.tr`
  background: #161616;
  position: sticky;
  top: -${spacingScale(0.5)};
  z-index: 20;
`

const Td = styled.td`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: ${spacingScale(1)}px ${spacingScale(2)}px;
`

const TableHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const SortButton = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  margin-left: 10px;
`

const NoDataWrapper = styled.div`
  width: 92vw;
  text-align: center;
  margin-top: 10%;
  color: grey;
  font-size: 16px;
  font-weight: bold;
  position: absolute;
`

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 32px;
`

export {
  StyledTable,
  Thead,
  Tbody,
  Th,
  THeadRow,
  Tr,
  Td,
  SortButton,
  TableHeading,
  NoDataWrapper,
  PaginationWrapper
}
