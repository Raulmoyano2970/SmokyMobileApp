import React from "react";
import VapersCard from "../components/VapersCard";
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import vapersActions from '../redux/actions/vapersAction'
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView } from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

export default function VapersScreens(props) {
  
  
  const dispatch = useDispatch()
  const [searchVapers, setSearchVapers] = useState('')
  const {vapers, search} = useSelector(store => store.vapersReducer)
  const { getVapers } = vapersActions
  const navigation = useNavigation();
 
 
 






  useEffect(() => {
    // dispatch(getVapers())

    if(search){
        let info ={ 
            name: search, 
           
        }
        dispatch(getVapers(info))
        setSearchVapers(search)
        
    }else{
        let data = {
            name:"",
            category:"",
        }
        dispatch(getVapers(data))
    }
    //eslint-disable-next-line

}, [])

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        textAlign: "center",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        marginTop: 30,
        fontSize: 40,
        fontWeight:"bold"
    },
    container: {
        width: '100%',
    },
    backimage:{
        width: '100%',
        height: '100%',
        justifyContent: "center",
    },
    containerCard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        borderRadius: 20,
        height:"6%",
        width:"100%",
     
    },
    
    textInput: {
        backgroundColor: '#fff',
        width: '60%',
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft:"20%",
        textAlign: "center",
        marginBottom: 20,
        
    }
});
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../asset/humo.jpeg')} resizeMode="cover" style={styles.backimage}>
      <View style={{position:'absolute',top:0,alignSelf:'flex-end', zIndex:1}}>
      <TouchableOpacity onPress={() => navigation.navigate("Shop")}>
          <Image source={require('../asset/carrito.png')}   style={{width:60, height:60}}/>
        </TouchableOpacity>
        </View>
      <ScrollView>
        <Text style={styles.text}>Vapers</Text>
        <TextInput style={styles.textInput} placeholder="Search" onChangeText={(text)=>{
            setSearchVapers(text)
            let data = {
                name: text,
                category:"",
            }
            dispatch(getVapers(data))
        }}/>
        <View style={styles.containerCard}>
            {vapers.map(vaper => <VapersCard key={vaper._id} vaper={vaper} name={vaper.name} descripcion={vaper.descripcion} navigation={props.navigation} price={vaper.price} photo={vaper.photo} />)}
            
        </View>
      </ScrollView>
      </ImageBackground>
    </View>
  )
}