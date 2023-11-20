import { Header } from '../../components/Header'
import { IconsLegends } from '../../components/IconsLegend'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <IconsLegends />
    </HomeContainer>
  )
}
