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
          'Створюйте завдання та впорядковуйте свої справи.'}
      </Text>
    </View>
  );
}
