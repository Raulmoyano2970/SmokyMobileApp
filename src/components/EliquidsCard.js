import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'


export default function EliquidsCard(props) {

    let { photo, name, navigation, city } = props;

    let NavigationContainer = () => {
        navigation.navigate('DetailsCity', { city })
    }

    const styles = StyleSheet.create({
        container: {
            height: "79%",
            width: "70%",
            color: '#eaf2f4',
            backgroundColor: 'black',
            borderRadius: 20,
      
        },
        image: {
            width: '100%',
            height: 280,
            resizeMode: "stretch",
            alignSelf: "center",
            borderTopLeftRadius: 20,
            borderTopRightRadius:20,
        },

        text: {
            color: '#fff',
            fontSize: 25,
            textAlign: "center",
            textShadowOffset: { width: -3, height: -3 },
            textShadowRadius: 15,
            textShadowColor: 'rgb(142, 4, 184)',
            marginTop: 10,
        },

        description: {
            color: '#fff',
            fontSize: 20,
            textAlign: "center",
            textShadowOffset: { width: -3, height: -3 },
            textShadowRadius: 15,
            textShadowColor: 'red',
            margin: 10
        },
      
            // shadowOffset: { width: 2, height: 2 },
            // shadowOpacity: 1,
            // shadowRadius: 10,
            // shadowColor: 'green',
            // <img src="./public/img/products/mango-peach-liquid.jpg" class="card-img-top" alt="...">
            // <div class="card-body d-flex justify-content-center flex-column align-items-center bg-black gap-1 p-2">
            //     <h5 class="card-title">Peach and mango</h5>
            //     <p class="card-text mb-0 text-white">Delicious combination of the best sweet apples and
            //         purple grapes. An original and authentic fruit flavor to enjoy daily.</p>
            //     <a href="#" class="btn btn-primary">Add to cart</a>

      
    });

    return (
        <View style={styles.container}>
                                <Image source={require("../asset/cardvape.jpeg")} style={styles.image} />
                                <Text style={styles.text}>Bananita</Text>
                                <Text style={styles.description}>Delicious combination of the best sweet apples and
                                 purple grapes. An original and authentic fruit flavor to enjoy daily.</Text>
                    <TouchableOpacity onPress={NavigationContainer}
                    style={{
                      backgroundColor: "rgb(142, 4, 184)",
                      width: "40%",
                      height: "7%",
                      borderRadius: 10,
                      justifyContent: "center",
                      marginTop: 15,
                      marginBottom:25,
                      marginLeft: "30%",
                      alignItems: "center",
                      
                    }}
                    >
                    <Text
                        style={{
                            fontSize: 20,
                            textAlign: "center",
                            color: "white",
                            fontWeight: "bold"
                        }}
                    >Add To Cart</Text>
                </TouchableOpacity>
        </View>
    )
}


// return (
//     <View style={styles.container}>
//                             <Image source={{ uri: itinerary.photo[0] }} style={styles.image} />
//                             <Text style={styles.text}>{itinerary.name}</Text>
//                 <TouchableOpacity onPress={NavigationContainer}
//                 style={{
//                   backgroundColor: "#1f6e6b",
//                   width: 180,
//                   height: 50,
//                   borderRadius: 20,
//                   justifyContent: "center",
//                   marginBottom: 20,
//                   marginTop: 20
//                 }}
//                 >
//                 <Text
//                     style={{
//                         fontSize: 20,
//                         textAlign: "center",
//                         color: "white",
//                     }}
//                 >More Details</Text>
//             </TouchableOpacity>
//     </View>
// )
// }