import { Image, Text, View } from 'react-native';
import clipboard from '../../assets/Clipboard.png';
import { styles } from './style';

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image source={clipboard} />
      <Text style={styles.text}>
        {'Voc\u00ea ainda n\u00e3o tem tarefas cadastradas.'}{'\n'}Crie tarefas e organize seus itens a fazer.
      </Text>
    </View>
  );
}
