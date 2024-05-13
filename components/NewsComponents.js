import React from "react";
import { StyleSheet, Text, View , TouchableOpacity,  FlatList, Linking, Image} from 'react-native';

export function NewsComponents({news}) {
  return(
    <View style={styles.news}>
        <FlatList data={news} renderItem={({
        item, index
        }) => {
        return(
        <TouchableOpacity style={styles.newsCard} onPress={() => Linking.openURL(item.url)}>
            <View>
                <Text style={[styles.newsTitle, {fontFamily: 'PublicSans_400Regular'}]}>{item.title}</Text>
                <Text style={[styles.newsTitle, {marginTop: 5, fontSize: 12}]}>{item.description}</Text>
            </View>
        </TouchableOpacity>
        );
        }} />
    </View>
    );
}

const styles = StyleSheet.create({
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
    newsTitle: {
    fontFamily: 'PublicSans_300Light',
    marginLeft: 10,
    },
})
  