import React, { useState } from 'react';
import {Text, View, Button, Alert,StyleSheet, ScrollView } from "react-native"
// import { UserData } from './components/UserData';
// import Exstyles  from "./style"
// import Data from './components/Data';
// import FormData from './components/FormData';
// import List from './components/List';
// import CustomList from './components/CustomList';
import Grid from './components/Grid';



export default function App() {
  // const [count,setCount] = useState(0)
  // const [data,setData] = useState(0)

// const data = (val)=>{
//   // Alert.alert(val); 
//   // console.log(val); 
// }
// const handleTest = ()=>{
//   setCount(count + 1)
// }
  return (
 
  <>
  <ScrollView>
    <Grid/>
{/* <CustomList/> */}
{/* <List/> */}
    {/* <FormData/> */}
  {/* <Text style={appStyle.textBox}>Hello Text Component</Text>

  <View>
  <Button title="On Press " onPress={()=> data("hello")} color={"black"}></Button>

  <Button title='Update count' onPress={handleTest}></Button>
  <Text style={[appStyle.textBox, Exstyles.textBox,{margin:40}]}>{count}</Text>


  <Button title="change props" onPress={()=> setData(data +  1)}></Button>
  <UserData data={data} age={29}/>
 

   </View>

   <Data/> */}
   </ScrollView>
   
  </>
  );
}
// const appStyle = StyleSheet.create({
//   textBox: 
//   {
//       color:"red",
//       fontSize:20,
//       backgroundColor:"blue",
//       padding:10,
//       marginTop:50,
//       borderRadius:10,
//       borderColor:"white",
//       borderWidth:2
// }
// })