import { ShowClosedGymsContainer } from './styles'

export function ShowClosedGymsFilter() {
  return (
    <ShowClosedGymsContainer>
      <div>
        <input type="checkbox" id="closedGyms" />
        <label htmlFor="closedGyms">Exibir unidades fechadas</label>
      </div>
      <div>
        <h3>
          Resultados encontrados: <strong>0</strong>
        </h3>
      </div>
    </ShowClosedGymsContainer>
  )
}
