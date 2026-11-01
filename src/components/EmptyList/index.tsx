import { Image, Text, View } from 'react-native';
import clipboard from '../../assets/Clipboard.png';
import { styles } from './style';

interface Props {
  message?: string;
}

export function EmptyList({ message }: Props) {
  return (
    <View style={styles.container}>
      <Image source={clipboard} />
      <Text style={styles.text}>
        {message ??
          'Voc\u00ea ainda n\u00e3o tem tarefas cadastradas.\nСтворюйте завдання та впорядковуйте свої справи.'}
      </Text>
    </View>
  );
}
