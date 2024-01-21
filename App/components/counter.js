import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import styles from './style';
import { connect, useDispatch, useSelector } from 'react-redux';
import { decrementActionCreator, incrementActionCreator } from '../redux/counter/actionsCreators';

export default function CounterHook() {
    const count = useSelector((state)=> state.value)
    const dispatch = useDispatch();

    const incrementHandler = (value)=>{
        dispatch(incrementActionCreator(value))
    }

    const decrementHandler = (value)=>{
        dispatch(decrementActionCreator(value))
    }
    return (
        <View>
            <Text style={[styles.font22, styles.borderPaddingMargin10]}>{count}</Text>
            <View style={styles.paddingMargin10}>
                <Button onPress={()=>incrementHandler(5)} color={'blue'} title='increment'></Button>
                <Button onPress={()=>decrementHandler(2)} color={'red'} title='decrement'></Button>
            </View>

        </View>
    )
}

// function Counter({count,increment,decrement}) {
//   // let  = props;
//   return (
//     <View>
//       <Text style={[styles.font22,styles.borderPaddingMargin10]}>{count}</Text>
//       <View style={styles.paddingMargin10}>
//         <Button onPress={increment} color={'blue'} title='increment'></Button>
//         <Button onPress={decrement}  color={'red'} title='decrement'></Button>
//       </View>

//     </View>
//   )
// }

// //## 2.4.1
// const mapStateToProps = (state,ownProps)=>{
//   //## 2.4.4 
//   console.log(ownProps)
//   console.log("current state: "+ JSON.stringify(state))

//   // return object from here
//   return {
//     // what we send inside this object it will act as props to the component we ar currently connected
//     // this state is redux state.
//     // that we define in counter reducer.
//     // take the state as param and convert it to props.
//     count:state.value
//   }
// }

// //## 2.4.2
// const mapDispatchToProps = (dispatch)=>{
//   return{
//     increment:(value)=>dispatch(incrementActionCreator(value)),
//     decrement:(value)=>dispatch(decrementActionCreator(value))
//   }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(Counter);




