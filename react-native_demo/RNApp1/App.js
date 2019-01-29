/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

class StickyListHeader extends Component {
  render() {
    return (
      <View style={{ height: 30, backgroundColor: '#ccc', zIndex: 2 }}>
        <Text>我才是真的Header！</Text>
      </View>
    );
  }
}

class TestView extends Component {
  _renderListItem({ item, index }) {
    return (
      <View style={{ width: 375 / 3, height: 100, backgroundColor: 'orange' }}>
        <Text>{item.name}</Text>
      </View>
    );
  }

  _renderParentListItem = ({ item }) => {
    return (
      <View>
        <View style={{ width: 375, height: 100, backgroundColor: 'red', marginBottom: 5, marginTop: 5 }}>
          <Text>我是一个广告</Text>
        </View>
        <FlatList data={item} renderItem={this._renderListItem} numColumns={3} />
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={[this.props.dataList]}
        renderItem={this._renderParentListItem}
        ListHeaderComponent={<StickyListHeader />}
        stickyHeaderIndices={[0]}
      />
    );
  }
}

export default class App extends Component {
  dataList = new Array(100).fill(0).map((x, i) => ({ name: `X${i}`, key: `key${i}` }));

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: '#ddd' }}>
        <TestView dataList={this.dataList} />
      </SafeAreaView>
    );
  }
}
