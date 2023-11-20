import Logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <header>
        <img src={Logo} alt="SmartFit Logo" />
      </header>
    </HeaderContainer>
  )
}
