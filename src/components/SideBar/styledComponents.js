import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#FFFFFF' : '#212121')};
  height: 100vh;
  padding-top: 50px;
  width: 28%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    display: none;
  }
`
export const SideBarName = styled.p`
    color: ${props => props.isActive && '#ffffff'}};
    font-weight: ${props => props.isActive && '600'}};
    width: 50px;
    
`

export const ContactHeading = styled.p`
    color: ${props => (props.color ? '#000000' : '#ffffff')}};
    font-size: 20px;
    font-weight: 900;
    margin: 7px;
`

export const ContactDescription = styled.p`
    color: ${props => (props.color ? '#000000' : '#ffffff')}};
    font-size: 17px;
    font-weight: 500;
    margin: 7px;
`