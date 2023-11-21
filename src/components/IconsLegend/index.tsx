import { fountain, lockerRoom, mask, towel } from './items'
import { IconsContainer, IconsLegendContainer, Legend } from './styles'

export function IconsLegend() {
  return (
    <IconsLegendContainer>
      <IconsContainer>
        <h2>Máscara</h2>
        <div>
          {mask.map((item) => (
            <Legend key={item.id}>
              <img src={item.icon} alt={item.alt} />
              <span>{item.recommendation}</span>
            </Legend>
          ))}
        </div>
      </IconsContainer>

      <IconsContainer>
        <h2>Toalha</h2>
        <div>
          {towel.map((item) => (
            <Legend key={item.id}>
              <img src={item.icon} alt={item.alt} />
              <span>{item.recommendation}</span>
            </Legend>
          ))}
        </div>
      </IconsContainer>

      <IconsContainer>
        <h2>Bebedouro</h2>
        <div>
          {fountain.map((item) => (
            <Legend key={item.id}>
              <img src={item.icon} alt={item.alt} />
              <span>{item.recommendation}</span>
            </Legend>
          ))}
        </div>
      </IconsContainer>

      <IconsContainer>
        <h2>Vestiários</h2>
        <div>
          {lockerRoom.map((item) => (
            <Legend key={item.id}>
              <img src={item.icon} alt={item.alt} />
              <span>{item.recommendation}</span>
            </Legend>
          ))}
        </div>
      </IconsContainer>
    </IconsLegendContainer>
  )
}
