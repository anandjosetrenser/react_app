/**
 *
 * @param hexCode hex code of color
 * @param opacity  opacity
 * @returns reba of the give hex code with opacity
 */
const convertHexToRGBA = (hexCode: string, opacity: number = 1) => {
  let hex = hexCode.replace('#', '')

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
  }

  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  /* Backward compatibility for whole number based opacity values. */
  if (opacity > 1 && opacity <= 100) {
    // eslint-disable-next-line no-param-reassign
    opacity /= 100
  }

  return `rgba(${r},${g},${b},${opacity})`
}

export default convertHexToRGBA
