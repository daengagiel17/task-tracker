import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Stopwatch} from 'react-native-stopwatch-timer';

const window = Dimensions.get('window');

export default function Task(props) {
  return (
    <View style={styles.container}>
      {props.isRun ? (
        <View style={styles.runTask}>
          <View>
            <Stopwatch
              msecs={false}
              start={props.setIsRun}
              reset={!props.setIsRun}
              options={options}
            />
            <Text style={styles.titleRunTask}>{props.task.title}</Text>
          </View>
          <TouchableOpacity
            style={styles.buttonStop}
            onPress={() => {
              props.setTimeTask({
                startTime: props.timeStart,
                endTime: new Date(),
                taskId: props.task.id,
              });
              props.setSelectTask(null);
              props.setIsRun(false);
            }}>
            <Icon name="stop" size={25} color={'#2f56bf'} />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.buttonAdd}>
          <Icon name="plus" size={25} color={'#fff'} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: window.width,
    height: 100,
    padding: 10,
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  runTask: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#2f56bf',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  titleRunTask: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonStop: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonAdd: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#2f56bf',
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  add: {
    color: '#fff',
    fontSize: 40,
  },
});

const options = {
  text: {
    fontSize: 25,
    color: '#FFF',
  },
};
