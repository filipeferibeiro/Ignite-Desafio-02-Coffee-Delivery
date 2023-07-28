import styled from 'styled-components'
import InfoBackground from '../../../../assets/info-background.svg'

interface TopicsItemProps {
  variant: 'yellow-dark' | 'base-text' | 'yellow' | 'purple'
}

export const InfoContainerBackground = styled.div`
  background: url(${InfoBackground}) no-repeat;
  background-size: cover;

  height: 34rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: inherit;
    filter: blur(80px);
    z-index: -1;
  }
`

export const InfoContainerContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 5.75rem 0;
  background-color: rgba(0, 0, 0, 0);

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow:
    20px 20px 40px 20px rgba(250, 250, 250, 0.25) inset,
    -20px -20px 40px 20px rgba(250, 250, 250, 0.25) inset;
`

export const InfoContainer = styled.section`
  max-width: 71rem;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 3.5rem;
`

export const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const InfoTitle = styled.h1`
  font-family: 'Baloo 2';
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.3;

  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 71rem;

  color: ${(props) => props.theme.colors['base-title']};

  filter: blur(0px);
`

export const InfoSubTitle = styled.h2`
  color: ${(props) => props.theme.colors['base-subtitle']};
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.3;
  margin-top: 1rem;
`

export const TopicsContainer = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  column-gap: 2.5rem;
`

export const TopicsItem = styled.span<TopicsItemProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  & svg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;

    border-radius: 64px;

    background: ${(props) => props.theme.colors[props.variant]};
    color: ${(props) => props.theme.colors.background};
  }
`
