import React from 'react'

import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'

import { DateWrapper } from './style'

function CustomDatePicker(props: { date: Date | null; setDate: Function }) {
  const { date, setDate } = props
  return (
    <DateWrapper>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={date}
        onChange={(date: Date | null) => setDate(date)}
        isClearable
        placeholderText="Select Date"
      />
    </DateWrapper>
  )
}

export { CustomDatePicker }
