import React, {useState, useEffect} from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

const window = Dimensions.get('window');

export default function ModalTask(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setTitle(props.task.title);
    setDescription(props.task.description);
  }, [props.task]);

  function submit() {}

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visibleModal}
      onRequestClose={() => props.setVisibleModal(false)}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <View style={styles.title}>
            <Text style={styles.textTitle}>{title}</Text>
            <TouchableOpacity onPress={() => props.setVisibleModal(false)}>
              <Icon name="check" size={25} color={'#000'} />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
            <TextInput
              placeholder="Description"
              multiline={true}
              numberOfLines={5}
              value={description}
              onChangeText={(text) => setDescription(text)}
              style={styles.textInput}
            />
            <View style={styles.totalTime}>
              <Text style={styles.textTotal}>Total Times</Text>
              <Text style={styles.textTotal}>{props.task.time}</Text>
            </View>
            {props.task.times
              ? props.task.times.map((time, index) => (
                  <View key={index} style={styles.listTime}>
                    <Text style={styles.textList}>
                      {moment(time.date).format('DD/MM/YYYY')}
                    </Text>
                    <Text style={styles.textList}>{time.time}</Text>
                  </View>
                ))
              : null}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: window.width,
    height: window.height,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalView: {
    width: window.width,
    height: '80%',
    margin: 20,
    backgroundColor: 'white',
    padding: 25,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  body: {
    marginTop: 15,
    width: '100%',
  },
  textInput: {
    height: 100,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlignVertical: 'top',
  },
  totalTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  textTotal: {
    fontSize: 18,
    fontWeight: '700',
  },
  listTime: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textList: {
    fontSize: 18,
    color: '#666',
  },
});
