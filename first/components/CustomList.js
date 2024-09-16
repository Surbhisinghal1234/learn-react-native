import { FlatList, View,Text , StyleSheet, ScrollView} from "react-native"

const CustomList = () => {

    const users = [
        {
            id: 1,
            name: "surbhi"
        },
        {
            id: 2,
            name: "nihit"
        },

        {
            id: 3,
            name: "vikas"
        },
        {
            id: 4,
            name: "Lilly"
        },
        {
            id: 5,
            name: "Anshi"
        },
        {
            id: 6,
            name: "Vikas"
        },
        {
            id: 7,
            name: "nihit"
        },

        {
            id: 8,
            name: "vikas"
        },
        {
            id: 9,
            name: "Lilly"
        },
        {
            id: 10,
            name: "Anshi"
        },
        {
            id: 11,
            name: "Vikas"
        }
    ]


    return (
        <>
        <ScrollView>
            <View style={{margin:40}}>

               
                   {
                    users.map((item)=>  <Text  style={styles.item}> {item.name}</Text>)
                   }
                
            </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({

    item:{
        fontSize:24,
        padding:10,
        color:"white",
        backgroundColor:"blue",
        borderColor:"black",
        borderWidth:1,
        margin:10,
        borderRadius:10
      

    }

})
export default CustomList