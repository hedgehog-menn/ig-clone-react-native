import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view';
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs';
import Header from '../components/home/Header';
import Post from '../components/home/Post';
import Stories from '../components/home/Stories';
import { POSTS } from '../data/posts';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} />
        <Stories />
        <ScrollView>
          {POSTS.map((post, index) => (
            <Post post={post} key={index} />
          ))}
        </ScrollView>
        <BottomTabs icons={bottomTabIcons} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    // paddingTop: 32,
    marginTop: 23,
    // paddingTop: 23,
  },
});

export default HomeScreen;
