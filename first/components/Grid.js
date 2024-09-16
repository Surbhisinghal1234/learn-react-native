import { FlatList, View, Text, StyleSheet, ScrollView } from "react-native"

const Grid = () => {

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
            <View style={{ margin: 40, flex: 1, flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
                {
                    users.map((item) =>
                        <>
                        <View style={styles.text}>
                        <Text>{item.id}</Text>
                        <Text >{item.name}</Text>
               
                </View>
                </>
                )
                }

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        backgroundColor: "red",
        fontSize: 22,
        color: "white",
        borderRadius: 10,
        padding: 10,
        width: 120,
        textAlignVertical: "center",
        textAlign: "center"


    }
})


export default Grid