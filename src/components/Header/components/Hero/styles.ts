import styled from 'styled-components'

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  max-width: 1440px;
  width: 100%;
  margin: 80px auto;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    h1 {
      color: var(--dark-grey);
      text-transform: uppercase;
      max-width: 350px;
      font-family: 'Gotham Bold';
      font-size: 50px;
    }

    div {
      background-color: var(--dark-grey);
      height: 12px;
      width: 120px;
    }
  }

  p {
    width: 100%;
    font-size: 18px;
    line-height: 30px;
  }
`
