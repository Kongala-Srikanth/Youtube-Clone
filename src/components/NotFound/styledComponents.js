import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#F9F9F9' : '#0f0f0f')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-grow: 1;
`
export const SideBarContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#F9F9F9' : '#181818')};
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`
export const NotFoundDescription = styled.p`
  color: #909090;
  font-size: 16px;
  text-align: center;
`

export const NotFoundImage = styled.img`
  width: 50%;
`

export const NotFoundHeading = styled.h1`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0px;
  color: ${props => (props.color ? '#313640' : '#ffffff')};
`
