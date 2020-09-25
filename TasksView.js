import React from 'react';
import {View, ScrollView} from 'react-native';
import {Header, Text, Button} from 'react-native-elements';
import {useAuth} from './AuthProvider';
import {useTasks} from './TasksProvider';
import {TaskItem} from './TaskItem';
import {AddTaskView} from './AddTaskView';
// The Tasks View displays the list of tasks of the parent TasksProvider.
// It has a button to log out and a button to add a new task.
export function TasksView() {
  // Get the logOut function from the useAuth hook.
  const {logOut} = useAuth();

  // Get the list of tasks and the projectId from the useTasks hook.
  const {tasks, projectId} = useTasks();

  return (
    <>
      <Header
        leftComponent={
          <Button
            title="Log Out"
            onPress={logOut}
            color="#fff"
            titleStyle={{fontSize: 14}}
          />
        }
        centerComponent={{text: 'TASK TRACKER', style: {color: '#fff'}}}
        rightComponent={<AddTaskView />}
      />
      <Text h3 style={{margin: 12}}>
        {projectId}
      </Text>
      <ScrollView>
        {tasks.map((task) => (
          <TaskItem key={`${task._id}`} task={task} />
        ))}
      </ScrollView>
    </>
  );
}
