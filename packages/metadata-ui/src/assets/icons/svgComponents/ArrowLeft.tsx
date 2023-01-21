import * as React from 'react'
import { SVGProps } from 'react'
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.833 9.167H5.946l3.027-3.634a.833.833 0 1 0-1.28-1.066l-4.166 5c-.033.039-.05.085-.074.128-.02.035-.044.065-.059.103a.821.821 0 0 0-.06.299v.006c0 .102.023.203.06.299.015.038.04.068.06.103.023.043.04.09.073.128l4.166 5a.832.832 0 1 0 1.28-1.066l-3.027-3.634h9.887a.834.834 0 0 0 0-1.666Z"
      fill="currentColor"
    />
  </svg>
)
export default SvgArrowLeft
