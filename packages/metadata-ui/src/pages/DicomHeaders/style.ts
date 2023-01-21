import styled from 'styled-components'

import { PopupStyle } from './interface'
import colors from '../../theme/common/colors/color'

export const Title = styled.h2`
  /* font-family:  ; */
  color: ${colors.font.primary};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DICOMHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const DICOMHeaderContent = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 78%;
  height: 85vh;
  padding: 36px 52px;
  background: #000;
  border: 1px solid #fff;

  border-radius: 8px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`

export const Modal = styled.div<PopupStyle>`
  display: ${props => (props.visibility ? 'block' : 'none')};
  position: fixed; /* Stay in place */
  z-index: 10000; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  padding-left: 0px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`

export const DICOMAttributeContainer = styled.div`
  margin-top: 24px;
`
export const AttributeList = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  border-radius: 8px;
  width: 100%;
`

export const AttributeHeaderContainer = styled.tr`
  color: #8191b9;
  background: #121729;
`

export const AttributeHeader = styled.th`
  padding-top: 8px !important;
  padding-bottom: 8px !important;
  position: sticky;
  padding: 8px 15px;
  font-size: 16px;
  top: 0;
  background: #121729;
  text-align: left;
`

export const Attributes = styled.tr`
  padding: 8px 24px;
`

export const AttributesData = styled.td<{ tdWidth?: string }>`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #8191b9;
  padding: 8px 15px;
  > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
`
