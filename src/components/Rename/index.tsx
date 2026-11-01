import React, { useState } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';

const [editId, setEditId] = useState(null);
const [editText, setEditText] = useState('');

const startEditing = (id, currentTitle) => {
    setEditId(id);
    setEditText(currentTitle);
};

const saveEdit = (id) => {
    setTasks(Tasks.map(task =>
        task.id === id ? { ...task, title: editText } : task
    ));
    setEditingId(null);
    setEditText('');
}
return (
    <View style={styles.container}>
        <FlatList
            data={Tasks}
            keyExtractor={(item) => item.id.}
            renderItem={({ item }) => (
                <View style={styles.taskItem}>
                    {editId === item.id ? (
                        <View style={styles.editContainer}>
                            <TextInput
                                style={styles.input}
                                value={editText}
                                onChangeText={setEditText}
                                autoFocus
                            />
                            <TouchableOpacity
                            style={styles.saveButton}
                            onPress={() => saveEdit(item.id)}
                            >
                                <Text style={styles.saveButtonText}>Зберегти</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={styles.taskContent}>
                            <Text style={styles.taskTitle}>{item.title}</Text>
                            <TouchableOpacity
                                style={styles.editButton}
                                onPress={() => startEditing(item.id, item.title)}
                                >
                                    <Text style={styles.editButtonText}>Редагувати</Text>
                                </TouchableOpacity>
                                </View>
            )}
          </View>
        )}
      />
    </View>
  );


