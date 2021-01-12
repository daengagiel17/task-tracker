import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import NumberFormat from 'react-number-format';

export default function Task(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.setDebt(props.debt);
        props.setVisibleDebt(true);
      }}
      style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftCard}>
          <Text style={styles.name}>{props.debt.name}</Text>
          <Text style={styles.date}>
            {props.debt.dueDate ?? 'No time limit'}
          </Text>
        </View>
        <View style={styles.rightCard}>
          <NumberFormat
            value={props.debt.amount}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'IDR '}
            renderText={(value) => <Text style={styles.fee}>{value}</Text>}
          />

          {/* <Text style={styles.fee}>IDR {props.debt.amount}</Text> */}
        </View>
      </View>
      <Text style={styles.description}>{props.debt.description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    backgroundColor: '#FFF',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 5,
  },
  leftCard: {
    justifyContent: 'center',
  },
  rightCard: {
    justifyContent: 'center',
  },
  name: {
    color: '#8F48EA',
    fontSize: 15,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 12,
  },
  date: {
    fontSize: 13,
  },
  fee: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    textAlign: 'justify',
    fontSize: 16,
  },
});
