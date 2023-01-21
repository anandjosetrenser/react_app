/* eslint-disable import/no-cycle */
import { useState } from 'react'

import _ from 'lodash'

import { RenderChild } from './renderDicomTagInfo'
import { StudyResults } from '../../../studyList/interface'
import { Attributes, AttributesData } from '../../style'
import dicomHeaderSchema from '../schema'

export default function RenderTr(props: {
  dicomInfo: StudyResults
  level: number
  tag: string
}) {
  const [expanded, setExpanded] = useState<boolean>(true)
  const { dicomInfo, level, tag } = props

  function actionFn(event: string) {
    if (event === 'toggleExpand') setExpanded(!expanded)
  }

  return (
    <>
      <Attributes>
        {dicomHeaderSchema.map(schema => (
          <AttributesData
            key={schema.header}
            style={{
              fontWeight: _.get(dicomInfo[tag], 'vr') === 'SQ' ? 600 : 500,
              width: `${schema.width}%`
            }}
          >
            {schema.dataFormatFunction?.(dicomInfo, actionFn, {
              tag,
              level,
              expanded
            })}
          </AttributesData>
        ))}
      </Attributes>
      {_.get(dicomInfo[tag], 'vr') === 'SQ' && expanded && (
        <>
          {Boolean(_.get(dicomInfo[tag], 'Value')) &&
            _.get(dicomInfo[tag], 'Value', []).map(
              (dt: StudyResults, index: number) => (
                <RenderChild level={level} dt={dt} index={index} key={level} />
              )
            )}
        </>
      )}
    </>
  )
}
