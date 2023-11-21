import {
  FilterUnitsFormContainer,
  FormContainer,
  ShowClosedGyms,
  TrainingPeriod,
  ButtonsForm,
  FindUnitBtn,
  ResetFormBtn,
} from './styles'
import hourImg from '../../assets/icon-hour.png'

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
        <TrainingPeriod>
          <div>
            <input type="radio" id="morning" />
            <label htmlFor="morning">Manhã</label>
          </div>
          <div>
            <p>06:00 às 12:00</p>
          </div>
        </TrainingPeriod>
        <hr color="#f5f4f4" />
        {/* Tarde */}
        <TrainingPeriod>
          <div>
            <input type="radio" id="afternoon" />
            <label htmlFor="afternoon">Tarde</label>
          </div>
          <div>
            <p>12:01 às 18:00</p>
          </div>
        </TrainingPeriod>
        <hr color="#f5f4f4" />
        {/* Noite */}
        <TrainingPeriod>
          <div>
            <input type="radio" id="evening" />
            <label htmlFor="evening">Noite</label>
          </div>
          <div>
            <p>18:01 às 23:00</p>
          </div>
        </TrainingPeriod>
        <hr color="#f5f4f4" />

        <ShowClosedGyms>
          <div>
            <input type="checkbox" id="closedGyms" />
            <label htmlFor="closedGyms">Exibir unidades fechadas</label>
          </div>
          <div>
            <h3>
              Resultados encontrados: <strong>0</strong>
            </h3>
          </div>
        </ShowClosedGyms>
        <ButtonsForm>
          <FindUnitBtn type="submit">Encontrar Unidade</FindUnitBtn>
          <ResetFormBtn type="reset">Limpar</ResetFormBtn>
        </ButtonsForm>
      </FormContainer>
    </FilterUnitsFormContainer>
  )
}
