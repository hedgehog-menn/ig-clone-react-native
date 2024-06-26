import React from 'react';
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view';

import AddNewPost from '../components/newPost/AddNewPost';

const NewPostScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{ backgroundColor: 'black', flex: 1, marginTop: 23 }}
      >
        <AddNewPost navigation={navigation} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default NewPostScreen;
