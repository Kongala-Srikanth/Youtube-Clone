import styled from 'styled-components'

export const SmallDeviceSideBar = styled.div`
  background-color: ${props => (props.bgColor ? '#FFFFFF' : '#212121')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const BackgroundContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#FFFFFF' : '#212121')};

  padding-top: 50px;
  width: 50%;
  display: flex;
  flex-direction: column;
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