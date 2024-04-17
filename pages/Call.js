import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Linking, Platform } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Call() {

  dialCall = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else {phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
  };

  return (
    <View style={styles.container}>
        <Text style={styles.callTitle}>Call</Text>
        <View style={styles.emergencyCall}>
          <TouchableOpacity style={styles.callButton} onPress={() => {this.dialCall('131444')}}>
            <MaterialIcons name="local-police" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.callButton} onPress={() => {this.dialCall('131233')}}>
            <FontAwesome name="ambulance" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.callButton} onPress={() => {this.dialCall('000')}}>
            <MaterialIcons name="fire-truck" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.phoneNumbers}>
          <TouchableOpacity style={styles.phoneNumberButton} onPress={() => {this.dialCall('0740345700')}}>
            <Ionicons name="call" color="red" size={20} />
            <Text style={styles.phoneNumberText}>07 4034 5700 - Torres Strait Islander Council</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.phoneNumberButton} onPress={() => {this.dialCall('0740832800')}}>
            <Ionicons name="call" color="red" size={20} />
            <Text style={styles.phoneNumberText}>07 4083 2800 - Saibai Council</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.phoneNumberButton} onPress={() => {this.dialCall('0740345700')}}>
            <Ionicons name="call" color="red" size={20} />
            <Text style={styles.phoneNumberText}>07 4034 5700 - Cairns Office</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.phoneNumberButton} onPress={() => {this.dialCall('0740345700')}}>
            <Ionicons name="call" color="red" size={20} />
            <Text style={styles.phoneNumberText}>07 4034 5700 - Frieght & Logistics Depot</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.phoneNumberButton} onPress={() => {this.dialCall('132500')}}>
            <Ionicons name="call" color="red" size={20} />
            <Text style={styles.phoneNumberText}>132 500 - SES Queensland</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.phoneNumberButton} onPress={() => {this.dialCall('131114')}}>
            <Ionicons name="call" color="red" size={20} />
            <Text style={styles.phoneNumberText}>13 11 14 - Lifeline</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.phoneNumberButton} onPress={() => {this.dialCall('0740345700')}}>
            <Ionicons name="call" color="red" size={20} />
            <Text style={styles.phoneNumberText}>07 4034 5700 - Frieght & Logistics Depot</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  callTitle:{
    fontFamily: 'PublicSans_500Medium',
    fontSize: 30,
    marginBottom: 10,
    marginLeft: 15
  },
  emergencyCall: {
    display: 'flex',
    flexDirection: 'row',
    margin: 20
  },
  callButton: {
    width: 100,
    height: 100,
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: 'red',
  },
  phoneNumbers: {
    marginTop: 30,
    margin: 20
  },
  phoneNumberButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    padding: 10
  },
  phoneNumberText: {
    marginLeft: 20,
    fontSize: 15
  }
});
