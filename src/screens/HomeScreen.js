import React from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';

const window = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profile}>
          <Image
            source={require('../asset/profile.png')}
            style={styles.imageProfile}
          />
        </View>
        <Text style={styles.title}>Hello, Alex !</Text>
      </View>
      <ScrollView style={styles.listTask} showsVerticalScrollIndicator={false}>
        <View style={styles.headList}>
          <Text style={styles.titleHeadList}>Your Task</Text>
        </View>
        <View style={styles.bodyList}>
          <View style={styles.contentList}>
            <Text style={styles.titleTask}>Task A</Text>
            <Text style={styles.buttonStart}>Start</Text>
          </View>
          <View style={styles.contentList}>
            <Text style={styles.titleTask}>Task B</Text>
            <Text style={styles.buttonStart}>Start</Text>
          </View>
          <View style={styles.contentList}>
            <Text style={styles.titleTask}>Task C</Text>
            <Text style={styles.buttonStart}>Start</Text>
          </View>
          <View style={styles.contentList}>
            <Text style={styles.titleTask}>Task D</Text>
            <Text style={styles.buttonStart}>Start</Text>
          </View>
          <View style={styles.contentList}>
            <Text style={styles.titleTask}>Task E</Text>
            <Text style={styles.buttonStart}>Start</Text>
          </View>
          <View style={styles.contentList}>
            <Text style={styles.titleTask}>Task F</Text>
            <Text style={styles.buttonStart}>Start</Text>
          </View>
          <View style={styles.contentList}>
            <Text style={styles.titleTask}>Task G</Text>
            <Text style={styles.buttonStart}>Start</Text>
          </View>
          <View style={styles.contentList}>
            <Text style={styles.titleTask}>Task H</Text>
            <Text style={styles.buttonStart}>Start</Text>
          </View>
          <View style={styles.contentList}>
            <Text style={styles.titleTask}>Task I</Text>
            <Text style={styles.buttonStart}>Start</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.onTask}>
        <Text>On Task</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: window.width,
    height: window.height,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2f56bf',
    width: window.width,
    height: 80,
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  profile: {
    backgroundColor: '#fff',
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  imageProfile: {
    borderRadius: 20,
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  listTask: {
    height: '100%',
    backgroundColor: '#fff',
  },
  headList: {
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  titleHeadList: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  bodyList: {
    // paddingHorizontal: 20,
  },
  contentList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: window.width - 40,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 7,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  onTask: {
    backgroundColor: 'red',
  },
});
