import {
  FilterUnitsFormContainer,
  FormContainer,
  ButtonsForm,
  FindUnitBtn,
  ResetFormBtn,
} from './styles'

import hourImg from '../../assets/icon-hour.png'
import { TrainingPeriod } from './components/TrainingPeriod'
import { ShowClosedGymsFilter } from './components/ShowClosedGymsFilter'

export function FilterUnitsForm() {
  return (
    <FilterUnitsFormContainer>
      <header>
        <img src={hourImg} alt="" />
        <span>Horário</span>
      </header>
      <FormContainer>
        <h2>Qual período quer treinar?</h2>
        <hr color="#f5f4f4" />

        {/* Manhã */}
        <TrainingPeriod availableSchedule="06:00 às 12:00" period="Manhã" />
        <hr color="#f5f4f4" />

        {/* Tarde */}
        <TrainingPeriod availableSchedule="12:01 as 18:00" period="Tarde" />
        <hr color="#f5f4f4" />

        {/* Noite */}
        <TrainingPeriod availableSchedule="18:01 às 23:00" period="Noite" />
        <hr color="#f5f4f4" />

        <ShowClosedGymsFilter />
        <ButtonsForm>
          <FindUnitBtn type="submit">Encontrar Unidade</FindUnitBtn>
          <ResetFormBtn type="reset">Limpar</ResetFormBtn>
        </ButtonsForm>
      </FormContainer>
    </FilterUnitsFormContainer>
  )
}
