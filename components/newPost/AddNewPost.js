import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FormilPostUpLoader from './FormikPostUploader';

const AddNewPost = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FormilPostUpLoader />
    </View>
  );
};

const Header = () => {
  return (
    <View style={styles.haederContainer}>
      <TouchableOpacity>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-glyphs/90/FFFFFF/back.png' }}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>NEW POST</Text>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
  },

  haederContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    marginRight: 23,
  },
});

export default AddNewPost;