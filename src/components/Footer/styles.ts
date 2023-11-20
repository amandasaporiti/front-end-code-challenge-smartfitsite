import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-grey);
  padding: 50px;
  gap: 16px;

  img {
    height: 100px;
    width: 150px;
  }

  p {
    color: white;
    font-size: 20px;
  }
`
