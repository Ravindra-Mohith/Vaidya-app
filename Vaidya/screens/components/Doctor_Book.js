import * as React from "react";
import { Text, View,TouchableWithoutFeedback , Dimensions, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DoctorBook() {
  const navigation = useNavigation();
  return(
    <ScrollView>
     <View style={{paddingTop:30, paddingHorizontal:Dimensions.get('window').width*0.15/2, flex:1, flexDirection:"column"}}>
      <View style={{backgroundColor:'pink',borderRadius:20}}>
        <Text style={{color:'black', paddingVertical:20, fontWeight:"bold", fontSize:20, textAlign:"center", }}>Doctors</Text>
      </View>
      <View style ={{backgroundColor:'#ddd', maxHeight:160, width: Dimensions.get('window').width*0.85, flex:1, flexDirection:"row", justifyContent:"center", alignItems:"center",marginVertical:20 }}>
          <Image style={{maxHeight:100, maxWidth:100}} source={require('../../assets/doctors/a.jpg')} />
          <View style ={{backgroundColor:'lightblue', flex:1, flexDirection:"column", justifyContent: "flex-start", paddingVertical:20, paddingLeft:20}}>
            <Text> Dr. Sandip Mondal </Text>
            <Text> MBBS, PhD Neurology</Text>
            <Text> Timings: 10AM - 1PM </Text>
          </View>
      </View>
      <View style ={{backgroundColor:'#ddd', maxHeight:160, width: Dimensions.get('window').width*0.85, flex:1, flexDirection:"row", justifyContent:"center", alignItems:"center",marginVertical:20 }}>
          <Image style={{maxHeight:100, maxWidth:100}} source={require('../../assets/doctors/b.jpg')} />
          <View style ={{backgroundColor:'lightblue', flex:1, flexDirection:"column", justifyContent: "flex-start", paddingVertical:20, paddingLeft:20}}>
            <Text> Dr. Sandip Mondal </Text>
            <Text> MBBS, PhD Neurology</Text>
            <Text> Timings: 10AM - 1PM </Text>
          </View>
      </View>
      <View style ={{backgroundColor:'#ddd', maxHeight:160, width: Dimensions.get('window').width*0.85, flex:1, flexDirection:"row", justifyContent:"center", alignItems:"center",marginVertical:20 }}>
          <Image style={{maxHeight:100, maxWidth:100}} source={require('../../assets/doctors/c.jpg')} />
          <View style ={{backgroundColor:'lightblue', flex:1, flexDirection:"column", justifyContent: "flex-start", paddingVertical:20, paddingLeft:20}}>
            <Text> Dr. Sandip Mondal </Text>
            <Text> MBBS, PhD Neurology</Text>
            <Text> Timings: 10AM - 1PM </Text>
          </View>
      </View>
      <View style ={{backgroundColor:'#ddd', maxHeight:160, width: Dimensions.get('window').width*0.85, flex:1, flexDirection:"row", justifyContent:"center", alignItems:"center",marginVertical:20 }}>
          <Image style={{maxHeight:100, maxWidth:100}} source={require('../../assets/doctors/d.jpg')} />
          <View style ={{backgroundColor:'lightblue', flex:1, flexDirection:"column", justifyContent: "flex-start", paddingVertical:20, paddingLeft:20}}>
            <Text> Dr. Sandip Mondal </Text>
            <Text> MBBS, PhD Neurology</Text>
            <Text> Timings: 10AM - 1PM </Text>
          </View>
      </View>
      <View style ={{backgroundColor:'#ddd', maxHeight:160, width: Dimensions.get('window').width*0.85, flex:1, flexDirection:"row", justifyContent:"center", alignItems:"center",marginVertical:20 }}>
          <Image style={{maxHeight:100, maxWidth:100}} source={require('../../assets/doctors/e.jpg')} />
          <View style ={{backgroundColor:'lightblue', flex:1, flexDirection:"column", justifyContent: "flex-start", paddingVertical:20, paddingLeft:20}}>
            <Text> Dr. Sandip Mondal </Text>
            <Text> MBBS, PhD Neurology</Text>
            <Text> Timings: 10AM - 1PM </Text>
          </View>
      </View>
      <View style ={{backgroundColor:'#ddd', maxHeight:160, width: Dimensions.get('window').width*0.85, flex:1, flexDirection:"row", justifyContent:"center", alignItems:"center",marginVertical:20 }}>
          <Image style={{maxHeight:100, maxWidth:100}} source={require('../../assets/doctors/f.jpg')} />
          <View style ={{backgroundColor:'lightblue', flex:1, flexDirection:"column", justifyContent: "flex-start", paddingVertical:20, paddingLeft:20}}>
            <Text> Dr. Sandip Mondal </Text>
            <Text> MBBS, PhD Neurology</Text>
            <Text> Timings: 10AM - 1PM </Text>
          </View>
      </View>
    
    </View>
    </ScrollView>
  );
}
