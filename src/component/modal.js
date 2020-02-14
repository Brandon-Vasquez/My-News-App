import React, { Component } from 'react'
import { Dimensions, Modal, Share } from 'react-native' 
import { WebView } from 'react-native-webview'
import { Container, Header, Content, Body, Left, Icon, Right, Title, Button } from 'native-base'

const webViewHeight = Dimensions.get('window').height - 56

export default class ModalComponent extends Component {

  constructor(props) {
    super(props)
  }

  handleClose = () => {
    return this.props.onClose()
  }

  handleShare = () => {
    const {url, title} = this.props.articleData
    const message = `Hey, check this out I think you would be interested:\n\n${title}\n\nRead More @${url}\n\nShared via Right Now News App`
    return Share.share(
      {title, message, url: message},
      {dialogTitle: `Share ${title}`}
    )
  }

  render() {
    const { showModal, articleData } = this.props
    const { url } = articleData
    if( url != undefined ) {

    return (
      <Modal
        animationType="slide"
        transparent
        visible={showModal}
        onRequestClose={this.handleClose}
        >
          <Container style={{margin:15, marginBottom:0, backgroundColor:'#fff'}}>
            <Header style={{backgroundColor:'#66b266'}}>
              <Left>
                <Button onPress={this.handleClose} transparent>
                  <Icon name="close" style={{color: '#fff', fontSize: 28}}></Icon>
                </Button>
              </Left>
              <Body>
                <Title children={articleData.Title} style={{color: '#fff'}}></Title>
              </Body>
              <Right>
                <Button onPress={this.handleShare} transparent>
                  <Icon name="share" style={{color: '#fff', fontSize: 28}}></Icon>
                </Button>
              </Right>
            </Header>
            <Content contentContainerStyle={{height: webViewHeight}}>
              <WebView source={{uri: url}} style={{flex: 1}} 
              onError={this.handleClose} startInLoadingState
              scalesPageToFit
              />
            </Content>
          </Container>
      </Modal>
    )
    } else {
        return null
    }
  }
}