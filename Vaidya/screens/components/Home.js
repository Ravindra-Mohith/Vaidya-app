import * as React from 'react';
import { Text, View, Alert, ScrollView, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IoIcon from "react-native-vector-icons/Ionicons";
import { Fontisto } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";


const orders = (val) => {
  Alert.alert('OOPS', 'No ' + val + ' found', [
    { text: 'Back' }
  ]);
}
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function Feed() {
  const navigation = useNavigation();

  let screenWidth = Dimensions.get('window').width;
  let screenHeight = Dimensions.get('window').height;


  return (
    <ScrollView style={{ flex: 1, paddingTop: 40, backgroundColor: '#f8f8ff', margin: 0 }}>
      <View style={{ backgroundColor: 'white', paddingHorizontal: 15, paddingVertical: 10 }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} onPress={() => { navigation.navigate("Profile"); }}>
            <Icon name="account-circle" color="red" size={30} />
          </TouchableOpacity>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontFamily: 'lucida grande', fontSize: 34, color: `#daa520`, fontStyle: 'bold', fontWeight: '900' }}>VAIDYA</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => { navigation.navigate("Notifications"); }}>
              <IoIcon name="notifications" color="#696969" size={27} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => { navigation.navigate("Profile"); }}>
              <Icon name="chat" color="#696969" size={27} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, paddingHorizontal: 20 }}>
        <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', alignItems: 'center', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, marginBottom: 10, padding: 10 }}>
            <Icon name="cart-heart" color="#ff8c00" size={50} />
          </View>
          <Text style={{ fontFamily: 'FredokaOne-Regular', fontWeight: 'bold' }}>Pharmacy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', alignItems: 'center', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, marginBottom: 10, padding: 10, }}>
            <Icon name="cash-refund" color="#ff8c00" size={50} />
          </View>
          <Text style={{ fontFamily: 'FredokaOne-Regular', fontWeight: 'bold' }}>Refund</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center' }} onPress={() => { navigation.navigate("Orders") }}>
          <View style={{ backgroundColor: 'white', alignItems: 'center', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, marginBottom: 10, padding: 10 }}>
            <Fontisto name="test-tube" color="#ff8c00" size={50} />
          </View>
          <Text style={{ fontFamily: 'FredokaOne-Regular', fontWeight: 'bold' }}>Lab Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', alignItems: 'center', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, marginBottom: 10, padding: 10 }}>
            <Icon name="file-document-multiple" color="#ff8c00" size={50} />
          </View>
          <Text style={{ fontFamily: 'FredokaOne-Regular', fontWeight: 'bold' }}>Pink Slip</Text>
        </TouchableOpacity>
      </View>

      <View style={{ paddingHorizontal: 20, backgroundColor: '#00ced1', paddingTop: 20, marginTop: 40, paddingBottom: 25, }}>
        <Text style={{ fontSize: 20, color: 'white', fontFamily: 'Asul-Bold', fontWeight: 'bold', marginBottom: 5 }}>Easy Appointment Booking</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 15, color: 'white', fontFamily: 'Asul-Bold', fontWeight: 'bold' }}>Consultation on chat or call</Text>
            <Text style={{ fontSize: 15, color: 'white', fontFamily: 'Asul-Bold', fontWeight: 'bold' }}>24/7 availability</Text>
          </View>
          <View style={{ height: 50, width: 50 }}>
            <Image style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'contain'
            }} source={require('../../assets/Images.png')} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 7 }}>
          <Button mode="contained" onPress={() => navigation.navigate()}>Chat</Button>
          <Button mode="contained" onPress={() => navigation.navigate('Doctors')}>
            Book
          </Button>
        </View>

      </View>

      <View style={{ marginTop: 20, marginHorizontal: 15 }}>
        <Text style={{ fontSize: 20, fontFamily: 'Asul-Bold', fontWeight: 'bold', marginBottom: 10 }}>Shop By Category</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 11, paddingHorizontal: 20 }}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'white', alignItems: 'center', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, marginBottom: 10, padding: 10 }}>
              <Icon name="cart-heart" color="#ff8c00" size={50} />
            </View>
            <Text style={{ fontFamily: 'FredokaOne-Regular', fontWeight: 'bold' }}>Pharmacy</Text>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center', }}>
            <View style={{ backgroundColor: 'white', alignItems: 'center', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, marginBottom: 10, padding: 10 }}>
              <Icon name="cart-heart" color="#ff8c00" size={50} />
            </View>
            <Text style={{ fontFamily: 'FredokaOne-Regular', fontWeight: 'bold' }}>Pharmacy</Text>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'white', alignItems: 'center', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, marginBottom: 10, padding: 10 }}>
              <Icon name="cart-heart" color="#ff8c00" size={50} />
            </View>
            <Text style={{ fontFamily: 'FredokaOne-Regular', fontWeight: 'bold' }}>Pharmacy</Text>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'white', alignItems: 'center', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, marginBottom: 10, padding: 10 }}>
              <Icon name="cart-heart" color="#ff8c00" size={50} />
            </View>
            <Text style={{ fontFamily: 'FredokaOne-Regular', fontWeight: 'bold' }}>Pharmacy</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 11, paddingHorizontal: 20 }}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'white', alignItems: 'center', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, marginBottom: 10, padding: 10 }}>
              <Icon name="cart-heart" color="#ff8c00" size={50} />
            </View>
            <Text style={{ fontFamily: 'FredokaOne-Regular', fontWeight: 'bold' }}>Pharmacy</Text>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center', }}>
            <View style={{ backgroundColor: 'white', alignItems: 'center', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, marginBottom: 10, padding: 10 }}>
              <Icon name="cart-heart" color="#ff8c00" size={50} />
            </View>
            <Text style={{ fontFamily: 'FredokaOne-Regular', fontWeight: 'bold' }}>Pharmacy</Text>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'white', alignItems: 'center', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, marginBottom: 10, padding: 10 }}>
              <Icon name="cart-heart" color="#ff8c00" size={50} />
            </View>
            <Text style={{ fontFamily: 'FredokaOne-Regular', fontWeight: 'bold' }}>Pharmacy</Text>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'white', alignItems: 'center', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, marginBottom: 10, padding: 10 }}>
              <Icon name="cart-heart" color="#ff8c00" size={50} />
            </View>
            <Text style={{ fontFamily: 'FredokaOne-Regular', fontWeight: 'bold' }}>Pharmacy</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 11, paddingHorizontal: 20 }}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'white', alignItems: 'center', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, marginBottom: 10, padding: 10 }}>
              <Icon name="cart-heart" color="#ff8c00" size={50} />
            </View>
            <Text style={{ fontFamily: 'FredokaOne-Regular', fontWeight: 'bold' }}>Pharmacy</Text>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center', }}>
            <View style={{ backgroundColor: 'white', alignItems: 'center', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, marginBottom: 10, padding: 10 }}>
              <Icon name="cart-heart" color="#ff8c00" size={50} />
            </View>
            <Text style={{ fontFamily: 'FredokaOne-Regular', fontWeight: 'bold' }}>Pharmacy</Text>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'white', alignItems: 'center', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, marginBottom: 10, padding: 10 }}>
              <Icon name="cart-heart" color="#ff8c00" size={50} />
            </View>
            <Text style={{ fontFamily: 'FredokaOne-Regular', fontWeight: 'bold' }}>Pharmacy</Text>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'white', alignItems: 'center', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, marginBottom: 10, padding: 10 }}>
              <Icon name="cart-heart" color="#ff8c00" size={50} />
            </View>
            <Text style={{ fontFamily: 'FredokaOne-Regular', fontWeight: 'bold' }}>Pharmacy</Text>
          </View>
        </View>

      </View>



      <View style={{ paddingHorizontal: 20, backgroundColor: '#00ced1', paddingTop: 20, marginTop: 40, paddingBottom: 60 }}>
        <Text style={{ fontSize: 20, color: 'white', fontFamily: 'Asul-Bold', fontWeight: 'bold' }}>About Us</Text>
      </View>
      <View style={{ marginTop: -40, marginHorizontal: 20, paddingHorizontal: 10, backgroundColor: 'white' }}>
        <Text style={{ fontSize: 18, padding: 15 }}><Text style={{ fontWeight: 'bold' }}>Vaidya HealthCare Limited </Text>is an Indian multinational healthcare group headquartered in Mumbai. Apart from the eponymous hospital chain, the company also operates pharmacies, primary care and diagnostic centres, and telehealth clinics through its subsidiaries</Text>
      </View>


      <View style={{ backgroundColor: '#00ced1', marginTop: 20, paddingVertical: 15 }}>
        <Text style={{ fontSize: 20, color: 'white', fontFamily: 'Asul-Bold', fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>Development Team</Text>
      </View>





      <View style={{ marginTop: 20, paddingHorizontal: 10, }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} pagingEnabled={true} >
          <Card style={{ marginHorizontal: 10 }}>
            <Card.Title title="Sabya" left={LeftContent} />
            <Card.Content>
              <Title>Overthinker</Title>
              <Paragraph>Senseless, Waste Fellow</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
              <Button>Email</Button>
            </Card.Actions>
          </Card>
          <Card style={{ marginHorizontal: 10 }}>
            <Card.Title title="Sabya" left={LeftContent} />
            <Card.Content>
              <Title>Overthinker</Title>
              <Paragraph>Senseless, Waste Fellow</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/800' }} />
            <Card.Actions>
              <Button>Email</Button>
            </Card.Actions>
          </Card>
          <Card style={{ marginHorizontal: 10 }}>
            <Card.Title title="Sabya" left={LeftContent} />
            <Card.Content>
              <Title>Overthinker</Title>
              <Paragraph>Senseless, Waste Fellow</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/900' }} />
            <Card.Actions>
              <Button>Email</Button>
            </Card.Actions>
          </Card>
        </ScrollView>

      </View>
    </ScrollView>
  );
}