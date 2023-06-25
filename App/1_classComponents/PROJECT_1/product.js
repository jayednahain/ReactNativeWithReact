import React, { Component } from 'react'
import { FlatList, ScrollView, StyleSheet, TextInput, View } from 'react-native'
import SingleCardComponent from './CustomComponents/SingleCardComponent';
import ApiFunctions from '../apiService';
import EmptyCompoenet from './CustomComponents/EmptyCompoenet';
import ListComponent from './CustomComponents/ListComponent';
import CustomSearchBox from './CustomComponents/SearchBox';

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
            this.setState(()=>{return{productList: responseJson.products}})
        })
    }

    componentDidMount(){
        console.log("3_componentDidMount()")
        this.getProductListData();
    }

    onSearch=(text)=>{
        const currentText = text.toLocaleLowerCase();
        this.setState(() => {return {searchField:currentText}})
    }

    filterCurrentProduct = ()=>{
        let {searchField,productList} = this.state
        filterProductData = productList.filter((item) => {
            return item.title.toLocaleLowerCase().includes(searchField)
                || item.category.toLocaleLowerCase().includes(searchField)
                || item.description.toLocaleLowerCase().includes(searchField)
        })
    }
    
    render() {
        let {filterCurrentProduct,onSearch} = this;
        filterCurrentProduct();
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <CustomSearchBox onSearchHandler={onSearch}/>
                </View>
                <View style ={{ paddingBottom:120}}>
                    <ListComponent products={filterProductData}/>
                </View>
            </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        // paddingVertical:20
       
    },

})