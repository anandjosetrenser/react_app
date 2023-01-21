import * as React from 'react'
import { SVGProps } from 'react'
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.167 10.833h9.887l-3.027 3.634a.833.833 0 1 0 1.28 1.066l4.167-5c.033-.039.048-.085.073-.128.02-.035.044-.065.059-.103a.82.82 0 0 0 .06-.299v-.006a.821.821 0 0 0-.06-.299c-.015-.038-.04-.068-.06-.103-.024-.043-.04-.09-.072-.128l-4.167-5a.835.835 0 0 0-1.174-.107.833.833 0 0 0-.106 1.173l3.027 3.634H4.167a.834.834 0 0 0 0 1.666Z"
      fill="currentColor"
    />
  </svg>
)
export default SvgArrowRight
