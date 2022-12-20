import { View, ImageBackground, StyleSheet, Text, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import userAction from '../redux/actions/userAction';


export default function SignIn(props) {
    const { login } = userAction;
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const handleInput = (e, name, value) => {
        setUserData({
            ...userData,
            [name]: e || value
        })
    }


    async function handleSubmit() {
        try {
            const res = await dispatch(login(userData))
            if (res.payload.success) {
                Alert.alert('Success', res.payload.message);
                props.navigation.navigate('Smoky')
            } else {
                Alert.alert('Error', res.payload.response)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <ImageBackground source={require('../asset/singup.jpg')} resizeMode="cover" style={styles.backimage}>
            <View style={styles.container}>
                <Text style={styles.textTitle}>Sign In</Text>
                <TextInput style={styles.input} placeholder="Email" onChangeText={(e) => handleInput(e, "email")} />
                <TextInput style={styles.inputpassword} placeholder="Password" secureTextEntry={true} password={true} onChangeText={(e) => handleInput(e, "password")} />
                <View style={styles.fixToText} >
                    <Text style={styles.submit} onPress={handleSubmit}>Login</Text>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.textdos}>Are you new?</Text>
                        <Text style={styles.text3} onPress={() => props.navigation.navigate('SignUp')}>Go to Sign Up</Text>
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
        height: 300,
        backgroundColor: '#d7e3ff55',
        borderRadius: 20,
        marginLeft: "15%",
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
    
    textTitle: {
        color: 'white',
        fontSize: 40,
        textAlign: "center",
        textShadowOffset: { width: -3, height: -3 },
        textShadowRadius: 15,
        textShadowColor: '#FF2D95',
        fontWeight: 'bold',
    },
    input: {
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

    inputpassword: {
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
        textAlign:"center",
        margin: 8,
        border: 2,
        borderRadius: 10,
        padding: 2,
        gap: 2,
        backgroundColor: 'white',
        fontWeight: 'bold',
        color: "black",
        fontSize: 20,
        width:150

    },
    backimage: {
        width: '100%',
        height: '100%',
        justifyContent: "center",
    },
});
