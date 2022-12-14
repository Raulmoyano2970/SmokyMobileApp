import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default function Home() {

const navigation = useNavigation();

  return (
    <View style={styles.container}>
            <StatusBar />
            <ImageBackground source={require('../asset/Home.jpg')} resizeMode="cover" style={styles.image}>
    <View
    style={{ 
      justifyContent: 'center', 
        alignItems: 'center',
    }}>
      
      <TouchableOpacity
                    onPress={() => navigation.navigate("Cities")}
                    style={{
                      backgroundColor: "rgb(142, 4, 184)",
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
                    onPress={() => navigation.navigate("Hotels")}
                    style={{
                        backgroundColor: "rgb(142, 4, 184)",
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
