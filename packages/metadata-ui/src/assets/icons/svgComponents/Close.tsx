import * as React from 'react'
import { SVGProps } from 'react'
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11.178 10 3.578-3.578a.832.832 0 1 0-1.178-1.178L10 8.822 6.422 5.244a.832.832 0 1 0-1.178 1.178L8.822 10l-3.578 3.578a.832.832 0 1 0 1.178 1.178L10 11.178l3.578 3.578a.831.831 0 0 0 1.178 0 .832.832 0 0 0 0-1.178L11.178 10Z"
      fill="currentColor"
    />
  </svg>
)
export default SvgClose
