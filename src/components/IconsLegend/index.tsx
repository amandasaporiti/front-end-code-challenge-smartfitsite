import RequiredMask from '../../assets/required-mask.png'
import RecommendedMask from '../../assets/recommended-mask.png'

import RequiredTowel from '../../assets/required-towel.png'
import RecommendedTowel from '../../assets/recommended-towel.png'

import RequiredFountain from '../../assets/forbidden-fountain.png'
import RecommendedFountain from '../../assets/partial-fountain.png'

import RequiredLockerroom from '../../assets/required-lockerroom.png'
import RecommendedLockerroom from '../../assets/partial-lockerroom.png'
import ForbiddenLockerroom from '../../assets/forbidden-lockerroom.png'

import { IconsContainer, IconsLegendContainer, Legend } from './styles'

export function IconsLegends() {
  return (
    <IconsLegendContainer>
      <IconsContainer>
        <h2>Máscara</h2>
        <div>
          <Legend>
            <img src={RequiredMask} alt="Máscara Obrigatória" />
            <span>Obrigatório</span>
          </Legend>
          <Legend>
            <img src={RecommendedMask} alt="Máscara Opcional" />
            <span>Recomendado</span>
          </Legend>
        </div>
      </IconsContainer>

      <IconsContainer>
        <h2>Toalha</h2>
        <div>
          <Legend>
            <img src={RequiredTowel} alt="Toalha Obrigatória" />
            <span>Obrigatório</span>
          </Legend>
          <Legend>
            <img src={RecommendedTowel} alt="Toalha Opcional" />
            <span>Recomendado</span>
          </Legend>
        </div>
      </IconsContainer>

      <IconsContainer>
        <h2>Bebedouro</h2>
        <div>
          <Legend>
            <img src={RecommendedFountain} alt="Bebedouro Parcial" />
            <span>Parcial</span>
          </Legend>
          <Legend>
            <img src={RequiredFountain} alt="Bebedouro Proibido" />
            <span>Proibido</span>
          </Legend>
        </div>
      </IconsContainer>
      <IconsContainer>
        <h2>Vestiários</h2>
        <div>
          <Legend>
            <img src={RequiredLockerroom} alt="Vestiário Livre" />
            <span>Liberado</span>
          </Legend>
          <Legend>
            <img src={RecommendedLockerroom} alt="Vestiário Parcial" />
            <span>Parcial</span>
          </Legend>
          <Legend>
            <img src={ForbiddenLockerroom} alt="Vestiário Fechado" />
            <span>Fechado</span>
          </Legend>
        </div>
      </IconsContainer>
    </IconsLegendContainer>
  )
}
