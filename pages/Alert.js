import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MapView, { Marker } from 'react-native-maps';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

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

function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? " : " : " : ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " : " : " : ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " " : " ") : "";
  return hDisplay + mDisplay + sDisplay; 
}


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
      <Text style={[styles.diasterTitle, styles.diasterLocation]}>South End</Text>
      <CountdownCircleTimer
        isPlaying
        size={150}
        strokeWidth={6}
        duration={43200}
        colors={['#004777', '#FFFF00', '#A30000', '#FF0000']}
        colorsTime={[86040, 54000, 18000]}
      >
        {({ remainingTime }) => <Text style={{fontSize: 22, margin: 20}}>{secondsToHms(remainingTime)}</Text>}
      </CountdownCircleTimer>
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
          <Text style={styles.infoButtonText}>Emergency Services</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    alignItems: "center"
  },
  alertIcon: {
    marginBottom: 20
  },
  diasterTitle: {
    fontSize: 30,
    padding: 5,
  },
  diasterLocation: {
    paddingBottom: 20
  },
  map: {
    width: '80%',
    height: 180,
    zIndex: -1,
    marginTop: 30,
    borderRadius: 20
  },
  infoButton: {
    backgroundColor: 'red',
    padding: 20,
    paddingHorizontal: 60,
    borderRadius: 20,
    marginTop: 20,
  },
  infoButtonText: {
    color: 'white'
  }
});
