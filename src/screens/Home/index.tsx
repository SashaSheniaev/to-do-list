import { useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Task } from '../../components/Task';
import { EmptyList } from '../../components/EmptyList';
import { TaskInfo } from '../../components/TaskInfo';
import { Filtr, TaskFilter } from '../../components/Filtr';
import { styles } from './style';

import plus from '../../assets/plus.png';
import logo from '../../assets/Logo.png';

export type TaskProps = {
  id: string;
  title: string;
  done: boolean;
};

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [taskFilter, setTaskFilter] = useState<TaskFilter>('all');

  const filteredTasks = tasks.filter((task) => {
    if (taskFilter === 'active') return !task.done;
    if (taskFilter === 'completed') return task.done;
    return true;
  });

  function handleAddTask() {
    const title = newTaskTitle.trim();
    if (!title) {
      Alert.alert('Додати завдання', ' Будь ласка, введіть назву завдання.');
      return;
    }

    setTasks((currentTasks) => [
      ...currentTasks,
      { id: `${Date.now()}-${Math.random()}`, title, done: false },
    ]);
    setNewTaskTitle('');
    Keyboard.dismiss();
  }

  function handleToggleTaskDone(id: string) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  }

  function handleRemoveTask(id: string) {
    Alert.alert('Remover item', 'Ви впевнені, що хочете видалити цей елемент?', [
      { text: 'Sim', onPress: () => setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id)) },
      { text: 'N\u00e3o', style: 'cancel' },
    ]);
  }

  function handleRenameTask(id: string, title: string) {
    setTasks((currentTasks) =>
      currentTasks.map((task) => (task.id === id ? { ...task, title } : task)),
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} resizeMode="contain" />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Додати нове завдання"
          placeholderTextColor="#808080"
          value={newTaskTitle}
          onChangeText={setNewTaskTitle}
          onSubmitEditing={handleAddTask}
          returnKeyType="done"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleAddTask}
          accessibilityRole="button"
          accessibilityLabel="Додати завдання"
        >
          <Image source={plus} />
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <TaskInfo label="Покоївка" value={tasks.length} color="#4EA8DE" />
        <TaskInfo
          label={'Conclu\u00eddas'}
          value={tasks.filter((task) => task.done).length}
          color="#8284FA"
        />
      </View>

      <Filtr selectedFilter={taskFilter} onChange={setTaskFilter} />

      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task
            data={item}
            handleCheck={handleToggleTaskDone}
            handleDelete={handleRemoveTask}
            handleRename={handleRenameTask}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          tasks.length === 0 ? (
            <EmptyList />
          ) : (
            <EmptyList message="У цій категорії поки немає завдань." />
          )
        }
      />
    </View>
  );
}
