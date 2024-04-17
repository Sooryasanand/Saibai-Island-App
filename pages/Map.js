import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import redMapIcon from "../assets/map_icon_red.png";

import React from 'react';
import { CallPopup } from '../components/CallPopup';
import Ionicons from 'react-native-vector-icons/Ionicons';

const callPopupList = [
  {
    id: 1,
    name: "000 - Emergency Services",
    number: '000'
  },
  {
    id: 2,
    name: "07 4034 5700 - Torres Strait Islander Council",
    number: '0740345700'
  }
]

let locationsOfInterest = [
  {
    title: "Primary Health Care Centre",
    location: {
      latitude: -9.377820994444983, 
      longitude: 142.62180029105025
    },
    description: "Primary Health Care Centre of the Island"
  },
  {
    title: "IBIS Store",
    location: {
      latitude: -9.378467498749277,
      longitude: 142.62279693396474
    },
    description: "Grocery Store of the Island"
  },
  {
    title: "Tagai State College",
    location: {
      latitude: -9.379419889731325,
      longitude: 142.62438939439002
    },
    description: "Local college's Saibai Island Campus"
  },
  {
    title: "Ergon Power Station",
    location: {
      latitude: -9.380352726034321, 
      longitude: 142.6244126006176
    },
    description: "Local college's Saibai Island Campus"
  }
]

let locationsofEvacutation = [
  {
    title: "Saibai Island Evacuation Centre",
    location: {
      latitude: -9.384120, 
      longitude: 142.614655
    },
    description: "Primary Evacuation Centre of the Island"
  },
  {
    title: "Saibai City Evacuation Centre",
    location: {
      latitude: -9.380983048297406,
      longitude: 142.62075125920956, 
    },
    description: "Saibari City Evacuation Centre"
  },
]

const mapJson = [
  {
    "featureType": "administrative.country",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "weight": 1.5
      }
    ]
  },
  {
    "featureType": "water",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  }
];

export default function Map() {
  let popupRef = React.createRef()

  const onRegionChange = (region) => {
    console.log(region);
  }

  const showLocationsofIntrest = () => {
    return locationsOfInterest.map((item, index) => {
      return (
        <Marker 
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        />
      )
    })
  };

  const showLocationsofEvacutation = () => {
    return locationsofEvacutation.map((item, index) => {
      return (
        <Marker 
          pinColor='#ADD8E6'
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        />
      )
    })
  };

  const onShowPopup = () => {
    popupRef.show()
  }

  const onClosePopup = () => {
    popupRef.close()
  }

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>Saibai Island Map</Text>
        <Text style={styles.subTitle}>Key points on the Island</Text>
      </View>
      <TouchableOpacity style={styles.floatingButton} onPress={onShowPopup}>
          <Ionicons name="call" color="white" size={30} />
      </TouchableOpacity>
      <CallPopup 
        title="Emergency Call"
        ref={(target) => popupRef = target}
        onTouchOutside={onClosePopup}
        data={callPopupList}
      />
      <View style={styles.keyNotations}>
          <View style={styles.notations}>
            <Image source={require("../assets/map_icon_red.png")} style={{width: 20, height: 20, marginRight: 5}}/>
            <Text>Primary Infrastructure</Text>
          </View>
          <View style={styles.notations}>
            <Image source={require("../assets/map_icon_blue.png")} style={{width: 20, height: 20, marginRight: 5}}/>
            <Text>Evacuation Areas</Text>
          </View>
      </View>
      <MapView 
          showsPointsOfInterest='false' 
          liteMode='true' 
          MapType="satellite" 
          style={styles.map} 
          customMapStyle={mapJson} 
          onRegionChange={onRegionChange} 
          initialRegion={{
            "latitude": -9.379444170205659, 
            "latitudeDelta": 0.00853877822791027, 
            "longitude": 142.62259444221854, 
            "longitudeDelta": 0.005462653934955597
          }}
      >
        {showLocationsofIntrest()}
        {showLocationsofEvacutation()}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
    marginTop: 10
  },
  map: {
    width: '100%',
    height: '100%',
    zIndex: -1
  },
  heading: {
    marginTop: 50,
    margin: 15,
    marginBottom: 5
  },
  title: {
    fontSize: 30,
    fontFamily: 'PublicSans_500Medium',
  },
  subTitle: {
    marginTop: 5,
    fontFamily: 'PublicSans_500Light',
  },
  keyNotations: {
    marginBottom: 20,
    marginTop: 5
  },
  notations: {
    margin: 10,
    display: "flex",
    flexDirection: "row"
  },
  floatingButton: {
    position: 'absolute',
    marginRight: 15,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 142,
    borderRadius: 30,
    backgroundColor: 'red',
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset : { width: 1, height: 13},
  }
});
