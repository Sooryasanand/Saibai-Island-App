import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MapView, { Marker } from 'react-native-maps';

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

let locationsofDisaster = [
  {
    title: "Cyclone",
    location: {
      latitude: -9.41458354255724, 
      longitude: 142.7448754778396
    }
  },
]


export default function Alert() {

  const showLocationsofDisaster = () => {
    return locationsofDisaster.map((item, index) => {
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

  return (
    <View style={styles.container}>
      <Feather name="alert-triangle" size={100} style={styles.alertIcon} />
      <Text style={styles.diasterTitle}>Potential Cyclone</Text>
      <Text style={styles.diasterTitle}>South End</Text>
      <Text style={styles.diasterTitle}>In 24 Hours!</Text>
      <MapView 
          showsPointsOfInterest='false' 
          liteMode='true' 
          MapType="satellite" 
          style={styles.map}
          customMapStyle={mapJson}
          initialRegion={{
            "latitude": -9.475658880100232,
            "latitudeDelta": 0.5055743838415516, 
            "longitude": 142.7039272338152, 
            "longitudeDelta": 0.2536880224943161
          }}
      >{showLocationsofDisaster()}</MapView>
      <TouchableOpacity style={styles.infoButton}>
          <Text style={styles.infoButtonText}>Shelter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.infoButton}>
          <Text style={styles.infoButtonText}>Safeguard Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.infoButton}>
          <Text style={styles.infoButtonText}>Emergency Services</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    height: '100%',
    alignItems: "center"
  },
  alertIcon: {
    marginBottom: 20
  },
  diasterTitle: {
    fontSize: 30,
    padding: 5
  },
  map: {
    width: '80%',
    height: '20%',
    zIndex: -1,
    marginTop: 30,
    borderRadius: 20
  },
  infoButton: {
    backgroundColor: 'red',
    padding: 20,
    paddingHorizontal: 60,
    borderRadius: 20,
    marginTop: 25
  },
  infoButtonText: {
    color: 'white'
  }
});
