import React from 'react'
import { View,StyleSheet, Image, SafeAreaView,Text} from 'react-native'


const Header = () => {
    return (
        <>
        <SafeAreaView style={styles.header}>
            <Image 
                source={require("../assets/Logo3.png")}
                resizeMode='contain'
                style={{ height: 50 }}
            />
        </SafeAreaView>
        {/* <Text>Sneakers Shopping</Text> */}
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "center",
        padding: 20
    }
})

export default Header