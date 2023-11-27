import React, { Component, useEffect } from 'react'
import { ActivityIndicator, FlatList, ScrollView, StyleSheet, TextInput, View } from 'react-native'
import ApiFunctions from './apiService';
import ListComponent from './CustomComponents/ListComponent';
import CustomSearchBox from './CustomComponents/SearchBox';
import { useState } from 'react';

// let filterProductData;
// export default class AllProduct extends Component {

//     constructor(){
//         super();
//         this.state = {
//             loading:false,
//             productList: [],
//             searchField:""
//         }
//         console.log("1_constructor()")
//     }

//     getProductListData = async()=>{
//         ApiFunctions.getProductList('/products')
//         .then(response => response.json())
//         .then((responseJson)=>{
//             this.setState(()=>{return{productList: responseJson.products}})
//         })
//     }

//     componentDidMount(){
//         console.log("3_componentDidMount()")
//         this.getProductListData();
//     }

//     onSearch=(text)=>{
//         const currentText = text.toLocaleLowerCase();
//         this.setState(() => {return {searchField:currentText}})
//     }

//     filterCurrentProduct = ()=>{
//         let {searchField,productList} = this.state
//         filterProductData = productList.filter((item) => {
//             return item.title.toLocaleLowerCase().includes(searchField)
//                 || item.category.toLocaleLowerCase().includes(searchField)
//                 || item.description.toLocaleLowerCase().includes(searchField)
//         })
//     }
    
//     render() {
//         let {filterCurrentProduct,onSearch} = this;
//         filterCurrentProduct();
//         return (
//             <View style={styles.container}>
//                 <View style={{ flexDirection: 'row' }}>
//                     <CustomSearchBox onSearchHandler={onSearch}/>
//                 </View>
//                 <View style ={{ paddingBottom:120}}>
//                     <ListComponent products={filterProductData}/>
//                 </View>
//             </View>)
//     }
// }


//(#58)
export default function product() {
    console.log("render-function")

    //(#58)-1
    let [showActivityIndicator,setShowActivityIndicator] = useState(true)
    const [searchFieldTitle,setSearchFieldTitle] = useState("");
    const [searchFieldCategory,setSearchFieldCategory] = useState("");
    //(#60)
    //update from api
    let [productList,setProductList] = useState([]);
    let [filterProductData,setFilterProductData] = useState(productList)
    console.log({searchFieldTitle})
    

    useEffect(()=>{
        console.log("use effect one-------------1 run")
        ApiFunctions.getProductList('/products')
        .then(response => response.json())
        .then((responseJson)=>setProductList(responseJson.products))
        setShowActivityIndicator(false)
    },
    
    //(#60)-1 empty list because we want 
    [])
    
    useEffect(()=>{
        console.log("use effect one-------------2 run")
        const currentFilteredData = productList.filter((item) => {
            return item.title.toLocaleLowerCase().includes(searchFieldTitle)
            || item.category.toLocaleLowerCase().includes(searchFieldTitle)
            || item.description.toLocaleLowerCase().includes(searchFieldTitle)
        })
        setFilterProductData(currentFilteredData);
    },[searchFieldTitle,productList])

    const onSearch=(text)=>{
        const searchFieldTextValue = text.toLocaleLowerCase();
        setSearchFieldTitle(searchFieldTextValue)
    }
    const onSearchTwo =(text)=>{
        const searchFieldTextValue = text.toLocaleLowerCase();
        setSearchFieldCategory(searchFieldTextValue)
    }

    

    
    

    // console.log("filter data"+JSON.stringify(filterProductData))

    return (
    <View style={styles.container}>
        {showActivityIndicator? <ActivityIndicator animating={showActivityIndicator} size="large"/>:null} 
        <View style={{ flexDirection: 'row' }}>
            <CustomSearchBox onSearchHandler={onSearch} placeholder={"search with title"}/>
        </View>
        <View style={{ flexDirection: 'row' }}>
            <CustomSearchBox onSearchHandler={onSearchTwo} placeholder={"search with category"}/>
        </View>
        <View style ={{ paddingBottom:120}}>
            <ListComponent products={filterProductData}/>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },

})


// export default class AllProduct extends Component {

//     constructor(){
//         super();
//         this.state = {
//             loading:false,
//             productList: [],
//             searchField:""
//         }
//         console.log("1_constructor()")
//     }

//     getProductListData = async()=>{
//         ApiFunctions.getProductList('/products')
//         .then(response => response.json())
//         .then((responseJson)=>{
//             this.setState(()=>{return{productList: responseJson.products}})
//         })
//     }

//     componentDidMount(){
//         console.log("3_componentDidMount()")
//         this.getProductListData();
//     }

//     onSearch=(text)=>{
//         const currentText = text.toLocaleLowerCase();
//         this.setState(() => {return {searchField:currentText}})
//     }

//     filterCurrentProduct = ()=>{
//         let {searchField,productList} = this.state
//         filterProductData = productList.filter((item) => {
//             return item.title.toLocaleLowerCase().includes(searchField)
//                 || item.category.toLocaleLowerCase().includes(searchField)
//                 || item.description.toLocaleLowerCase().includes(searchField)
//         })
//     }
    
//     render() {
//         let {filterCurrentProduct,onSearch} = this;
//         filterCurrentProduct();
//         return (
//             <View style={styles.container}>
//                 <View style={{ flexDirection: 'row' }}>
//                     <CustomSearchBox onSearchHandler={onSearch}/>
//                 </View>
//                 <View style ={{ paddingBottom:120}}>
//                     <ListComponent products={filterProductData}/>
//                 </View>
//             </View>)
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         paddingHorizontal: 10,
//         paddingVertical: 10
//     },

// })

