import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { GymUnitCard } from '../../components/GymUnitCard'
import { IconsLegend } from '../../components/IconsLegend'
import { HomeContainer } from './styles'
import { FilterUnitsForm } from '../../components/FilterUnitsForm'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <FilterUnitsForm />
      <IconsLegend />
      <GymUnitCard />
      <Footer />
    </HomeContainer>
  )
}
