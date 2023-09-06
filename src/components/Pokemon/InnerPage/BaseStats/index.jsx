import React from 'react'
import { styled } from 'styled-components'
import { STAT_LABELS } from '../../../../utils/constants/constants'
import ProgressLine from '../../../UI/ProgressLine'

function BaseStats({ stats }) {
   return (
      <div style={{ width: '100%' }}>
         <h3>Base Stats</h3>
         <Table>
            <tbody>
               {STAT_LABELS.map((label, i) => (
                  <tr key={label}>
                     <td>{label}</td>
                     <td>
                        {stats[i]?.base_stat}
                        <ProgressLine value={stats[i]?.base_stat} />
                     </td>
                  </tr>
               ))}
            </tbody>
         </Table>
      </div>
   )
}

export default BaseStats

const Table = styled.table`
   width: 100%;
   & td {
      padding: 0.5rem;
      text-transform: capitalize;
   }
   & td:first-child {
      width: 20%;
   }
   & td:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80%;
      font-weight: 700;
   }
`
