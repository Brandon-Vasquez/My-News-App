import React, { Component } from 'react'
import { ListItem, Left, Right, Thumbnail, Body, Text, Button, View } from 'native-base'
import TimeAgo from './time'

export default class DataItem extends Component {

  constructor(props) {
    super(props)
    this.data = props.data
  }

  render() {
    return(
      <ListItem thumbnail>
        <Left>
          <Thumbnail square source={{ uri: this.data.multimedia[1].url }} />
        </Left>
        <Body>
          <Text numberOfLines={2}>{this.data.title}</Text>
          <Text note numberOfLines={2}>{this.data.abstract}</Text>
          <View style={{ flex: 1, flexDirection: 'row', marginTop: 5, marginLeft: 0 }}>
            <TimeAgo time={this.data.published_date} />
          </View>
        </Body>
        <Right>
          <Button transparent>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    )
  }


}