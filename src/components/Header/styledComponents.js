import styled from 'styled-components'

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  background-color: ${props => (props.bgColor ? '#ffffff' : '#212121')};
`

export const IconBtn = styled.button`
  background-color: transparent;
  margin: 0px;
  padding: 0px;
  outline: none;
  cursor: pointer;
  border-width: 0px;
  color: ${props => (props.color ? '#000000' : '#ffffff')};
`

export const LogoutButton = styled.button`
  background-color: transparent;
  outline: none;
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.bgColor ? '#3b82f6' : '#ffffff')};
  border: 2px solid;
  border-color: ${props => (props.bgColor ? '#3b82f6' : 'ffffff')};
  cursor: pointer;
  padding: 5px 15px;
  border-radius: 5px;
`

export const PopContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#ffffff' : '#212121')};
  color: ${props => (props.bgColor ? '#3b82f6' : '#ffffff')};
  padding: 10px;
  border-radius: 5px;
  width: 60%;

  @media (min-width: 768px) {
    width: 40%;
  }
`

/*
export const PopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  background-color: ${props => (!props.bgColor ? '#212121' : '#ffffff')};
  height: 150px;

  @media (max-width: 767px) {
    width: 80vw;
  }

  @media (min-width: 768px) {
    width: 30vw;
  }
`
*/
