import { useEffect, useRef } from 'react'

import { RenderDicomTagInfo } from './renderDicomTagInfo/renderDicomTagInfo'
import dicomHeaderSchema from './schema'
import { DICOMAttributeListProps } from '../interface'
import {
  AttributeHeader,
  AttributeHeaderContainer,
  AttributeList
} from '../style'

export default function DICOMAttributeList(props: DICOMAttributeListProps) {
  const { dicomInfo } = props
  const scrollableContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollableContainer.current != null)
      scrollableContainer.current.scrollTop = 0
  }, [dicomInfo])

  return (
    <div
      style={{ maxHeight: '65vh', overflow: 'auto', borderRadius: '8px' }}
      ref={scrollableContainer}
    >
      <AttributeList>
        <tbody>
          <AttributeHeaderContainer>
            {dicomHeaderSchema.map(schema => (
              <AttributeHeader
                key={schema.header}
                style={{
                  width: `${String(schema.width)}%`
                }}
              >
                {schema.header}
              </AttributeHeader>
            ))}
          </AttributeHeaderContainer>
          <RenderDicomTagInfo dicomInfo={dicomInfo} level={0} />
        </tbody>
      </AttributeList>
    </div>
  )
}
