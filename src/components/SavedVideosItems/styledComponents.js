import styled from 'styled-components'

export const VideoTitle = styled.p`
  margin-top: 15px;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0px;
  color: ${props => (props.color ? '#000000' : '#ffffff')};
`

export const VideoViewCount = styled.p`
  margin-right: 30px;
  margin-top: 10px;
  font-size: 16px;
  color: #4c5a6d;
  font-weight: 500;
`

export const ChannelName = styled.p`
    margin-right: 30px;
  margin-top: 10px;
  font-size: 16px;
  color: #4c5a6d;
  font-weight: 500;

  @media (min-width: 768px){
    width: 100%;
    margin-bottom: 0px;
  }
`
