import react, { useState } from "react"
import {ScrollView, Text, TextInput, StyleSheet, Button } from "react-native"

const Data = () => {

const [name,setName] = useState("surbhi")
    return (
        <>

    
        <Text>{name}</Text>
            <TextInput placeholder="Enter Your Name" style={styles.textInput }
            value={name} 
            onChangeText={(text)=> setName(text)}
            ></TextInput>
            
            <Button title="clear input value"
            onPress={()=> setName("")}></Button>
           
        </>
    )
}

const styles = StyleSheet.create({ 
    textInput:{
        fontSize: 20, color: "red", borderColor: "red", borderWidth: 2,
        padding:10,
        margin:10
    }
     })

export default Data

