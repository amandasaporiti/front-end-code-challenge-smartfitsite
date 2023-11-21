import styled from 'styled-components'

export const GymUnitsContainer = styled.main`
  max-width: 1500px;
  width: 100%;
  margin: 80px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
`

export const UnitContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 26px;
  width: 100%;
  background-color: #f8f6f6;
  box-shadow: 1px 0px 10px 4px rgba(222, 221, 221, 0.71);
  border-radius: 8px;

  strong {
    color: var(--green);
    font-family: 'Gotham Bold';
    font-size: 18px;
  }

  h2 {
    margin: 14px 0;
    font-family: 'Gotham Bold';
    font-size: 36px;
  }

  p {
    color: var(--light-grey);
    font-family: 'Gotham Book';
    font-size: 18px;
    line-height: 24px;
    max-width: 330px;
  }
`

export const UnitDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #d8d3d3;
  margin-top: 18px;
`
export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin: 24px 0 32px;

  img {
    height: 100px;
    width: 100px;
  }
`

export const OpeningHours = styled.div`
  display: flex;
  flex-direction: column;
`

export const WeekSchedule = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`
export const Days = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 28px;

  h3 {
    font-family: 'Gotham Bold';
    font-size: 28px;
  }

  p {
    color: var(--dark-grey);
    font-size: 18px;
  }
`
