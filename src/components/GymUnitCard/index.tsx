import {
  GymUnitsContainer,
  UnitContainer,
  UnitDetails,
  IconsContainer,
  OpeningHours,
  WeekSchedule,
  Days,
} from './styles'

import requiredMask from '../../assets/required-mask.png'

export function GymUnitCard() {
  return (
    <GymUnitsContainer>
      <UnitContainer>
        <strong>Aberto</strong>
        <h2>Vicente Linhares</h2>
        <p>Rua Tibúrcio Cavalcante, 1885 - Meireles</p>
        <p>Fortaleza, CE</p>

        <UnitDetails>
          <IconsContainer>
            <img src={requiredMask} alt="" />
            <img src={requiredMask} alt="" />
            <img src={requiredMask} alt="" />
            <img src={requiredMask} alt="" />
          </IconsContainer>
          <OpeningHours>
            <WeekSchedule>
              <Days>
                <h3>Seg. à Sex.</h3>
                <p>06h às 22h</p>
              </Days>
              <Days>
                <h3>Sáb.</h3>
                <p>09h às 18h</p>
              </Days>
            </WeekSchedule>
            <Days>
              <h3>Dom.</h3>
              <p>Fechada</p>
            </Days>
          </OpeningHours>
        </UnitDetails>
      </UnitContainer>
    </GymUnitsContainer>
  )
}
