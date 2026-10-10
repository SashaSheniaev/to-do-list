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

  function handleAddTask() {
    const title = newTaskTitle.trim();
    if (!title) {
      Alert.alert('Nova tarefa', 'Informe o nome da tarefa');
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
    Alert.alert('Remover item', 'Tem certeza que deseja remover esse item?', [
      { text: 'Sim', onPress: () => setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id)) },
      { text: 'N\u00e3o', style: 'cancel' },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} resizeMode="contain" />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
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
          accessibilityLabel="Adicionar tarefa"
        >
          <Image source={plus} />
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <TaskInfo label="Criadas" value={tasks.length} color="#4EA8DE" />
        <TaskInfo
          label={'Conclu\u00eddas'}
          value={tasks.filter((task) => task.done).length}
          color="#8284FA"
        />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task
            data={item}
            handleCheck={handleToggleTaskDone}
            handleDelete={handleRemoveTask}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={EmptyList}
      />
    </View>
  );
}
