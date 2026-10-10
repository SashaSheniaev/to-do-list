import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { TaskProps } from '../../screens/Home';

import checked from '../../assets/checked.png';
import trash from '../../assets/trash.png';

interface Props {
  data: TaskProps;
  handleCheck: (id: string) => void;
  handleDelete: (id: string) => void;
}

export function Task({ data, handleCheck, handleDelete }: Props) {
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
      <Text style={data.done ? styles.textChecked : styles.textUnchecked}>
        {data.title}
      </Text>
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
