
import react, { useState } from "react"
import { Text, TextInput, View, StyleSheet, Button } from "react-native"

const FormData = () => {
    const [name, setname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [displayData, setDisplayData] = useState(false)


const resetFormData = () =>{
    setDisplayData(false)
    setname("")
    setEmail("")
    setPassword("")
}
    return (

        <>
            <View style={{ margin: 30 }}>
                <Text>Hello</Text>

                <TextInput
                    value={name}
                    onChangeText={(text) => setname(text)}
                    style={styles.textInput}
                    placeholder="Enter UserName"></TextInput>

                <TextInput
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    style={styles.textInput}
                    placeholder="Enter UserPassword"></TextInput>

                <TextInput
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.textInput}
                    placeholder="Enter UserEmail"></TextInput>


                <View style={{ marginBottom: 20 }}>
                    <Button color={"green"} title="Print Values" onPress={()=> setDisplayData(true)} ></Button>
                </View>
                <Button title="Clear Details" onPress={resetFormData} ></Button>

               
                    {
                        displayData ? 
                        <View>
                            <Text>User Name is : {name} </Text>
                            <Text>User Email is : {email} </Text>
                            <Text>User Password is : {password} </Text>
                             </View>
                             : null
                    }
              
           

              </View>
        </>
    )
}


const styles = StyleSheet.create({
    textInput: {
        fontSize: 20,
        color: "red",
        borderWidth: 4,
        borderColor: "green",
        margin: 10,
        padding: 10,
        borderRadius: 10
    }
})
export default FormData