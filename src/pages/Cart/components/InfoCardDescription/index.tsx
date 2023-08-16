import { IconProps } from 'phosphor-react'
import {
  InfoCardDescriptionContainer,
  InfoCardDescriptionTexts,
} from './styles'

interface InfoCardDescriptionProps {
  title: string
  subtitle: string
  color: 'purple' | 'yellow-dark'
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
}

export function InfoCardDescription({
  title,
  subtitle,
  color,
  Icon,
}: InfoCardDescriptionProps) {
  return (
    <InfoCardDescriptionContainer color={color}>
      <Icon weight="regular" size={22} />
      <InfoCardDescriptionTexts>
        <p>{title}</p>
        <p>{subtitle}</p>
      </InfoCardDescriptionTexts>
    </InfoCardDescriptionContainer>
  )
}
