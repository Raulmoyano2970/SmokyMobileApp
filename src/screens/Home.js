import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
// import Video from 'react-native-video'
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default function Home() {

const navigation = useNavigation();

  return (
    <View style={styles.container}>
            <StatusBar />
            <ImageBackground source={require('../asset/main-home-img.jpg')} resizeMode="cover" style={styles.image}>
    
            {/* <View style={{flex: 1}}>
      <Video
        source={require('../asset/headerBackground.mp4')}
        style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
        resizeMode='cover'
        repeat
      /> */}
      <View
    style={{ 
      justifyContent: 'center', 
        alignItems: 'center',
    }}>
      
      <TouchableOpacity
                    onPress={() => navigation.navigate("Vapers")}
                    style={{
                      backgroundColor: "#ff21ab",
                      width: 180,
                      height: 50,
                      borderRadius: 20,
                      justifyContent: "center",
                      marginBottom: 20,
                      marginTop: 20,
                      textShadowOffset: { width: -1, height: 1 },
                      textShadowRadius: 15,
                      textShadowColor: 'red',
                    }}
>
                    <Text
                        style={{
                            fontSize: 25,
                            textAlign: "center",
                            color: "white",
                            fontWeight:"bold"

                        }}
                    >Vapers</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("E-liquids")}
                    style={{
                        backgroundColor: "#ff21ab",
                        width: 180,
                        height: 50,
                        borderRadius: 20,
                        justifyContent: "center",
                        marginBottom: 20
                    }}
>
                    <Text
                        style={{
                            fontSize: 25,
                            textAlign: "center",
                            color: "white",
                            fontWeight:"bold"
                        }}
                    >E-liquids</Text>
                </TouchableOpacity>
                
    </View>
    </ImageBackground>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      height: height * 0.88,
      width: width,
      alignItems: "center",
  },
  image: {
      flex: 1,
      justifyContent: "center",
      width: "100%",
      height: "100%",
  },
});
