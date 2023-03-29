import styled from 'styled-components'

export const ContainerBg = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #25262c;
`

export const ContainerCard = styled.div`
  background-color: #1b1c22;
  display: flex;
  flex-direction: row;
  width: 800px;
  height: 60vh;
  padding: 30px;
`

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 2px solid #334155;
  background-color: #25262c;
`

export const ButtonContainer = styled.ul`
  display: flex;
  border-bottom: 2px solid #334155;
  padding: 10px;
`

export const ButtonElement = styled.button`
  display: flex;
  background-color: transparent;
  color: ${props => (props.colorInput ? '#faff00' : '#f1f5f9')};
  border: none;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  text-align: center;
  padding-bottom: 10px;
`

export const Image = styled.img`
  width: 300px;
`

export const TextArea = styled.textarea`
  color: #ffffff;
  background-color: transparent;
  height: 30vh;
  border: none;
  outline: none;
  font-weight: ${props => (props.outline ? 'bold' : 'normal')};
  font-style: ${props => (props.outlineTwo ? 'italic' : 'normal')};
  text-decoration: ${props => (props.outlineThree ? 'underline' : 'normal')};
`
