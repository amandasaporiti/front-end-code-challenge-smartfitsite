import styled from 'styled-components'

export const TrainingPeriodContainer = styled.div`
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
