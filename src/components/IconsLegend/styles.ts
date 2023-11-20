import styled from 'styled-components'

export const IconsLegendContainer = styled.section`
  display: flex;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  background-color: #f5f4f4;
  padding: 35px;
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    text-align: center;
    font-family: 'Gotham Bold';
  }

  div {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`

export const Legend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  img {
    width: 100px;
    height: 100px;
  }

  span {
    font-size: 20px;
  }
`
