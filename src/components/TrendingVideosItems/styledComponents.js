import styled from 'styled-components'

export const VideoTitle = styled.p`
  margin-top: 15px;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0px;
  color: ${props => (props.color ? '#000000' : '#ffffff')};
`