import styled from 'styled-components'
import { Button } from './Button'

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  border-bottom: 2px solid #000;
  background-color: #fff;
`

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
  text-align: center;
  color: #000;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin: 0 0 2rem 0;
  text-align: center;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const HeroImageContainer = styled.div`
  width: 100%;
  max-width: 600px;
  aspect-ratio: 16 / 9;
  border: 3px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  background-color: #f9f9f9;
`

const ImagePlaceholder = styled.span`
  font-size: 1.5rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>Hero header</HeroTitle>
      <HeroSubtitle>Sub headline</HeroSubtitle>
      <HeroImageContainer>
        <ImagePlaceholder>Hero image</ImagePlaceholder>
      </HeroImageContainer>
      <Button onClick={() => console.log('CTA clicked')}>CTA button</Button>
    </HeroContainer>
  )
}
