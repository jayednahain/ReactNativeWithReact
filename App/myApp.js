import React, { Component } from 'react'
import {  Text, TouchableOpacity, View } from 'react-native'
import Test from './components/sharedListCard'
import YourClassComponent from './components/listSelectCounter';
import Collapsible from 'react-native-collapsible';


export default function MyApp() {
    return (
        <View>
           <Test/>
           <YourClassComponent/>
           <CollapseCard title={"স্টপ ১ থেকে স্টপ ২  "}/>
        </View>
  )
}


export class CollapseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true,
    };
  }

  toggleCollapse = () => {
    this.setState((prevState) => ({
      isCollapsed: !prevState.isCollapsed,
    }));
  };

  showRoundedNumber =(count,address)=>{
	return(
	  <View style={{flexDirection:'row',paddingTop:6}}>
		<Text style={{
		  fontSize:10,
		  borderRadius:16,
		  backgroundColor:'#FFEDAA',
		  width:16,
		  height:16,
		  textAlign:'center',
		  }}>{count}</Text>
		<Text style={{paddingLeft:6,fontSize:12}}>{address}</Text>
	   </View>
	)
  }

  collapsedContent =()=>{
	const { stopLocation , startLocation, endLocation } = this.props;
	return(
		typeof stopLocation != 'undefined'? <Text>
			{stopLocation}</Text> : 
			<View>
				{this.showRoundedNumber('১','ডিআইটি প্রজেক্ট, মেরুল বাড্ডা')}
				{this.showRoundedNumber('২','ডিআইটি প্রজেক্ট, মেরুল বাড্ডা')}
			</View>
	);
  }


  render() {
    const { title, 
	} = this.props;
    const { isCollapsed } = this.state;

    return (
      <View style={{ 
        margin: 10, 
        backgroundColor: 'white', 
        borderRadius: 4,
        paddingHorizontal:12,
        paddingVertical:10,
		flexDirection:'row',
		justifyContent:'space-between'
		}}>
			
			<View style={{flexDirection:'row'}}>
				<View><Text>৬ কিঃ মিঃ</Text></View>
				<View>
					<TouchableOpacity onPress={this.toggleCollapse}>
						<Text style={{ fontSize: 14 ,backgroundColor:'red'}}>{title}</Text>
					</TouchableOpacity>
					<Collapsible collapsed={isCollapsed}>
						{this.collapsedContent()} 
					</Collapsible>
					<View style={{flexDirection:'row',paddingTop:6}}>
						<Text>শুরু: দুপুর ১২ঃ৫০</Text>
						<Text>শেষ: দুপুর ০১ঃ০০</Text>
					</View>
				</View>
				
			</View>


			<View>
				<Text>৬ কিঃ মিঃ</Text>
			</View>
       
      </View>
    );
  }
}





