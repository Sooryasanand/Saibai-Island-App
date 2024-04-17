import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity,  FlatList, Linking, Image} from 'react-native';
import {useFonts, PublicSans_300Light, PublicSans_400Regular, PublicSans_500Medium} from '@expo-google-fonts/public-sans';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CallPopup } from '../components/CallPopup';


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

export default function Home() {
  const [news, setNews] = useState([]);
  const [weatherData, setWeatherData] = useState();
  const [loading, setLoading] = useState(false)
  const [dt, setDt] = useState(new Date().toLocaleString());
  let popupRef = React.createRef()

  let [fontsLoaded] = useFonts({
    PublicSans_400Regular,
    PublicSans_500Medium,
    PublicSans_300Light
  });

  useEffect(() => {
      let secTimer = setInterval( () => {
        setDt(new Date().toLocaleString())
      },1000)

      return () => clearInterval(secTimer);
  }, []);

  useEffect(() => {
    axios
      .get(``)
      .then((response) => {
        const json = response.data;
        console.log('json', json);
        setWeatherData(json.main.temp)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    fetch('')
      .then(res => res.json())
      .then(output => {
        setNews(output.articles);
      })
  }

  const onShowPopup = () => {
    popupRef.show()
  }

  const onClosePopup = () => {
    popupRef.close()
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.titleLocation}>Saibai Island</Text>
        <View style={styles.subHeader}>
          <Text style={styles.titleTime}>{dt}</Text>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: "center", marginTop: 20}}>
            <Icon name="weather-cloudy" size={30} />
            <Text style={styles.titleWeather}>{weatherData}°C</Text>
          </View>
        </View>
      </View>
      <View style={styles.upcomingDisaster}>
        <Text style={styles.titleUpcoming}>Upcoming Disaster</Text>
        <Text style={styles.disasterInfo}>24th June : Cyclone</Text>
        <Text style={styles.disasterInfo}>11th August : Tsunami</Text>
      </View>
      <View style={styles.news}>
        <Text style={styles.NewsMainTitle}>News</Text>
          <FlatList
            data={news}
            renderItem={({item, index}) => {
              return(
                <TouchableOpacity style={styles.newsCard} onPress={() => Linking.openURL(item.url)}>
                    <View>
                    <Text style={[styles.newsTitle, {fontFamily:'PublicSans_400Regular'}]}>{item.title}</Text>
                    <Text style={[styles.newsTitle, {marginTop: 5, fontSize: 12}]}>{item.description}</Text>
                    </View>
                </TouchableOpacity>
            )
            }}
          />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginTop: 60,
    flex: 1,
    marginBottom: 10,
  },
  titleLocation: {
    fontSize: 45,
    fontFamily: 'PublicSans_500Medium',
  },
  titleTime: {
    marginTop: 10,
    marginLeft: 5,
    fontSize: 20,
    fontFamily: 'PublicSans_300Light',
    color: "black"
  },  
  titleWeather: {
    fontSize: 20,
    marginLeft: 10,
    fontFamily: 'PublicSans_300Light',
    color: "black"
  },
  titleUpcoming: {
    fontFamily: 'PublicSans_500Medium',
    fontSize: 30,
    marginTop: 40,
  },
  disasterInfo: {
    fontSize: 25,
    marginTop: 30,
    fontFamily: 'PublicSans_300Light'
  },
  news: {
    marginBottom: 70
  },
  newsCard: {
    borderColor: 'black',
    borderWidth: 1,
    width: '98%',
    height: '100vws',
    alignSelf: 'center',
    marginTop: 20,
    flexShrink: 1,
    borderRadius: 10,
    alignSelf: 'center',
    padding: 10,
  },
  NewsMainTitle: {
    fontFamily: 'PublicSans_500Medium',
    fontSize: 30,
    marginTop: 40,
    marginBottom: 10
  },
  newsTitle: {
    fontFamily: 'PublicSans_300Light',
    marginLeft: 10,
  },
  floatingButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 15,
    borderRadius: 30,
    backgroundColor: 'red',
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset : { width: 1, height: 13},
  }
});
