import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Linking, TouchableOpacity, FlatList} from 'react-native';
import {useFonts, PublicSans_300Light, PublicSans_400Regular, PublicSans_500Medium} from '@expo-google-fonts/public-sans';
import { useEffect, useState } from 'react';
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

export default function News() {
  const [news, setNews] = useState([]);
  let popupRef = React.createRef()

  let [fontsLoaded] = useFonts({
    PublicSans_400Regular,
    PublicSans_500Medium,
    PublicSans_300Light
  });

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
    <View style={styles.news}>
        <Text style={styles.titleUpcoming}>News</Text>
        <FlatList
          data={news}
          renderItem={({item, index}) => {
            return(
              <TouchableOpacity style={styles.newsCard} onPress={() => Linking.openURL(item.url)}>
                  <View>
                  <Text style={[styles.newstitle, {fontFamily:'PublicSans_400Regular'}]}>{item.title}</Text>
                  <Text style={[styles.newstitle, {marginTop: 5, fontSize: 12}]}>{item.description}</Text>
                  </View>
              </TouchableOpacity>
          )
          }}
        />
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
  news: {
    height: '100%',
    marginBottom: 10,
  },
  titleUpcoming: {
    fontFamily: 'PublicSans_500Medium',
    fontSize: 30,
    marginTop: 60,
    marginBottom: 10,
    marginLeft: 15
  },
  newsCard: {
    borderColor: 'black',
    borderWidth: 1,
    width: '93%',
    height: '100vws',
    alignSelf: 'center',
    marginTop: 20,
    flexShrink: 1,
    borderRadius: 10,
  },
  newstitle: {
    fontFamily: 'PublicSans_300Light',
    margin: 10
  },
  floatingButton: {
    position: 'absolute',
    marginRight: 15,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 25,
    borderRadius: 30,
    backgroundColor: 'red',
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset : { width: 1, height: 13},
  }
});
