import styled from 'styled-components'

export const LoginBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.bgColor ? '#ffffff' : ' #212121')};
  color: ${props => (props.bgColor ? '#000000' : '#ffffff')};
`
export const LoginCard = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  box-shadow: ${props => props.shadowEffect && '2px 2px 16px #cccccc'};
  border-radius: 10px;
  width: 60%;
  padding: 55px 20px;
  background-color: ${props => (props.bgColor ? '#FFFFFF' : '#0F0F0F')};
`
export const LoginPageLogo = styled.img`
  height: 30px;
  width: 170px;
  align-self: center;
  margin-bottom: 25px;
`
export const LoginInput = styled.input`
  padding: 8px;
  font-size: 18px;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 15px;
  border: 1px solid #cccccc;
  margin-top: 5px;
  outline: none;
  background-color: ${props => (props.bgColor ? '#ffffff' : ' #000000')};
  color: ${props => (props.bgColor ? '#000000' : '#ffffff')};
`

export const Label = styled.label`
  font-size: 17px;
  font-weight: 500;
  bcolor: ${props => (props.color ? '#7e858e' : '#ffffff')};
`

export const LabelShowPassword = styled.label`
  font-size: 17px;
  font-weight: 600;
`
