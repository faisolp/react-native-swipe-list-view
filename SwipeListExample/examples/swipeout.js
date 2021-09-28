import React from 'react';
 import { View, Text, FlatList } from 'react-native';
 import Swipeout from 'react-native-swipeout';
 
export default class SwipeoutDemo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [{
        key: 1,
        title: 'first',
        rowOpen: false
      }, {
        key: 2,
        title: 'second',
        rowOpen: false
      }]
    }
    this.swipeoutBtns = [
        {
          text: 'Button'
        }
      ]
  }
  
  swipeoutOnOpen = index => {
    const dataSource = [].concat(this.state.dataSource);
    dataSource.forEach((item, mindex) => {
      item.rowOpen = mindex === index ? true : false;
    });
    this.setState({ dataSource });
  }
 
 delete = index => {
    let dataSource = [].concat(this.state.dataSource);
    dataSource.splice(index, 1);
  this.setState({ dataSource });
  }
 
 renderItem = ({ item, index }) => {
    <Swipeout
      autoClose
      onOpen={() => this.swipeoutOnOpen(index)}
      close={! this.state.dataSource[index].rowOpen}
      right={[{
        text: 'Delete',
        onPress: () => this.delete(index),
        type: 'delete',
        fontStyle: { color: '#fff', fontSize: 16 }
      }]}
    >
      <Text>{item.title}</Text>
    </Swipeout>
  }
 
 render() {
    return(<FlatList
      keyExtractor={(item) => item.key}
      data={this.state.dataSource}
      renderItem={this.renderItem}
    />)
  }
 }