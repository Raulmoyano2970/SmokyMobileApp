import { View, ImageBackground, StyleSheet, Text, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { baseURL } from '../url';
import axios from 'axios';



export default function SignUp(props) {
    const [userData, setUserData] = useState({
        name: '',
        lastName: '',
        age: '',
        photo: '',
        email: '',
        password: '',
    })

    const handleInput = (e, name, value) => {
        setUserData({
            ...userData,
            [name]: e || value
        })
    }

    const handleSubmit = async () => {
        try {
            const res = await axios.post(`${baseURL}auth/sign-up/`, userData)
            if (res.data.success) {
                Alert.alert('Success', res.data.message);
                props.navigation.navigate('SignIn')
            } else {
                Alert.alert('Error', res.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        
            <ImageBackground source={require('../asset/singup.jpg')} resizeMode="cover" style={styles.backimage}>
                <View style={styles.container}>
                <Text style={styles.textTitle}>Sign Up</Text>
                <TextInput style={styles.input} placeholder="Name" onChangeText={(e) => handleInput(e, "name")} />
                <TextInput style={styles.input} placeholder="LastName" onChangeText={(e) => handleInput(e, "lastName")} />
                <TextInput style={styles.input} placeholder="Age" onChangeText={(e) => handleInput(e, "age")} />
                <TextInput style={styles.input} placeholder="Photo" onChangeText={(e) => handleInput(e, "photo")} />
                <TextInput style={styles.input} placeholder="Email" onChangeText={(e) => handleInput(e, "email")} />
                <TextInput style={styles.inputpassword} placeholder="Password" secureTextEntry={true} password={true} onChangeText={(e) => handleInput(e, "password")} />
                  <View style={styles.fixToText} >
                    <Text style={styles.submit} onPress={handleSubmit}>Create</Text>
                </View>
            
                <View style={styles.container2} >
                <Text style={styles.textdos}>Are you register?</Text>
                    <Text style={styles.text3} onPress={() => props.navigation.navigate('SignIn')}>Go to Sign In</Text>
                </View>
                </View>
            </ImageBackground>
        
    )
}
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            gap: 18,
            justifyContent: 'center',
            width: '70%',
            height: 400,
            backgroundColor: '#d7e3ff55',
            borderRadius: 20,
            marginLeft: "15%",
          },
          textTitle: {
            color: 'white',
            fontSize: 40,
            textAlign: "center",
            textShadowOffset: { width: -3, height: -3 },
            textShadowRadius: 15,
            textShadowColor: '#FF2D95',
            fontWeight: 'bold',
        },

        container2: {
            flexDirection: "row",
            marginTop:8
        },
        
        
      textdos:{
            color: "black",
            fontSize:20
            
        },
        text3:{
            color: "white",
            fontWeight: 'bold',
            fontSize:20,
            marginLeft:5,
            textShadowOffset: { width: -3, height: -3 },
            textShadowRadius: 15,
            textShadowColor: '#FF2D95',
            textDecorationLine: 'underline',
     
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
          
          inputpassword:{
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
            borderRadius: 10,
            padding: 2,
            gap: 2,
            backgroundColor: 'white',
            fontWeight: 'bold',
            color: "black",
            fontSize: 20,
            width:150,
            textAlign:"center"
        },
        backimage:{
            width: '100%',
            height: '100%',
            justifyContent: "center",
        },
      });
