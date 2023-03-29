import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'

import {
  ButtonElement,
  ContainerBg,
  ContainerCard,
  HeadingContainer,
  Heading,
  Image,
  TextContainer,
  ButtonContainer,
  TextArea,
} from './styledComponents'

import './index.css'

class TextEditor extends Component {
  state = {
    textAreaInput: '',
    VscBoldInput: false,
    GoItalicInput: false,
    AiOutlineUnderlineInput: false,
  }

  onChangeText = event => {
    this.setState({textAreaInput: event.target.value})
  }

  onClickVscBold = () => {
    this.setState(preVState => ({
      VscBoldInput: !preVState.VscBoldInput,
      colorOutline: !preVState.colorOutline,
    }))
  }

  onClickGoItalic = () => {
    this.setState(preVState => ({GoItalicInput: !preVState.GoItalicInput}))
  }

  onClickAiOutlineUnderline = () => {
    this.setState(preVState => ({
      AiOutlineUnderlineInput: !preVState.AiOutlineUnderlineInput,
    }))
  }

  render() {
    const {
      textAreaInput,
      VscBoldInput,
      GoItalicInput,
      AiOutlineUnderlineInput,
    } = this.state

    return (
      <ContainerBg className="bg-container">
        <ContainerCard className="card-container">
          <HeadingContainer>
            <Heading className="text-heading">Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </HeadingContainer>
          <TextContainer>
            <ButtonContainer>
              <li className="list-item">
                <ButtonElement
                  type="button"
                  onClick={this.onClickVscBold}
                  data-testid="bold"
                  colorInput={VscBoldInput}
                >
                  <VscBold size={25} />
                </ButtonElement>
              </li>
              <li className="list-item">
                <ButtonElement
                  type="button"
                  onClick={this.onClickGoItalic}
                  data-testid="italic"
                  colorInput={GoItalicInput}
                >
                  <GoItalic size={25} />
                </ButtonElement>
              </li>
              <li className="list-item">
                <ButtonElement
                  type="button"
                  onClick={this.onClickAiOutlineUnderline}
                  data-testid="underline"
                  colorInput={AiOutlineUnderlineInput}
                >
                  <AiOutlineUnderline size={25} />
                </ButtonElement>
              </li>
            </ButtonContainer>
            <TextArea
              onChange={this.onChangeText}
              value={textAreaInput}
              outline={VscBoldInput}
              outlineTwo={GoItalicInput}
              outlineThree={AiOutlineUnderlineInput}
            />
          </TextContainer>
        </ContainerCard>
      </ContainerBg>
    )
  }
}

export default TextEditor
