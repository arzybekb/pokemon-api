import styled from 'styled-components'

function ProgressLine({ value = 50, max = 100 }) {
   const percent = (value / max) * 100
   const ColorHandler = () => {
      if (percent >= 60) {
         return '#5bc686'
      }
      if (percent >= 0 && percent < 33) {
         return '#fb7171'
      }
      return '#f7b500'
   }

   return <Line color={ColorHandler()} width={percent} />
}

export default ProgressLine

const Line = styled.div`
   width: 100%;
   background-color: rgba(0, 0, 0, 0.1);
   border-radius: 100rem;
   overflow: hidden;
   height: 5px;
   margin: 0 10px;
   position: relative;

   &::after {
      content: '';
      display: block;
      height: 100%;
      width: ${({ width }) => width}%;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: inherit;
      background-color: ${({ color }) => color};
      animation: fill 0.3s backwards;
   }
`
