import { Image, Pressable, StyleSheet, Text, View,Animated, ImageBackground } from 'react-native'
import React, { Component } from 'react'

export default class SingleCardComponent extends Component {
  constructor(){
    super();
    this.state = {
      zoomIn: false,
      fadeAnimation: new Animated.Value(0),
      // initialState: new Animated.ValueXY({x:0,y:0})
  }
  }

  renderZoomOutView = () => {
    let { thumbnail,title } = this.props.currentItem;
    return (
      <View>
        <Image style={styles.imageStyle} source={{ uri: thumbnail }} />
        <Text numberOfLines={1} style={styles.titleTextStyle}>{title}</Text>
        <View style={{ flexDirection: 'row' }}>
          {geStars(4)} 
        </View>
      </View>
    );
  }
  triangleCorner = () => {
    return <View style={[styles.triangleCorner,styles.triangleCornerTopRight]} />;
  }

  renderZoomInView = () => {
    let { thumbnail,title,description,price } = this.props.currentItem;
    return (
      <View style={{flexDirection:'row'}}>
        
        <ImageBackground style={styles.imageStyleZoom} source={{ uri: thumbnail }} >
        <View style={{position: 'absolute'}}>
            {/* <Text>Centered text</Text> */}
            {this.triangleCorner()}
        </View>
        </ImageBackground>
        <View style={{paddingLeft: 10, paddingRight: 20,width:"68%" }}>
          <View style={{ flexDirection: 'row' }}>
            {geStars(4)} 
          </View>
          <Text style={styles.priceStyle} >$ {price}</Text>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text>{description}</Text>
        </View>

      </View>
    );
  }

  onPressIn = () => {
    this.setState({ zoomIn: true })
    console.log("onPressIn")
    // this.props.changeZoomLayout(true);
    Animated.timing(this.state.fadeAnimation, {
      toValue: 1, // target value for fade animation
      duration: 1000, // animation duration in milliseconds
      useNativeDriver: true, // enable native driver for better performance
    }).start();
  }
  onPressOut=()=>{
    this.setState({zoomIn:false})
    console.log("onPressOut")
  }

  render() {
    return (
        <Pressable 
          onPressIn={this.onPressIn}
          onPressOut={this.onPressOut}
          style={this.state.zoomIn ? styles.zoomOut : styles.container}>
            {this.state.zoomIn? this.renderZoomInView():this.renderZoomOutView()}
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
  triangleCorner: {
    transform: [{ rotate: "90deg" }],
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: 100,
    borderTopWidth: 100,
    borderRightColor: "transparent",
    borderTopColor: "red",
  },
  // triangleCornerTopRight: {
  //   transform: [{ rotate: "90deg" }],
  // },


  priceStyle: {
    fontSize: 25,
    fontWeight:'700'
  },
  titleStyle: {
    paddingRight:5,
    fontSize: 15,
    color:'black',
    fontWeight:'500'
  }
  ,
  container: {
    backgroundColor: 'yellow',
    // position: 'absolute',
    zIndex: 1,
    flex:1,
    // padding: 5,
    margin: 5,
    // borderWidth: 0.5,
    // borderTopRightRadius: 13,
    // borderBottomLeftRadius: 13,
    // // elevation: 3,
    // alignItems:'center'
    },
  zoomOut: {
    // flex:1,
    // paddingHorizontal:10,
    backgroundColor:'black',
    position: 'absolute',
    top: 50,
    // zIndex: 2,
    elevation: 10,
    // width: "98%",
    height:"110%",
    // padding: 5,
    // margin: 5,
    // borderWidth: 0.5,
    // borderTopRightRadius: 13,
    // borderBottomLeftRadius: 13,
    // elevation: 3,
    // alignItems:'center'
    },
    imageStyle: {
      width: 100,
      height: 100,
      marginTop: 5,
      // elevation: 3,
      borderWidth:0.5
  },
  imageStyleZoom: {
    width: 145,
    height: 145,
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