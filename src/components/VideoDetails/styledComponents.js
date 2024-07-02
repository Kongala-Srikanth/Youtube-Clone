import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#F9F9F9' : '#0f0f0f')};
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex-grow: 1;
  padding-top: 80px;
`
export const SideBarContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#F9F9F9' : '#181818')};
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

export const VideoTitle = styled.p`
  color: ${props => (props.color ? '#30394C' : '#ffffff')};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
`

export const VideoDescription = styled.p`
  padding: 15px;
  line-height: 1.6;
  color: ${props => (props.color ? '#65717f' : '#ffffff')};
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0px;
`
export const SaveBtn = styled.button`
  font-size: 18px;
  margin-left: 5px;
  margin-right: 35px;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  margin-top: 25px;
  color: ${props => (props.color ? '#64748b' : '#2563eb')};
  font-weight: 500;
`

export const LikeBtn = styled.button`
  font-size: 18px;
  margin-left: 5px;
  margin-right: 35px;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  margin-top: 25px;
  color: ${props => (props.color ? '#64748b' : '#2563eb')};
  font-weight: 500;
`

export const DisLikeBtn = styled.button`
  font-size: 18px;
  margin-left: 5px;
  margin-right: 35px;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  margin-top: 25px;
  color: ${props => (props.color ? '#64748b' : '#2563eb')};
  font-weight: 500;
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

export const ChannelName = styled.p`
  color: #64748b;
  margin-bottom: 0px;
  margin-top: 10px;
  margin-left: 15px;
`
