import React, { Component, useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'
import globalStyleSheet from '../../globalStyleSheet/globalStyle'

// functional component
export default function TimerApp() {
    console.log("render complete")
  const {centerView,visibleFontSize,paddingMarginAllSide5} = globalStyleSheet
  const [count,setCount] = useState(0)
  const [date,setDate] = useState(new Date())

  const clockTicking=()=>{
    setDate(new Date())
  }

  useEffect(()=>{
    console.log("timer started successfully")
    setInterval(clockTicking,1000)
  })

  const onClick =()=>{
    console.log("on click run!")
    setCount(count+1)
  }

  return (
    <View style={[centerView,paddingMarginAllSide5]}>
        <Text style={ [visibleFontSize,paddingMarginAllSide5]}>{count.toString()}</Text>
        <Text style={[visibleFontSize,paddingMarginAllSide5] }>{date.toLocaleTimeString()}</Text>
        <Button onPress={onClick} title='Press to update count'></Button>
    </View>
  )
}


// class component
// export default class TimerApp extends Component {
//     state={
//         count:0,
//         date:new Date()
//     }

//     componentDidMount(){
//         this.startTime();
//     }

//     startTime =()=>{
//         setInterval(()=>{
//             this.setState({date: new Date()})
//         },1000);
//     }
//     onClick =()=> {
        
//         this.setState((state)=>{
//             let {count} = state;
//             return {count:count+1};
//         }
//         );
   
//     }

//     render() {
//         const {date,count} = this.state
//         const {centerView,visibleFontSize,paddingMarginAllSide5} = globalStyleSheet
//         return (
//             <View style={[centerView,paddingMarginAllSide5]}>
//                 <Text style={ [visibleFontSize,paddingMarginAllSide5]}>{count}</Text>
//                 <Text style={[visibleFontSize,paddingMarginAllSide5] }>{date.toLocaleTimeString()}</Text>
//                 <Button onPress={this.onClick} title='Press to update count'></Button>
//             </View>
//         )
//     }
// }
