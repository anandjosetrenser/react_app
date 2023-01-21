/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import _ from 'lodash'

import { FaExpand, FaMinus } from '../../../assets/icons/svgComponents'
import { StudyData, StudyResults } from '../../studyList/interface'
import { ActionFunction, TableSchema } from '../interface'

export function formatDicomTags(value: string) {
  return `${value.slice(0, 4)} ${value.slice(4, 8)}`
}

export function formatDicomTagValue(value: StudyData) {
  try {
    if (value?.Value?.length) {
      switch (value.vr) {
        case 'SQ':
          return `Items ${String(value.Value.length)}`
        case 'PN':
          if (value.Value?.[0]) {
            return value.Value.map(
              (vals: { Alphabetic: string }) => vals.Alphabetic
            ).join()
          }
          return ''
        default:
          return value.Value.join()
      }
    }
    return String(value.BulkDataURI || '')
  } catch (e) {
    return value
  }
}

function formatDicomVal(data: StudyData): string {
  let formattedVal: string = ''
  if (data && String(_.get(data, 'vr')) === 'PN' && _.hasIn(data, 'Value.0')) {
    if (_.hasIn(data, 'Value.0.Alphabetic')) {
      formattedVal = String(_.get(data, 'Value.0.Alphabetic'))
    }
    if (_.hasIn(data, 'Value.0.Ideographic')) {
      formattedVal = String(_.get(data, 'Value.0.Ideographic'))
    }
    if (_.hasIn(data, 'Value.0.Phonetic')) {
      formattedVal = String(_.get(data, 'Value.0.Phonetic'))
    }
  }
  if (
    data &&
    (String(_.get(data, 'vr')) === 'DA' ||
      String(_.get(data, 'vr')) === 'TM' ||
      String(_.get(data, 'vr')) === 'DT') &&
    _.hasIn(data, 'Value.0')
  ) {
    formattedVal = String(_.get(data, 'Value[0]'))
  }
  if (
    data &&
    !(
      String(_.get(data, 'vr')) === 'DA' ||
      String(_.get(data, 'vr')) === 'TM' ||
      String(_.get(data, 'vr')) === 'PN' ||
      String(_.get(data, 'vr')) === 'DT'
    )
  ) {
    formattedVal = String(formatDicomTagValue(data))
  }
  return formattedVal
}

const dicomHeaderSchema: TableSchema[] = [
  {
    header: 'Tag',
    pathToValue: '',
    headerDescription: 'Tag',
    width: 25,
    dataFormatFunction: (
      data: unknown,
      actionFunction?: ActionFunction,
      payload?: unknown
    ) => {
      const payloadData = payload as {
        level: number
        tag: string
        expanded: boolean
      }
      const dicomTagData = data as StudyResults
      let icon = <>#</>
      if (_.get(dicomTagData[payloadData.tag], 'vr') === 'SQ') {
        if (payloadData.expanded) {
          icon = (
            <span
              style={{ fontSize: '16px', verticalAlign: 'middle' }}
              onClick={() => {
                if (actionFunction) {
                  actionFunction('toggleExpand', dicomTagData)
                }
              }}
            >
              <FaMinus />
              &nbsp;
            </span>
          )
        } else {
          icon = (
            <span
              style={{ fontSize: '16px', verticalAlign: 'middle' }}
              onClick={() => {
                if (actionFunction) {
                  actionFunction('toggleExpand', dicomTagData)
                }
              }}
            >
              <FaExpand />
              &nbsp;
            </span>
          )
        }
      } else {
        icon = <>#</>
      }
      return (
        <span>
          <div
            style={{
              width: `${payloadData.level * 40 + 5}px`,
              display: 'inline-block'
            }}
          >
            &nbsp;
          </div>
          {icon}
          {formatDicomTags(String(payloadData.tag))}
        </span>
      )
    }
  },
  {
    header: 'Attribute Name',
    pathToValue: '',
    headerDescription: 'Attribute Name',
    width: 25,
    dataFormatFunction: (
      data: unknown,
      actionFunction?: ActionFunction,
      payload?: unknown
    ) => {
      const payloadData = payload as {
        level: number
        tag: string
        expanded: boolean
      }

      const dicomTagData = data as StudyResults
      function privateCreator(tag: string) {
        if (!'02468ACE'.includes(tag.charAt(3))) {
          const block = tag.slice(4, 6)
          if (block !== '00') {
            const el = dicomTagData[`${tag.slice(0, 4)}00${block}`]
            return el?.Value?.[0]
          }
        }
        return undefined
      }

      const attrName: string = String(
        // @ts-ignore:
        DCM4CHE?.elementName.forTag(
          payloadData.tag,
          privateCreator(payloadData.tag)
        )
      )
      return <span title={attrName}>{attrName}</span>
    }
  },
  {
    header: 'Data Type',
    pathToValue: '',
    headerDescription: 'Data Type',
    width: 20,
    dataFormatFunction: (
      data: unknown,
      actionFunction?: ActionFunction,
      payload?: unknown
    ) => {
      const payloadData = payload as {
        level: number
        tag: string
        expanded: boolean
      }
      const dicomTagData = data as StudyResults
      return <span>{_.get(dicomTagData[payloadData.tag], 'vr')}</span>
    }
  },
  {
    /* For study description and series description the Value(Original value) is shown from the corresponding private tags  */
    header: 'Value',
    pathToValue: '',
    headerDescription: 'Value',
    width: 35,
    dataFormatFunction: (
      data: unknown,
      actionFunction?: ActionFunction,
      payload?: unknown
    ) => {
      const payloadData = payload as {
        level: number
        tag: string
        expanded: boolean
      }

      const dicomTagData = data as StudyResults
      const tagOriginalValue = formatDicomVal(dicomTagData[payloadData.tag])

      return (
        <span>
          <span title={tagOriginalValue ? String(tagOriginalValue) : ''}>
            {tagOriginalValue}
          </span>
        </span>
      )
    }
  }
  //   {
  //     /* For study description and series description the Standardized value is shown from the corresponding private tags  */
  //     header: "Standardized Value",
  //     pathToValue: "",
  //     headerDescription: "Standardized Value",
  //     width: 50,
  //     dataFormatFunction: (
  //       data: unknown,
  //       actionFunction?: ActionFunction,
  //       payload?: unknown
  //     ) => {
  //       const payloadData = payload as {
  //         level: number;
  //         tag: string;
  //         expanded: boolean;
  //       };
  //       const dicomTagData = data as StudyResults;
  //       const standardizedTag = Object.keys(standardizeTagConfigInfo);
  //       const tagStandardizedVal = payloadData.level === 0 && standardizedTag.includes(payloadData.tag)
  //         ? formatDicomVal(dicomTagData[String(standardizeTagConfigInfo[payloadData.tag].standardizedValue)]) : "-";
  //       return (
  //         <span title={tagStandardizedVal ? String(tagStandardizedVal) : ""}>
  //           {" "}
  //           {tagStandardizedVal}
  //         </span>
  //       );
  //     },
  //   },
]

export default dicomHeaderSchema
