import { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { TaskProps } from '../../screens/Home';
import { Rename } from '../Rename';

import checked from '../../assets/checked.png';
import trash from '../../assets/trash.png';

interface Props {
  data: TaskProps;
  handleCheck: (id: string) => void;
  handleDelete: (id: string) => void;
  handleRename: (id: string, title: string) => void;
}

export function Task({ data, handleCheck, handleDelete, handleRename }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleCheck(data.id)}
        activeOpacity={0.7}
        style={data.done ? styles.checked : styles.unchecked}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: data.done }}
        accessibilityLabel={data.title}
      >
        {data.done && <Image source={checked} />}
      </TouchableOpacity>
      {isEditing ? (
        <Rename
          title={data.title}
          onSave={(title) => {
            handleRename(data.id, title);
            setIsEditing(false);
          }}
        />
      ) : (
        <>
          <Text style={data.done ? styles.textChecked : styles.textUnchecked}>
            {data.title}
          </Text>
          <TouchableOpacity
            onPress={() => setIsEditing(true)}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityLabel={`Перейменувати ${data.title}`}
          >
            <Text style={styles.editLabel}>✎</Text>
          </TouchableOpacity>
        </>
      )}
      <TouchableOpacity
        onPress={() => handleDelete(data.id)}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityLabel={`Remover ${data.title}`}
      >
        <Image source={trash} />
      </TouchableOpacity>
    </View>
  );
}
