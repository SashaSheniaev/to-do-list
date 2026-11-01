import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#333333',
  },
  selectedButton: {
    backgroundColor: '#1E6F9F',
    borderColor: '#1E6F9F',
  },
  label: {
    color: '#D9D9D9',
    fontSize: 14,
    fontWeight: '600',
  },
  selectedLabel: {
    color: '#F2F2F2',
  },
});
