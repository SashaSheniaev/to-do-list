import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

export type TaskFilter = 'all' | 'active' | 'completed';

interface Props {
  selectedFilter: TaskFilter;
  onChange: (filter: TaskFilter) => void;
}

const filters: { label: string; value: TaskFilter }[] = [
  { label: 'Усі', value: 'all' },
  { label: 'Активні', value: 'active' },
  { label: 'Виконані', value: 'completed' },
];

export function Filtr({ selectedFilter, onChange }: Props) {
  return (
    <View style={styles.container}>
      {filters.map((filter) => {
        const isSelected = selectedFilter === filter.value;

        return (
          <TouchableOpacity
            key={filter.value}
            style={[styles.button, isSelected && styles.selectedButton]}
            onPress={() => onChange(filter.value)}
            accessibilityRole="button"
            accessibilityState={{ selected: isSelected }}
          >
            <Text style={[styles.label, isSelected && styles.selectedLabel]}>
              {filter.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}