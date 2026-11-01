import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    minHeight: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#4EA8DE',
    borderRadius: 6,
    color: '#F2F2F2',
    marginRight: 8,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
  },
  buttonText: {
    color: '#F2F2F2',
    fontWeight: '600',
  },
});
