import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, Dimensions, ScrollView,TouchableOpacity } from 'react-native'

export default function DetailsCart() {
  
  const styles = StyleSheet.create({

    container: {
    alignItems: 'center',
    gap: 18,
    justifyContent: 'center',
    width: '70%',
    height: 300,
    backgroundColor: 'black',
    borderRadius: 20,
    marginLeft: "15%",
    marginBottom:"5%"
    },
    container2: {
      marginLeft: "15%",
    flexDirection: "row",
    marginTop:8,
    backgroundColor:"white",
    color: "black",
    width:"70%",
    height:"5%",
    justifyContent:"space-evenly",
    alignItems: 'center',
    borderRadius: 20,
    },
    text1:{
      color:"black",
      fontSize:20,
      fontWeight: 'bold',
    },

    botoncito:{
      color:"white",
      fontSize:20,
      fontWeight: 'bold',
      backgroundColor:"#ff21ab",
      borderRadius: 10,
      width:60,
      textAlign:"center"
    },
    
    text:{
    color: "white",
    fontSize:20,
    fontWeight: 'bold',

    
    },
    text3:{
      color: "white",
      fontSize:20,
      fontWeight: 'bold',
      marginLeft:"80%",
      textShadowOffset: { width: -3, height: -3 },
      textShadowRadius: 15,
      textShadowColor: '#FF2D95',
      
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
img:{
height:200,
width:200
},

    backimage: {
    width: '100%',
    height: '100%',
    justifyContent: "center",
    },
    });


    
  
  return (
 
      
      
    <ImageBackground source={require('../asset/bg-cart.jpg')} resizeMode="cover" style={styles.backimage}>
        <Text style={styles.textTitle}>Shop</Text>
    <View style={styles.container}>
      
          <TouchableOpacity><Text style={styles.text3}>X</Text></TouchableOpacity>
          <Image style={styles.img} source={{uri:"https://cdn.shopify.com/s/files/1/0020/4249/5063/products/500PUFF-Mito-FRESA-SANDIA-Desechables-Bogvape_720x.jpg?v=1624833635"}}/>
          <Text style={styles.text}>Mito Strawberry and Watermelon</Text>
          <Text style={styles.text}>$25</Text>
       
    </View>
    <View style={styles.container}>
      
          <TouchableOpacity><Text style={styles.text3}>X</Text></TouchableOpacity>
          <Image style={styles.img} source={{uri:"https://img.vaprio.com/p/6279/6279_21097.jpg"}}/>
          <Text style={styles.text}>Nasty Juice Green Apple</Text>
          <Text style={styles.text}>$10</Text>
    
    </View>

    <View style={styles.container2}>
    <Text style={styles.text1}>Total:</Text>
          <Text style={styles.text1}>$35</Text>
          <Text style={styles.botoncito}>BUY</Text>
          
    </View>
</ImageBackground>

)
}
