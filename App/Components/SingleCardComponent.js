import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SingleCardComponent(props) {
    let { thumbnail,title } = props.currentItem;
  return (
      <View style={styles.container}>
          <Image style={styles.imageStyle} source={{ uri: thumbnail }} />
          <Text numberOfLines={1} style={styles.titleTextStyle}>{title}</Text>
          <View style={{flexDirection:'row'}}>
            {geStars(4)} 
          </View>
      </View>
  )
}

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
    //using view
    // container: {
    //     padding: 5,
    //     margin: 5,
    //     width: 100,
    //     height: 50,
    //     borderWidth: 0.5,
    //     borderTopRightRadius: 13,
    //     borderBottomLeftRadius: 13,
    //     elevation:3
    // }

    // using flat list
    container: {
        flex:1,
        padding: 5,
        margin: 5,
        // width: "20%",
        // height:"5%",
        borderWidth: 0.5,
        borderTopRightRadius: 13,
        borderBottomLeftRadius: 13,
        elevation: 3,
        alignItems:'center'
    }
    ,
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