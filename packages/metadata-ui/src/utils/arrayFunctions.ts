export default function sortArray<T>(
  arr: T[],
  key: keyof T,
  orderBy: 'ASC' | 'DESC' = 'ASC'
) {
  function compare(firstNode: T, secondNode: T) {
    let returnVal: number = 0
    if (firstNode[key] < secondNode[key]) {
      if (orderBy === 'ASC') {
        returnVal = -1
      } else {
        returnVal = 1
      }
    }
    if (firstNode[key] > secondNode[key]) {
      if (orderBy === 'ASC') {
        returnVal = 1
      } else {
        returnVal = -1
      }
    }
    return returnVal
  }

  arr.sort((item1, item2) => compare(item1, item2))
}

export const convertStringToSelectArray = (str: String) => {
  const selectArr: Array<{ value: string; label: string }> = []
  if (str !== '') {
    const arr: string[] = str.split(',')
    for (let i = 0; i < arr.length; i += 1) {
      selectArr.push({ value: arr[i], label: arr[i] })
    }
  }
  return selectArr
}

export const formatDataForDropDown = (keyValueData: Record<string, string>) => {
  const keys = Object.keys(keyValueData)
  const dropDowndata: Array<{ value: string; label: string }> = []
  keys.forEach(key => {
    dropDowndata.push({ value: key, label: keyValueData[key] })
  })
  return dropDowndata
}
