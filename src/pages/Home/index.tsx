import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { GymUnitCard } from '../../components/GymUnitCard'
import { IconsLegends } from '../../components/IconsLegend'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <IconsLegends />
      <GymUnitCard />
      <Footer />
    </HomeContainer>
  )
}
