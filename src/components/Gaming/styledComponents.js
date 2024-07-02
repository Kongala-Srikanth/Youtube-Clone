import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#F9F9F9' : '#0f0f0f')};
  min-height: 100vh;
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
export const VideoTitle = styled.p`
  margin-top: 15px;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0px;
  color: ${props => (props.color ? '#000000' : '#ffffff')};
`

export const TrendingHeading = styled.h1`
  font-size: 27px;
  font-weight: 800;
  color: ${props => (props.color ? '#000000' : '#ffffff')};
`

export const TrendingCard = styled.div`
  background-color: ${props => (props.bgColor ? '#F1F1F1' : '#181818')};
  padding: 15px;
  display: flex;
  align-items: center;
`

export const FireIcon = styled.span`
  color: #ff031c;
  background-color: ${props => (props.bgColor ? '#E1E9F0' : '#0F0F0F')};
  font-size: 30px;
  border-radius: 50px;
  padding: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`
