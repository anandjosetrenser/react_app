/* eslint-disable import/no-cycle */
import { useState } from 'react'

import RenderTr from './renderTr'
import { FaExpand, FaMinus } from '../../../../assets/icons/svgComponents'
import { StudyResults } from '../../../studyList/interface'
import { Attributes, AttributesData } from '../../style'

export function RenderDicomTagInfo(props: {
  dicomInfo: StudyResults
  level: number
}) {
  const { dicomInfo, level } = props
  const keys = Object.keys(dicomInfo)
  keys.sort()
  return (
    <>
      {keys.map(tag => (
        <RenderTr
          key={`${tag}${level}`}
          dicomInfo={dicomInfo}
          level={level}
          tag={tag}
        />
      ))}
    </>
  )
}

export function RenderChild(props: {
  level: number
  dt: StudyResults
  index: number
}) {
  const [expanded, setExpanded] = useState<boolean>(true)
  const { level, dt, index } = props

  return (
    <>
      <Attributes>
        <AttributesData>
          <span>
            <div
              style={{ width: `${level * 40 + 20}px`, display: 'inline-block' }}
            >
              &nbsp;
            </div>

            {expanded ? (
              <span
                style={{ fontSize: '16px', verticalAlign: 'middle' }}
                onClick={() => setExpanded(!expanded)}
              >
                <FaMinus />
                &nbsp;
              </span>
            ) : (
              <span
                style={{ fontSize: '16px', verticalAlign: 'middle' }}
                onClick={() => setExpanded(!expanded)}
              >
                <FaExpand />
                &nbsp;
              </span>
            )}
            {`Item #${String(index + 1)}`}
          </span>
        </AttributesData>
        <AttributesData>
          <span>Item</span>
        </AttributesData>
        <AttributesData>
          <span style={{ fontStyle: 'italic' }}>--</span>
        </AttributesData>
        <AttributesData>
          <span style={{ fontStyle: 'italic' }}>--</span>
        </AttributesData>
        <AttributesData>
          <span>-</span>
        </AttributesData>
      </Attributes>
      {expanded && (
        <RenderDicomTagInfo dicomInfo={dt} level={level + 1} key={level} />
      )}
    </>
  )
}
