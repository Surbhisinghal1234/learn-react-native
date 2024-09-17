import { FlatList, View,Text , StyleSheet} from "react-native"

const List = () => {

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
            name: "Vanya"
        }
    ]


    return (
        <>
            <View style={{margin:40}}>

                <Text>
                    <FlatList data={users}
                        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
                   
                        keyExtractor={item => item.id}
                   />
                </Text>
            </View>
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
export default List