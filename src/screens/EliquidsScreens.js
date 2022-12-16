import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import eliquidsActions from '../redux/actions/eliquidsAction'
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView } from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import EliquidsCard from "../components/EliquidsCard";
import { useNavigation } from "@react-navigation/native";

export default function EliquidsScreens(props) {


    const dispatch = useDispatch()
    const [searchEliquids, setSearchEliquids] = useState('')
    const { eliquids, search } = useSelector(store => store.eliquidsReducer)
    const { getEliquids } = eliquidsActions
    const navigation = useNavigation()


    useEffect(() => {
        // dispatch(getEliquids())
        if (search) {
            let info = {
                search: search,
            }
            dispatch(getEliquids(info))
            setSearchEliquids(search)

        } else {
            let data = {
                name:"",
                category:"",
            }
            dispatch(getEliquids(data))
        }
        //eslint-disable-next-line


    }, [])

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            // height: "100%"
        },
        text: {
            color: '#fff',
            fontSize: 40,
            textAlign: "center",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
            marginTop: 30,
            fontWeight: "bold"
        },

        backimage: {
            width: '100%',
            height: '100%',
            justifyContent: "center",
        },
        containerCard: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            borderRadius: 20,
            height:"11%",
            width:"100%"
        },
        textInput: {
            backgroundColor: '#fff',
            width: '60%',
            height: 40,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "20%",
            textAlign: "center",
            marginBottom: 20,
        }
    });

    return (

        <View style={styles.container}>

            <ImageBackground source={require('../asset/humo.jpeg')} resizeMode="cover" style={styles.backimage}>
                <ScrollView>
                    <Text style={styles.text}>E-liquids</Text>
                    <TextInput style={styles.textInput} placeholder="Search" onChangeText={(text) => {
                        setSearchEliquids(text)
                        let data = {
                            search: text
                        }
                        dispatch(getEliquids(data))
                        // dispatch(filterHotels(data))
                    }} />

                    <View style={styles.containerCard}>
                        {eliquids.map(eliquid => <EliquidsCard key={eliquid._id} eliquid={eliquid} name={eliquid.name} navigation={props.navigation} price={eliquid.price} descripcion={eliquid.descripcion} photo={eliquid.photo} />)}

                    </View>

                </ScrollView>
            </ImageBackground>

        </View>

    )
}



{/* <View style={styles.containerCard}>
            {hotels.map(hotel => <HotelCard key={hotel._id}hotel={hotel} name={hotel.name} navigation={props.navigation} continent={hotel.continent} photo={hotel.photo[0]}/>)}

        </View> */}