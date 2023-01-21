import DICOMAttributeList from './dicomAttributeList/dicomAttributeList'
import { DICOMHeaderProps } from './interface'
import {
  Actions,
  DICOMHeaderContainer,
  DICOMHeaderContent,
  Header,
  Title,
  Modal
} from './style'
import { Close } from '../../assets/icons/svgComponents'

export default function DICOMHeader(props: DICOMHeaderProps) {
  const { isShowingDICOMHeaders, dicomInfo, onClose } = props

  return (
    <Modal visibility={isShowingDICOMHeaders}>
      <DICOMHeaderContainer>
        <DICOMHeaderContent>
          <Header>
            <Title>Dicom Headers</Title>
            <Actions>
              <span onClick={onClose}>
                <Close />
              </span>
            </Actions>
          </Header>
          <DICOMAttributeList dicomInfo={dicomInfo} />
          {/* {JSON.stringify(dicomInfo)} */}
        </DICOMHeaderContent>
      </DICOMHeaderContainer>
    </Modal>
  )
}
