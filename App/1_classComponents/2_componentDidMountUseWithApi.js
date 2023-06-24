import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import style from '../Components/style';
import ApiFunctions from './apiService';

//(#37)
export default class ComponentDidMountUseWithApi extends Component {
    constructor(){
        super();
        this.state={
            productList:[]
        }
        console.log("1_constructor()")
    }

    getProductListData = async()=>{
        ApiFunctions.getProductList('/products')
        .then(response => response.json())
        .then((responseJson)=>{
            // console.log(responseJson);
            this.setState(()=>{
                return{productList: responseJson}
            },()=>{
                // console.log(this.state)
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
                
                <Text style={style.h1}></Text>
                <Button 
                    onPress={()=>{
                        //(#32-4)
                        this.setState((state)=>{
                            console.log("OLD state"+JSON.stringify(state))
                            return{
                               
                            }
                        },()=>{
                            
                        })
                    }}
                    title='Press to change state'
                ></Button>
            </View>
        )
    }
}
