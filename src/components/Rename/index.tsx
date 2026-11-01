import { useState } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';

interface Props {
  title: string;
  onSave: (title: string) => void;
}

export function Rename({ title, onSave }: Props) {
  const [value, setValue] = useState(title);

  function save() {
    const nextTitle = value.trim();
    if (nextTitle) onSave(nextTitle);
  }

  return (
    <>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        onSubmitEditing={save}
        returnKeyType="done"
        accessibilityLabel="Нова назва завдання"
        autoFocus
      />
      <TouchableOpacity style={styles.button} onPress={save} accessibilityRole="button">
        <Text style={styles.buttonText}>Зберегти</Text>
      </TouchableOpacity>
    </>
  );
}
