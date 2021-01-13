import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import ModalTask from '../components/ModalTask.component';
import OnTask from '../components/OnTask.component';
import Task from '../components/Task.component';
import {GET_TASK} from '../redux/action/task_types';
import {setTimeAction} from '../redux/action/task';
import {connect} from 'react-redux';

const window = Dimensions.get('window');

function HomeScreen(props) {
  const [isRun, setIsRun] = useState(false);
  const [task, setTask] = useState({});
  const [selectTask, setSelectTask] = useState(null);
  const [visibleModal, setVisibleModal] = useState(false);
  const [timeStart, setTimeStart] = useState(null);

  useEffect(() => {
    props.getTask();
  }, []);

  return (
    <View style={styles.container}>
      <ModalTask
        task={task}
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
      />
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
          {props.listTask.map((item, index) => (
            <Task
              key={index}
              task={item}
              setTask={setTask}
              setVisibleModal={setVisibleModal}
              setSelectTask={setSelectTask}
              setIsRun={setIsRun}
              isRun={item.id == selectTask}
              setTimeTask={props.setTimeTask}
              setTimeStart={setTimeStart}
              timeStart={timeStart}
            />
          ))}
        </View>
      </ScrollView>
      <OnTask
        isRun={isRun}
        setIsRun={setIsRun}
        setSelectTask={setSelectTask}
        task={task}
        setTimeTask={props.setTimeTask}
        setTimeStart={setTimeStart}
        timeStart={timeStart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
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
});

const mapStateToProps = (state) => ({
  listTask: state.task.listTask,
});

const mapDispatchToProps = (dispatch) => ({
  getTask: () => dispatch({type: GET_TASK}),
  setTimeTask: (data) => dispatch(setTimeAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
