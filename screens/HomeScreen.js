import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view';
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs';
import Header from '../components/home/Header';
import Post from '../components/home/Post';
import Stories from '../components/home/Stories';
// import { POSTS } from '../data/posts';
import { db } from '../firebase';

const HomeScreen = ({ navigation }) => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    db.collectionGroup('posts').onSnapshot((snapshot) => {
      setPost(snapshot.docs.map((post) => ({ id: post.id, ...post.data() })));
    });
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} />
        <Stories />
        <ScrollView>
          {posts.map((post, index) => (
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
