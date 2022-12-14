import { View, Text, StyleSheet, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function SignIn(props) {


  const handleSubmit = () => {
    let user = {
      name: 'Oscar',
      lastName: 'Belondi',
      email: 'oscar22@gmail.com'
    }

    console.log('Ingresando...');

    AsyncStorage.setItem('user', JSON.stringify(user))
      .catch(err => console.log(err))
  }

  const navigateCounter = () => {
    props.navigation.navigate('Counter')
  }
  const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: 18,
        justifyContent: 'center',
        width: '70%',
        height: "33%",
        backgroundColor: '#d7e3ff55',
        borderRadius: 20,
        marginLeft: "15%",
      },
      textTitle: {
        color: 'black',
        fontSize: 40,
        textAlign: "center",
        // textShadowOffset: { width: -1, height: 1 },
        // textShadowRadius: 10,
        // textShadowColor: '#063970',
        fontWeight: 'bold',
    },
      input:{
        padding: 3,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 10,
        margin: 3,
        width: "90%",
        // outline: 'none',
        // box-shadow: 3px 3px 5px rgba(3, 3, 3, 0.654);
        textAlign: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)',
      },
    submit: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
        border: 2,
        borderRadius: 15,
        padding: 10,
        gap: 2,
        backgroundColor: 'grey',
        fontWeight: 'bold',
        color: "black",
        fontSize: 20
    },
    backimage:{
        width: '100%',
        height: '100%',
        justifyContent: "center",
    },
  });
  
  return (
    
        <ImageBackground source={require('../asset/singup.jpg')} resizeMode="cover" style={styles.backimage}>
            <View style={styles.container}>
            <Text style={styles.textTitle}>Sign In</Text>
            <TextInput style={styles.input} placeholder="Email" onChangeText={(e) => handleInput(e, "email")}/>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} password={true} onChangeText={(e) => handleInput(e, "password")}/>
            <View >
            <Text style={styles.submit} onPress={handleSubmit}>Login</Text>
            </View>
                </View>
        </ImageBackground>
    
  )

  // return (
  //   <View style={styles.container}>
  //     <Text>Login</Text>
  //     <TextInput placeholder='Email' />
  //     <TextInput placeholder='Contraseña' />
  //     <Button onPress={handleSubmit} title='Enviar' />
  //   </View>
  // )
}


