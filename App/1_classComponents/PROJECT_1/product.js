import React, { Component } from 'react'
import { FlatList, StyleSheet, TextInput, View } from 'react-native'
import SingleCardComponent from '../../Components/SingleCardComponent'
import ApiFunctions from '../apiService';
import EmptyCompoenet from '../../Components/EmptyCompoenet';
let filterProductData;

export default class AllProduct extends Component {

    constructor(){
        super();
        this.state = {
            loading:false,
            productList: [],
            searchField:""
        }
        console.log("1_constructor()")
    }

    getProductListData = async()=>{
        ApiFunctions.getProductList('/products')
        .then(response => response.json())
        .then((responseJson)=>{
            this.setState(()=>{
                return{productList: responseJson.products}
            },()=>{
             })
        })
    }

    componentDidMount(){
        console.log("3_componentDidMount()")
        this.getProductListData();
    }
    
    render() {
        filterProductData = this.state.productList.filter((item) => {
            return item.title.toLocaleLowerCase().includes(this.state.searchField)
                || item.category.toLocaleLowerCase().includes(this.state.searchField)
                || item.description.toLocaleLowerCase().includes(this.state.searchField)
                ;
        })
        return (
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        onChange={(event) => {
                            // console.log(event.target)
                        }}
                        onChangeText={(text) => {
                            const currentText = text.toLocaleLowerCase();
                            
                                this.setState(() => {return {searchField:currentText}})
                            
                        }}
                        placeholder='Search Product'
                        style={{
                            width:"100%",
                            fontSize: 20, borderWidth: 0.5,
                            borderRadius: 5,padding:5,
                            elevation:3}}
                    ></TextInput>
                </View>
                
                <FlatList
                    key={(item, index) => index}
                    numColumns={3}
                    keyExtractor={(item, index) => index}
                    data={filterProductData}
                    renderItem={({ item }) => (
                        <SingleCardComponent currentItem={item} key={Math.random()} />   
                    )}
                    ListEmptyComponent={
                       <EmptyCompoenet/> 
                    }
                />
            </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        flexWrap: "wrap",
        justifyContent:'space-around'
    },
    searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
      },
      searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "80%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
      },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
      },
})