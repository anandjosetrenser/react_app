const toggleSort = (
  currentField: string,
  sortField: string,
  defaultField: string
) => {
  let updatedOrderBy: string = sortField
  if (currentField === sortField) {
    updatedOrderBy = `-${sortField}`
  }
  if (
    currentField === `-${sortField}` &&
    currentField !== String(defaultField)
  ) {
    updatedOrderBy = String(defaultField)
  }

  return updatedOrderBy
}

export default toggleSort
