import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    StyleSheet,
} from 'react-native';

import { useTheme } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import Iocons from 'react-native-vector-icons/Ionicons';

export default function EditProfile() {
    const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');
    const [Name, setName] = useState("Name");
    const [Email, setEmail] = useState("Email");
    const [Phone, setPhone] = useState("Phone");
    const [City, setCity] = useState("City");
    const navigation = useNavigation();

    renderInner = () => (
        <View style={styles.panel}>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.panelTitle}>Upload Photo</Text>
                <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
            </View>
            <TouchableOpacity style={styles.panelButton} >
                <Text style={styles.panelButtonTitle}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} >
                <Text style={styles.panelButtonTitle}>Choose From Library</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={() => this.bs.current.snapTo(1)}>
                <Text style={styles.panelButtonTitle}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );

    renderHeader = () => (
        <View style={styles.header} >
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}></View>
            </View>
        </View>
    );

    bs = React.createRef();
    return (


        <View style={styles.container}>
            <TouchableOpacity style={{ marginTop: 40, marginLeft: 20, }} onPress={() => { navigation.navigate("NavBar"); }}>
                <Iocons name="arrow-back-sharp" size={35} color="#ddd" />
            </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity>
                    <View style={{
                        height: 100,
                        width: 100,
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <ImageBackground
                            source={require("../../assets/profile.png")}
                            style={{ height: 100, width: 100 }}
                            imageStyle={{ borderRadius: 15 }}
                        >
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Icon name="camera" size={35} color="#fff" style={{
                                    opacity: 0.7,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderWidth: 1,
                                    borderColor: '#fff',
                                    borderRadius: 10,
                                }} />

                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
                <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
                    {Name}
                </Text>
            </View>
            <View style={styles.action}>
                <FontAwesome name="user-o" size={20} />
                <TextInput
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    value={Name}
                    onChangeText={(text) => setName(text)}
                />
            </View>
            <View style={styles.action}>
                <FontAwesome name="phone" size={20} />
                <TextInput
                    keyboardType='number-pad'
                    value={Phone}
                    onChangeText={(text) => setPhone(text)}
                    placeholderTextColor="#666666"
                    style={styles.textInput} />
            </View>
            <View style={styles.action}>
                <FontAwesome name="envelope-o" size={20} />
                <TextInput
                    value={Email}
                    onChangeText={(text) => setEmail(text)}
                    keyboardType='email-address'
                    placeholderTextColor="#666666"
                    style={styles.textInput} />
            </View>
            <View style={styles.action}>
                <Icon name="map-marker-outline" size={20} />
                <TextInput
                    value={City}
                    onChangeText={(text) => setCity(text)}
                    placeholderTextColor="#666666"
                    style={styles.textInput} />
            </View>
            <TouchableOpacity style={styles.commandButton} onPress={() => { navigation.navigate("NavBar"); }}>
                <Text style={styles.panelButtonTitle}> Submit</Text>
            </TouchableOpacity>
        </View>

    );
}









const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    // actionError: {
    //   flexDirection: 'row',
    //   marginTop: 10,
    //   borderBottomWidth: 1,
    //   borderBottomColor: '#FF0000',
    //   paddingBottom: 5,
    // },
    textInput: {
        flex: 1,
        marginLeft: 10,
        marginTop: 0,
        paddingLeft: 10,
        color: '#05375a',
    },
});