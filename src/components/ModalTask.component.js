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
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from '@react-native-community/checkbox';
import moment from 'moment';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const window = Dimensions.get('window');

export default function ModalTask(props) {
  const [type, setType] = useState('payable');
  const [name, setName] = useState(null);
  const [dueDate, setDueDate] = useState(new Date());
  const [amount, setAmount] = useState(null);
  const [description, setDescription] = useState(null);
  const [isUseDueDate, setIsUseDueDate] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setIsUseDueDate(props.debt.dueDate ? true : false);
    setType(props.debt.type ?? 'payable');
    setName(props.debt.name);
    setDueDate(
      props.debt.dueDate
        ? moment(props.debt.dueDate, 'DD-MM-YYYY')
        : new Date(),
    );
    setAmount(props.debt.amount ? props.debt.amount.toString() : null);
    setDescription(props.debt.description);
  }, [props.debt]);

  function onChange(event, selectedDate) {
    setShow(false);
    setDueDate(selectedDate ?? dueDate);
    setIsUseDueDate(selectedDate ? true : false);
  }

  function cancel() {
    props.setVisibleDebt(false);
    setName(null);
    setDueDate(new Date());
    setAmount(null);
    setDescription(null);
    setIsUseDueDate(false);
  }

  function submit() {
    if (!name || !amount || !description) {
      Alert.alert('Data tidak lengkap', 'Mohon untuk melengkapi form data.');
    } else {
      props.createDebt({
        type: type,
        name: name,
        dueDate: isUseDueDate ? moment(dueDate).format('YYYY-MM-DD') : null,
        amount: amount,
        description: description,
      });
      cancel();
    }
  }

  function update() {
    if (!name || !amount || !description) {
      Alert.alert('Data tidak lengkap', 'Mohon untuk melengkapi form data.');
    } else {
      props.updateDebt(props.debt.id, {
        type: type,
        name: name,
        dueDate: isUseDueDate ? moment(dueDate).format('YYYY-MM-DD') : null,
        amount: amount,
        description: description,
      });
      cancel();
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visibleDebt}
      onRequestClose={() => props.setVisibleDebt(false)}>
      <View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={dueDate}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <TouchableOpacity onPress={cancel} style={styles.cancelIcon}>
              <Icon name="times" size={20} color={'#555'} />
            </TouchableOpacity>
            <Text style={styles.textHeader}>Debt</Text>
          </View>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            <View style={styles.body}>
              <Text style={styles.title}>Type</Text>
              <View style={styles.input}>
                <View style={styles.inputDropdown}>
                  <Picker
                    selectedValue={type}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                      setType(itemValue)
                    }>
                    <Picker.Item label="Account Payable" value="payable" />
                    <Picker.Item
                      label="Account Receivable"
                      value="receivable"
                    />
                  </Picker>
                </View>
              </View>
              <Text style={styles.title}>Name</Text>
              <View style={styles.input}>
                <TextInput
                  placeholder="Name"
                  value={name}
                  onChangeText={(text) => setName(text)}
                  style={styles.textInput}
                />
              </View>
              <Text style={styles.title}>Date</Text>
              <View style={styles.dueDate}>
                <TouchableOpacity
                  style={{...styles.input, marginBottom: 0}}
                  onPress={() => setShow(true)}>
                  <Text style={styles.textDate}>
                    {isUseDueDate
                      ? moment(dueDate).format('DD/MM/YYYY')
                      : 'DD/MM/YYYY'}
                  </Text>
                </TouchableOpacity>
                <View style={styles.checkBox}>
                  <CheckBox
                    disabled={false}
                    value={isUseDueDate}
                    onValueChange={(newValue) => {
                      setIsUseDueDate(newValue);
                    }}
                  />
                  <Text>Use date</Text>
                </View>
              </View>
              <Text style={styles.title}>Amount</Text>
              <View style={styles.input}>
                <TextInput
                  placeholder="xxxxxx"
                  value={amount}
                  onChangeText={(text) => setAmount(text)}
                  style={styles.textInput}
                />
              </View>
              <Text style={styles.title}>Description</Text>
              <View style={styles.inputDescription}>
                <TextInput
                  placeholder="Description"
                  multiline={true}
                  numberOfLines={3}
                  value={description}
                  onChangeText={(text) => setDescription(text)}
                  style={styles.textInput}
                />
              </View>
            </View>
            {props.debt.name ? (
              <View style={styles.footer}>
                <TouchableOpacity
                  style={styles.buttonDelete}
                  onPress={() => {
                    props.deleteDebt(props.debt.id);
                    cancel();
                  }}>
                  <Text style={styles.textButtonDelete}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={update}>
                  <Text style={styles.textButton}>Update</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={submit}>
                  <Text style={styles.textButton}>Submit</Text>
                </TouchableOpacity>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalView: {
    width: window.width - 30,
    height: 520,
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cancelIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#ccc',
    padding: 2,
    borderRadius: 15,
  },
  scrollView: {
    width: '100%',
    paddingHorizontal: 10,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 30,
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  inputDescription: {
    width: '100%',
    height: 53,
    borderBottomWidth: 1,
    marginBottom: 15,
    justifyContent: 'flex-start',
  },
  textInput: {
    width: '100%',
    padding: 0,
  },
  inputDropdown: {
    width: '100%',
    height: 35,
  },
  dropdown: {
    width: '100%',
    height: '100%',
  },
  textDate: {
    paddingTop: 5,
  },
  searchLeft: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  dueDate: {
    marginBottom: 15,
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    alignItems: 'flex-start',
    paddingRight: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    height: 40,
    marginHorizontal: 2,
    borderRadius: 10,
    backgroundColor: '#8F48EA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDelete: {
    flex: 1,
    height: 40,
    marginHorizontal: 2,
    borderRadius: 10,
    backgroundColor: '#FFF',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonDelete: {
    color: '#000',
    fontSize: 17,
    fontWeight: 'bold',
  },
  textButton: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
