import React, { Component } from 'react';
import { Alert, View, ActivityIndicator, Text } from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import DataItem from '../../component/data-item'
import Modal from '../../component/modal'
import { getArticles } from '../../service/news'

export default class Tab3 extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {}
    }
  }

  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData
    })
  }

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {}
    })
  }

  componentDidMount() {
    getArticles('arts').then(data => {
      this.setState({
        isLoading: false,
        data: data
      })
    }, error => {
      Alert.alert('Error', 'Something went wrong')
    })
  }

  render() {
    console.log(this.state.data)

    let view = this.state.isLoading ? (
      <View>
        <ActivityIndicator animating={this.state.isLoading} />
        <Text style={{marginTop: 10}}>Please Wait..</Text>
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={(item) =>{
          return <DataItem onPress={this.handleItemDataOnPress} data={item} />
        }}
      />
    )

    return (
      <Container>
        <Content>
          {view}
        </Content>
        <Modal
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}