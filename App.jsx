import React, {useState} from "react";
//import type { PropsWithChildren } from "react";
import {View,Text,StyleSheet,Image, Pressable} from 'react-native'
import DiceOne from './assets/One.png'
import DiceTwo from './assets/Two.png'
import DiceThree from './assets/Three.png'
import DiceFour from './assets/Four.png'
import DiceFive from './assets/Five.png'
import DiceSix from './assets/Six.png'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

//rimport { useState } from 'react';
const Dice=({imageUrl})=>{
  return(
    <View>
      <Image style={styles.DiceImage} source={imageUrl}/>
    </View>
  )
}
const App =()=>{
  const [DiceImage,setDiceImage]=useState(DiceOne)
  const rollDice =()=>{
    let randomNumber=Math.floor(Math.random()*6)+1;
    switch(randomNumber){
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
      default:
        setDiceImage(DiceOne)
        break;
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={DiceImage}/>
      <Pressable onPress={rollDice}>
       <Text style={styles.rollthedicebtntext}> Roll The dice</Text>
      </Pressable>
    </View>
  );
}
export default App;
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',justifyContent:'center',
    backgroundColor:'#fff2f2'
  },
  DiceImage:{
    width:200,
    height:200
  },
  rollthedicebtntext:{
    paddingVertical:10,
    paddingHorizontal:40,
    borderWidth:2,
    borderRadius:8,
    borderColor:'#e5e0ff',
    fontSize:18,
    color:'#8ea7e9',
    fontWeight:'700',
    textTransform:'uppercase'
  }
});