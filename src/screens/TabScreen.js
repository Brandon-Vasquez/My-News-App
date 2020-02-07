import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Title } from 'native-base';
import Tab1 from './Tabs/tab1.js';
import Tab2 from './Tabs/tab2.js';
import Tab3 from './Tabs/tab3.js';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#66b266' }}hasTabs>
        <Left/>
          <Body>
            <Title style={{color:'#fff'}}>News App</Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor: '#66b266'}}>
          <Tab tabStyle={{backgroundColor: '#99cc99'}} 
          activeTabStyle={{backgroundColor: '#e5f2e5'}}
          textStyle={{color: '#fff'}} 
          activeTextStyle={{color: '#66b266'}} heading="Top Stories">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor: '#99cc99'}} 
          activeTabStyle={{backgroundColor: '#e5f2e5'}} 
          textStyle={{color: '#fff'}} 
          activeTextStyle={{color: '#66b266'}} heading="Most Popular">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor: '#99cc99'}} 
          activeTabStyle={{backgroundColor: '#e5f2e5'}} 
          textStyle={{color: '#fff'}} 
          activeTextStyle={{color: '#66b266'}} heading="Movie Reviews">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}