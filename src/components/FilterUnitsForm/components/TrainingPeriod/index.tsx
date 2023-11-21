import { TrainingPeriodContainer } from './styles'

interface TrainingPeriodProps {
  availableSchedule: string
  period: string
}

export function TrainingPeriod({
  availableSchedule,
  period,
}: TrainingPeriodProps) {
  return (
    <TrainingPeriodContainer>
      <div>
        <input type="radio" id={period} />
        <label htmlFor={period}>{period}</label>
      </div>
      <div>
        <p>{availableSchedule}</p>
      </div>
    </TrainingPeriodContainer>
  )
}
