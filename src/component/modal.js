import React, { Component } from 'react'
import { Dimensions, Modal, Share } from 'react-native' 
import { WebView } from 'react-native-webview'
import { Container, Header, Content, Body, Left, Icon, Right, Title, Button } from 'native-base'

export default class ModalComponent extends Component {

  constructor(props) {
    super(props)
  }

  handleClose = () => {
    return this.props.onClose()
  }

  handleShare = () => {

  }

  render() {
    const { showModal, articleData } = this.props
    const { url } = articleData
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
                  <Icon name="close" style={{color: '#fff', fontSize: 12}}></Icon>
                </Button>
              </Left>
              <Body>
                <Title children={articleData.Title} style={{color: '#fff'}}></Title>
              </Body>
              <Right>
                <Button onPress={this.handleShare} transparent>
                  <Icon name="share" style={{color: '#fff', fontSize: 12}}></Icon>
                </Button>
              </Right>
            </Header>
            <Content>
              <WebView source={{uri: url}} style={{flex: 1}} 
              onError={this.handleClose} startInLoadingState
              scalesPageToFit
              />
            </Content>
          </Container>
      </Modal>
    )
  }
}