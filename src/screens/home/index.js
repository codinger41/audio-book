import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import styles from './styles';
import { images }from '../../data/images';

const ImageList = ({ navigation }) => {
  return (
    <FlatList
      data={images}
      horizontal
      keyExtractor={(i, t) => t.toString()}
      style={styles.imageList}
      contentContainerStyle={styles.imageList}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Book', { image: item.uri })}
        >
          <Image
            style={styles.image}
            source={{ uri: item.uri }}
          />
        </TouchableOpacity>
      )}
    />
  )
};

const Home = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <Text style={styles.headerText}>
      My Library
    </Text>
    <View style={styles.subHeaderRow}>
      <View>
        <Text style={styles.subHeaderText}>Purchases</Text>
        <Text style={styles.totalText}>9 total</Text>
      </View>
      <TouchableOpacity style={styles.shopButton}>
        <Text style={styles.shopText}>See shop</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.lists}>
      <ImageList navigation={navigation} />
      <ImageList navigation={navigation} />
    </View>
    <View style={styles.audioBooksContainer}>
      <View>
        <Text style={styles.audioBooksHeaderText}>
          Audiobooks
        </Text>
        <Text style={styles.totalText2}>9 total</Text>
      </View>
      <ImageList navigation={navigation} />
    </View>
    <TouchableOpacity style={styles.playButton}>

    </TouchableOpacity>
  </ScrollView>
);

export default Home;
