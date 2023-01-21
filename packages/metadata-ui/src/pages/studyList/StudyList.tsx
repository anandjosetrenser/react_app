/* eslint-disable @typescript-eslint/no-dynamic-delete */
import React, { useEffect, useState } from 'react'

import { StudyDataResponse } from './interface'
import { studyListFields, studyListSchema } from './tableSchema'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Container, Title } from '../../common/style'
import Table from '../../components/table/Table'
import { LISTING_CONFIG } from '../../constants'
import { getStudyList, studyData } from '../../features/study/studyListSlice'
import getDisplayMessage from '../../i18n/displayMessage'
import DICOMHeader from '../DicomHeaders/DICOMHeader'

function StudyList() {
  const dispatch = useAppDispatch()
  const { studyList, status, count } = useAppSelector(studyData)
  const [isShowingDICOMHeaders, setIsShowingDICOMHeaders] =
    useState<boolean>(false)
  const onCloseDICOMHeader = () => {
    setIsShowingDICOMHeaders(false)
  }

  const [dicomMetaData, setDicomMetaData] = useState({})

  const defaultQuires = {
    orderby: '-StudyDate',
    limit: LISTING_CONFIG.LIMIT,
    offset: 0
  }
  const [quires, setQuires] = useState<Record<string, any>>({
    ...studyListFields,
    ...defaultQuires
  })

  useEffect(() => {
    const queriesObj = { ...quires }
    for (const property in queriesObj) {
      console.log(`${property}: ${String(queriesObj[property])}`)
      if (String(queriesObj[property]) === '') {
        delete queriesObj[property]
      }
    }
    dispatch(getStudyList({ queryParam: queriesObj }))
      .unwrap()
      .then(() => {})
      .catch(() => {})
  }, [quires])

  const onChangeQuires = (field: string, value: string) => {
    setQuires({ ...quires, [field]: value })
  }

  const actionFunction = (actionName: string, data: StudyDataResponse) => {
    if (actionName === 'showHeader') {
      setDicomMetaData(data.data)
      setIsShowingDICOMHeaders(true)
    }
  }

  return (
    <>
      <DICOMHeader
        isShowingDICOMHeaders={isShowingDICOMHeaders}
        onClose={onCloseDICOMHeader}
        dicomInfo={dicomMetaData}
      />
      <Container>
        <Title>{getDisplayMessage('pageHeading.studyList')}</Title>
        <Table
          tableSchema={studyListSchema}
          data={studyList}
          searchQuires={quires}
          defaultQuires={defaultQuires}
          onChange={onChangeQuires}
          loadingStatus={status}
          noDataMessage={getDisplayMessage('common.noRecordsFound')}
          actionFunction={actionFunction}
          totalRecordCount={count}
          setQuires={setQuires}
        />
      </Container>
    </>
  )
}

export default StudyList
