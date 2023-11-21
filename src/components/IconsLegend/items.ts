import RequiredMask from '../../assets/required-mask.png'
import RecommendedMask from '../../assets/recommended-mask.png'

import RequiredTowel from '../../assets/required-towel.png'
import RecommendedTowel from '../../assets/recommended-towel.png'

import RequiredFountain from '../../assets/forbidden-fountain.png'
import RecommendedFountain from '../../assets/partial-fountain.png'

import RequiredLockerroom from '../../assets/required-lockerroom.png'
import RecommendedLockerroom from '../../assets/partial-lockerroom.png'
import ForbiddenLockerroom from '../../assets/forbidden-lockerroom.png'

const mask = [
  {
    id: 1,
    icon: RequiredMask,
    recommendation: 'Obrigatório',
    alt: 'Máscara Obrigatória',
  },
  {
    id: 2,
    icon: RecommendedMask,
    recommendation: 'Recomendado',
    alt: 'Máscara Opcional',
  },
]

const towel = [
  {
    id: 1,
    icon: RequiredTowel,
    recommendation: 'Obrigatório',
    alt: 'Toalha Obrigatória',
  },
  {
    id: 2,
    icon: RecommendedTowel,
    recommendation: 'Recomendado',
    alt: 'Toalha Opcional',
  },
]

const fountain = [
  {
    id: 1,
    icon: RecommendedFountain,
    recommendation: 'Parcial',
    alt: 'Bebedouro Parcial',
  },
  {
    id: 2,
    icon: RequiredFountain,
    recommendation: 'Proibido',
    alt: 'Bebedouro Proibido',
  },
]

const lockerRoom = [
  {
    id: 1,
    icon: RequiredLockerroom,
    recommendation: 'Liberado',
    alt: 'Vestiário Livre',
  },
  {
    id: 2,
    icon: RecommendedLockerroom,
    recommendation: 'Parcial',
    alt: 'Vestiário Parcial',
  },
  {
    id: 3,
    icon: ForbiddenLockerroom,
    recommendation: 'Fechado',
    alt: 'Vestiário Fechado',
  },
]

export { mask, towel, lockerRoom, fountain }
