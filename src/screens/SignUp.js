import { View, ImageBackground, StyleSheet, Text, TextInput, Alert } from 'react-native'
import React, {useState} from 'react'
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
            const res = await axios.post(`${baseURL}api/auth/sign-up/`, userData)
            if (res.data.success) {
                Alert.alert('Success', res.data.message)
                props.navigation.navigate('Home')
            } else {
                Alert.alert('Error', res.data.message)
            }
        } catch (error) {
            console.log(error)
        }
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
            padding: 1,
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
                <Text style={styles.textTitle}>Sign Up</Text>
                <TextInput style={styles.input} placeholder="Name" onChangeText={(e) => handleInput(e, "name")}/>
                <TextInput style={styles.input} placeholder="LastName" onChangeText={(e) => handleInput(e, "lastName")}/>
                <TextInput style={styles.input} placeholder="Age" onChangeText={(e) => handleInput(e, "age")}/>
                <TextInput style={styles.input} placeholder="Photo" onChangeText={(e) => handleInput(e, "photo")}/>
                <TextInput style={styles.input} placeholder="Email" onChangeText={(e) => handleInput(e, "email")}/>
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} password={true} onChangeText={(e) => handleInput(e, "password")}/>
                <View style={styles.submit}>
                    <Text style={styles.submit} onPress={handleSubmit}>Create</Text>
                </View>
                </View>
            </ImageBackground>
        
    )
}
