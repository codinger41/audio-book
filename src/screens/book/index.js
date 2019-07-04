import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from './styles.js';
import colors from '../../utils/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation: { state: { params: { image } } } }) => (
  <View style={styles.container}>
    <Image
      style={styles.headerImage}
      source={{ uri: image }}
    />
    <ScrollView style={styles.body}>
      <View style={styles.tagsContainer}>
        <View style={[styles.tag, { backgroundColor: colors.red }]}>
          <Text style={styles.tagText}>Love</Text>
        </View>
        <View style={[styles.tag, { backgroundColor: colors.green }]}>
          <Text style={styles.tagText}>humour</Text>
        </View>
      </View>
      <Text style={styles.headerText}>Keep smiling after a Photoshop's crash</Text>
      <Text style={styles.bodyText}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      </Text>
      <View style={styles.authorsContainer}>
        <View style={styles.row}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }}
            style={styles.authorImage}
          />
          <View>
            <Text style={styles.authorLabel}>Author</Text>
            <Text style={styles.authorName}>Lau Martinez</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }}
            style={styles.authorImage}
          />
          <View>
            <Text style={styles.authorLabel}>Author</Text>
            <Text style={styles.authorName}>Lau Martinez</Text>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.row}>
        <View>
          <Text style={styles.chapters}>Chapters</Text>
          <Text style={styles.chapterTxt}>chapter 1</Text>
          <Text style={styles.chapterTitle}>How to supress the desire to die</Text>
          <Text style={styles.chapterDuration}>16 minutes</Text>
        </View>
        <TouchableOpacity style={styles.playButton}>
          <Entypo
            name="controller-play"
            size={30}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
);

export default Home;
