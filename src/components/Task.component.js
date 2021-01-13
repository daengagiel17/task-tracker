import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const window = Dimensions.get('window');

export default function Task(props) {
  return (
    <TouchableOpacity
      style={styles.contentList}
      onPress={() => {
        props.setVisibleModal(true);
        props.setTask(props.task);
      }}>
      <View>
        <Text style={styles.title}>{props.task.title}</Text>
        <Text style={styles.time}>{props.task.time}</Text>
      </View>
      {props.isRun ? (
        <TouchableOpacity
          style={styles.buttonPlay}
          onPress={() => {
            props.setTimeTask({
              startTime: props.timeStart,
              endTime: new Date(),
              taskId: props.task.id,
            });
            props.setSelectTask(null);
            props.setIsRun(false);
          }}>
          <Icon name="stop" size={20} color={'#FFF'} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.buttonPlay}
          onPress={() => {
            props.setTask(props.task);
            props.setIsRun(true);
            props.setSelectTask(props.task.id);
            props.setTimeStart(new Date());
          }}>
          <Icon name="play" size={20} color={'#FFF'} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contentList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: window.width - 40,
    padding: 10,
    paddingHorizontal: 15,
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
  title: {
    color: '#222',
    fontSize: 18,
    fontWeight: 'bold',
  },
  time: {
    color: '#222',
    fontSize: 13,
  },
  buttonPlay: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#2f56bf',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
