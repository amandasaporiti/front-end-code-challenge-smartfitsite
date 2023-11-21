import styled from 'styled-components'

export const ShowClosedGymsContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    input {
      height: 20px;
      width: 20px;
      border: 3px solid var(--light-grey);
    }

    label {
      font-family: 'Gotham Book';
      font-size: 18px;
      color: var(--dark-grey);
    }

    h3 {
      font-family: 'Gotham Book';
      font-size: 18px;
      color: var(--dark-grey);
      font-weight: 400;
    }

    strong {
      font-family: 'Gotham Bold';
      color: black;
      font-size: 22px;
    }
  }
`
