import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#F9F9F9' : '#181818')};
  padding: 15px;
  min-height: 77vh;
`

export const AdsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 40px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
`

export const SearchInputContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#ffffff' : '#181818')};
  border: 1px solid ${props => (props.bgColor ? '#E0E0E0' : '#313031')};
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    width: 40%;
  }
`
export const SearchInputBox = styled.input`
  background-color: transparent;
  border-width: 0px;
  outline: none;
  font-size: 18px;
  padding: 10px;
  width: 100%;
  color: #84858b;
`

export const SearchBtnContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#f4f4f4' : '#303031')};
  border: 1px solid ${props => (props.bgColor ? '#cccccd' : '#313031')};
  padding: 10px 35px;
`

export const NoDataFoundHeading = styled.h1`
  font-size: 23px;
  font-weight: 600;
  margin-bottom: 0px;
  color: ${props => (props.color ? '#000000' : '#ffffff')};
  margin-top: 25px;
`

export const NoDataFoundDescription = styled.p`
  font-size: 19px;
  font-weight: 500;
  color: #636d8a;
  margin-top: 10px;
`

export const SideBarContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#F9F9F9' : '#181818')};
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`
