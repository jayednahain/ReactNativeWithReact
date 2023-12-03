import React, { Component } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import ModalBuilder from './components/modalBuilder'
import { Button } from '@rneui/base'

export default function MyApp() {
    return (
        <View>
           <Test/>
           <YourClassComponent/>
        </View>
  )
}

function Test(first) {
    return(
        <View style={{
            flexDirection:'row',
            justifyContent:"space-between",
            paddingHorizontal:12,
            paddingVertical:15,
            borderWidth:1,
            borderRadius:6,
            borderColor:"#EBEBEB"
            }}>
            <View></View>
            <View>
                <Text style ={{}}>অচেনা পথিক</Text>
                <Text>01838200551</Text>
            </View>
            <View>
                <View>
                <Text style={{
                    backgroundColor:"#651FFF1A",
                    paddingHorizontal:4,
                    paddingVertical:2
                }}>৩০ দিনের জন্য</Text>
                </View>
                
                <Text>মেয়াদঃ ৩০/১২/২০২৩</Text>
            </View>
            <View></View>
        </View>
    )
}





class YourClassComponent extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        data: [
          { "name": "jayed Khan", "id": 1 },
          { "name": "jayed Khan", "id": 2 },
          { "name": "jayed Khan", "id": 3 },
          { "name": "jayed Khan", "id": 22 },
            { "name": "jayed Khan", "id": 24 },
            { "name": "jayed Khan", "id": 25 },
            { "name": "jayed Khan", "id": 26 }
        ],
        selectedItems: [],
        counter: 0,
      };
    }

    handleReset = () => {
      this.setState({ selectedItems: [], counter: 0 });
    };

    renderItem = ({ item }) => (
        <ListItem
          item={item}
          onPress={() => this.handleItemPress(item)}
          isSelected={this.state.selectedItems.includes(item.id)}
        />
      );
  
    handleItemPress = (item) => {
      let selectedItems = [...this.state.selectedItems];
      if (selectedItems.includes(item.id)) {
        selectedItems = selectedItems.filter(selectedId => selectedId !== item.id);
      } else {
        selectedItems.push(item.id);
      }
      this.setState({ selectedItems, counter: selectedItems.length });
    };

    header = ()=>{
      return(
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
        <Text>Selected Items: {this.state.counter}</Text>
        <Button title="Reset" onPress={this.handleReset} />
      </View>
      )
    }
  
    render() {
      return (
        <FlatList
        ListHeaderComponent={this.header(0)}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      );
    }
  }

  const ListItem = ({ item, onPress, isSelected }) => (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: isSelected ? 'lightblue' : 'white',
        padding: 10,
        marginBottom: 5,
        borderRadius: 5,
        borderWidth:1,
        borderRadius:6,
        borderColor:"#EBEBEB",
      }}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );


