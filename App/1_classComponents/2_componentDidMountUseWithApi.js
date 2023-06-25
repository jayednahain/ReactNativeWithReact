import React, { Component } from 'react'
import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import style from '../Components/style';
import ApiFunctions from './apiService';
import SingleCardComponent from '../Components/SingleCardComponent';

//(#37)
export default class ComponentDidMountUseWithApi extends Component {
    constructor(){
        super();
        this.state = {
            loading:false,
            productList:[]
        }
        console.log("1_constructor()")
    }

    getProductListData = async()=>{
        ApiFunctions.getProductList('/products')
        .then(response => response.json())
        .then((responseJson)=>{
            // console.log(responseJson.products);
            this.setState(()=>{
                return{productList: responseJson.products}
            },()=>{
                console.log(this.state.productList)
             })
        })
    }

    componentDidMount(){
        console.log("3_componentDidMount()")
        this.getProductListData();

    }
    render() {
        console.log("2_render()")
        return (
            <View>
                <Text style={style.h1}>Product List</Text>
                {/* <View style={styles.container}>
                {this.state.productList.map((singleProduct) => { 
                    return (
                        <SingleCardComponent currentItem={singleProduct}/>
                    );
                })}
                </View> */}
                <FlatList
                    numColumns={3}
                    keyExtractor={(item, index) => index}
                    data={this.state.productList}
                    renderItem={({ item }) => (
                        <SingleCardComponent currentItem={item}/>   
                      )}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        flexWrap: "wrap",
        justifyContent:'space-around'
    }
})