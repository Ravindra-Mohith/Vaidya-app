set = [require(`../../assets/doctors/a.jpg`), require(`../../assets/doctors/b.jpg`), require(`../../assets/doctors/c.jpg`),
require(`../../assets/doctors/d.jpg`), require(`../../assets/doctors/e.jpg`), require(`../../assets/doctors/f.jpg`)]
import * as React from "react";
import { Text, View, Dimensions, Image, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IoIcon from "react-native-vector-icons/Ionicons";
import { useState, useEffect } from "react";
import { Colors, Snackbar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Doctors() {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visible, setVisible] = useState(false);
    const [app, setApp] = useState(false);
    const [id, setState] = useState("");
    const [Id, setId] = useState("");
    const [bg, setBg] = useState("white");
    const [if_clicked_on_appointment, set_if_clicked_on_appointment] = useState(false);
    const onToggle = async () => {
        setVisible(!visible);
        setApp(!app);
        // console.log(Doctor)
        // const doctor = await fetch("http://192.168.231.218:4000/api/doctors/");
        // const D = await doctor.json();
        // AsyncStorage.setItem('Doc', Doctor);
    }
    const onDismiss = () => { setVisible(false) }

    const fetchData = async () => {
        const Docs = await fetch("http://192.168.231.218:4000/api/doctors");
        const d = await Docs.json();
        setDoctors(d["doctors"]);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        console.log(Id);
        // window
        // document.getElementById(id).style.backgroundColor == "aquamarine";
    }, [if_clicked_on_appointment])
    const navigation = useNavigation();
    var DocTemplates = [];
    const pressHandler = (id) => {
        for (i = 0; i < doctors.length; i++) {
            if (doctors[i]._id.toString() === id) {
                doctors[i].isAppointed = "aquamarine";
            } else {
                doctors[i].isAppointed = "white";
            }
        }
        console.log(id);
        setState(id);
        AsyncStorage.setItem('Doc', id);
        // set_if_clicked_on_appointment(!if_clicked_on_appointment);
    }
    const renderItem = ({ item }) => {
        var bgColor = "white";
        // if (item.isAppointed === 2) {
        //     bgColor = "aquamarine";
        // } else {
        //     bgColor = "white";
        // }
        return (
            <View style={{ fontSize: 'large', backgroundColor: 'white', marginTop: 20, paddingBottom: 10, borderRadius: 20 }, { backgroundColor: item.isAppointed }}>
                {!if_clicked_on_appointment && <>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: 10, padding: 5, }}>
                        <Image style={{ maxHeight: 100, maxWidth: 100, marginLeft: 5, borderRadius: 15 }} source={set[0]} />
                        <View style={{ flex: 1, flexDirection: "column", justifyContent: "flex-start", paddingLeft: 7, fontSize: 'large', fontWeight: 'bold' }}>
                            <Text style={{ fontWeight: "bold", textTransform: "uppercase" }}>{item.name} </Text>
                            <Text>{item.bio} ({item.qualifications}) </Text>
                            <Text>Experience:{item.experience}</Text>
                            <Text>Availibe betweeen {((item.availability.from / 100))}:{
                                (item.availability.from.toString().slice(-2))
                            } to {((item.availability.to / 100) % 12)}:{
                                    (item.availability.to.toString().slice(-2))
                                }
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <IoIcon name="star" color="#696969" size={15} />
                                <IoIcon name="star" color="#696969" size={15} />
                                <IoIcon name="star" color="#696969" size={15} />
                                <IoIcon name="star" color="#696969" size={15} />
                                <IoIcon name="star-half-sharp" color="#696969" size={15} />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                        <TouchableOpacity style={{ backgroundColor: 'coral', padding: 10, alignSelf: 'flex-start', borderRadius: 10, marginTop: 10 }} disabled={item.isAppointed === 0 ? false : true} onPress={() => pressHandler(item._id)}>
                            <Text style={{ color: 'black', fontSize: 13, fontWeight: 'bold' }}>{item.isAppointed === "aquamarine" ? "Waiting" : "Book Appointment"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: 'coral', padding: 10, alignSelf: 'flex-start', borderRadius: 10, marginTop: 10 }} onPress={()=>{navigation.navigate("DoctorProfile")}}>
                            <Text style={{ color: 'black', paddingHorizontal: 40, fontSize: 13, fontWeight: 'bold' }}>Profile</Text>
                        </TouchableOpacity>
                    </View></>
                }
            </View>
        )
    }

    return (<>
        <ScrollView>
            {loading && <Text>Loading..</Text>}
            {!loading &&
                <View style={{ paddingTop: 50, paddingHorizontal: Dimensions.get('window').width * 0.1 / 2, flex: 1, flexDirection: "column", backgroundColor: '#f0f8ff' }}>
                    <View style={{ backgroundColor: `#00ff7f`, borderRadius: 0 }}>
                        <Text style={{ color: 'black', paddingVertical: 10, fontWeight: "bold", fontSize: 30, textAlign: "center" }}>DOCTORS</Text>
                    </View>
                    <FlatList
                        data={doctors}
                        renderItem={renderItem}
                        keyExtractor={(item) => item._id.toString()}
                        ItemSeparatorComponent={() => {
                            return (
                                <View
                                    style={{
                                        height: 10,
                                        width: 10,
                                    }} />
                            );
                        }}
                    />
                    <Snackbar
                        visible={visible}
                        onDismiss={onDismiss}
                        action={{
                            label: 'Close',
                            onPress: () => {
                            },
                        }}> Hey there! I'm a Snackbar.
                    </Snackbar>
                </View>
            }
        </ScrollView>
    </>
    );
}
