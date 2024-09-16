import {View,Text,StyleSheet} from "react-native"


export  const UserData = (props)=>{

    return(
      <View style={{backgroundColor:"red",  margin:10, padding:20}}>
        <Text style={{ color: "white", fontSize: 20, fontWeight:"bold" }}>Name: Surbhi</Text>
        <Text style={styles.textBox} >{props.data}</Text>
        <Text style={styles.textBox}>{props.age}</Text>

      </View>
    )
  }
  const styles = StyleSheet.create({
    textBox: 
    {
        color:"white",
        fontSize:40,
        backgroundColor:"gray",
        padding:10,
        margin:10,
        borderRadius:10,
        borderColor:"white",
        borderWidth:2
  }
  })