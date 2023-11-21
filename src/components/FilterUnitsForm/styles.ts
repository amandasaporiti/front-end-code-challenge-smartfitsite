import styled from 'styled-components'

export const FilterUnitsFormContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 26px;
  border: 3px solid #dedddd;
  border-radius: 8px;
  margin-bottom: 60px;
  gap: 24px;

  header {
    display: flex;
    align-items: center;
    gap: 12px;

    img {
      width: 30px;
      height: 30px;
    }

    span {
      color: var(--light-grey);
      font-family: 'Gotham Light';
    }
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;

  h2 {
    color: var(--light-grey);
    font-size: 26px;
    font-family: 'Gotham Light';
    font-weight: 300;
  }

  hr {
    background-color: #dedddd;
  }
`

export const TrainingPeriod = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

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
      color: var(--light-grey);
    }

    p {
      font-family: 'Gotham Book';
      font-size: 18px;
      color: var(--light-grey);
    }
  }
`
export const ShowClosedGyms = styled.footer`
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

export const ButtonsForm = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  justify-content: center;
`

export const FindUnitBtn = styled.button`
  background-color: var(--yellow);
  padding: 16px;
  text-align: center;
  text-transform: uppercase;
  color: var(--dark-grey);
  font-size: 16px;
  font-family: 'Gotham Bold';
  border: 0;
  border-radius: 6px;
  width: 300px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`
export const ResetFormBtn = styled.button`
  padding: 16px;
  text-align: center;
  text-transform: uppercase;
  color: var(--dark-grey);
  font-size: 16px;
  font-family: 'Gotham Bold';
  border: 2px solid #dedddd;
  border-radius: 6px;
  width: 300px;
  background: transparent;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`
