import Logo from '../../assets/logo.svg'

import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <img src={Logo} alt="SmartFit Logo" />
      <p>Todos os direitos reservados - 2020</p>
    </FooterContainer>
  )
}
