import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import style from '../Components/style';

export default class SteStateWorkFlow extends Component {
    constructor(){
        super();
        this.state={
            name:{fristName:"jayed",lastName:"nahian"},
            company:"TL"
        }
    }
    render() {
        return (
            <View>
                <Text style={style.h1}>{this.state.name.fristName}</Text>
                <Button
                    
                    //(#32-1)
                    // onPress={()=>{
                    //     this.setState({name:{fristName:'Niloy'}})
                    //     console.log(this.state)
                    // }}

                    //(#32-2)
                    // onPress={()=>{
                    //     this.setState(()=>{},()=>{})
                    // }}
                    //(#32-3)
                    
                    // onPress={()=>{
                    //     this.setState(()=>{
                    //         return{
                    //         name:{fristName:'Niloy'}
                    //         }
                    //     },()=>{})
                    // }}
                    onPress={()=>{
                        //(#32-4)
                        this.setState((state)=>{
                            console.log("OLD state"+JSON.stringify(state))
                            return{
                                name:{fristName:'Niloy'}
                            }
                        },()=>{
                            console.log("current state"+JSON.stringify(this.state))
                        })
                    }}
                    title='Press to change state'


                ></Button>
            </View>
        )
    }
}
