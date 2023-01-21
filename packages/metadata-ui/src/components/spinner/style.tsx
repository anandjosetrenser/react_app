import styled from 'styled-components'

export const StyledSpinner = styled.div`
  .lds-spinner {
    color: official;
    display: inline-block;
    position: relative;
    width: 60px;
    height: 60px;
  }
  .lds-spinner div {
    transform-origin: 40px 40px;
    animation: lds-spinner 1.4s linear infinite;
  }
  .lds-spinner div:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 22px;
    left: 38px;
    width: 4px;
    height: 8px;
    border-radius: 30%;
    background: #497cff;
  }
  .lds-spinner div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.3s;
  }
  .lds-spinner div:nth-child(2) {
    transform: rotate(45deg);
    animation-delay: -1.2s;
  }
  .lds-spinner div:nth-child(3) {
    transform: rotate(90deg);
    animation-delay: -1s;
  }
  .lds-spinner div:nth-child(4) {
    transform: rotate(135deg);
    animation-delay: -0.8s;
  }
  .lds-spinner div:nth-child(5) {
    transform: rotate(180deg);
    animation-delay: -0.6s;
  }
  .lds-spinner div:nth-child(6) {
    transform: rotate(225deg);
    animation-delay: -0.4s;
  }
  .lds-spinner div:nth-child(7) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  .lds-spinner div:nth-child(8) {
    transform: rotate(315deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export const LoadingText = styled.span`
  color: #497cff;
  margin-left: 10px;
`
