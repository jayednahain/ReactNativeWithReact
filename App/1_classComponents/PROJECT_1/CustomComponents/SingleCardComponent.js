import { Image, Pressable, StyleSheet, Text, View,Animated } from 'react-native'
import React, { Component } from 'react'

export default class SingleCardComponent extends Component {
  constructor(){
    super();
    this.state = {
      zoomIn:false,
  }
  }
  onPressIn=()=>{
          this.setState({zoomIn:true})
          console.log("onPressIn")
        }
        onPressOut=()=>{
          this.setState({zoomIn:false})
          console.log("onPressOut")
        }

  render() {
    let { thumbnail,title } = this.props.currentItem;
    return (
          <Pressable 
          onPressIn={this.onPressIn}
          onPressOut={this.onPressOut}
          style={this.state.zoomIn?styles.zoomOut: styles.container}>
            <Animated.View style={{}}>
              <Image style={styles.imageStyle} source={{ uri: thumbnail }} />
                  <Text numberOfLines={1} style={styles.titleTextStyle}>{title}</Text>
                  <View style={{flexDirection:'row'}}>
                      {geStars(4)} 
                  </View>
            </Animated.View>
          </Pressable>
        )
  }
}


// export default class SingleCardComponent extends Component {
//     let { thumbnail,title } = props.currentItem;
//     let zoomIn =false;
//     onPressIn=()=>{
//       zoomIn=true;
//       console.log("onPressIn")
//     }
//     onPressOut=()=>{
//       zoomIn=false;
//       console.log("onPressOut")
//     }
//   return (
//     <Pressable 
//     onPressIn={this.onPressIn}
//     onPressOut={this.onPressOut}
//     style={zoomIn?styles.zoomOut: styles.container}>
//           <Image style={styles.imageStyle} source={{ uri: thumbnail }} />
//           <Text numberOfLines={1} style={styles.titleTextStyle}>{title}</Text>
//           <View style={{flexDirection:'row'}}>
//               {geStars(4)} 
//           </View>
//     </Pressable>
//   )
// }

function geStars(rating) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating - 1 < i) {
        stars.push(<Text>☆</Text>);
      } else {
        stars.push(<Text>★</Text>);
      }
    }
    return stars;
}

const styles = StyleSheet.create({

    container: {
      zIndex:10,
        flex:1,
        padding: 5,
        margin: 5,
        borderWidth: 0.5,
        borderTopRightRadius: 13,
        borderBottomLeftRadius: 13,
        elevation: 3,
        alignItems:'center'
    },
    zoomOut:{
      
      position:'relative',
      elevation:10,
      width:"80%",
      height:"50",
      padding: 5,
        margin: 5,
        borderWidth: 0.5,
        borderTopRightRadius: 13,
        borderBottomLeftRadius: 13,
        elevation: 3,
        alignItems:'center'
    },
    imageStyle: {
        width: 100,
        height: 100,
        marginTop: 5,
        elevation: 3,
        borderWidth:0.5
    },
    titleTextStyle: {
        fontSize: 15,
        color: 'black',
        padding:3,
    }
})