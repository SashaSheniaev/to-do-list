import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 24,
  },
  input: {
    backgroundColor: '#262626',
    height: 54,
    borderRadius: 6,
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 12,
    color: '#F2F2F2',
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 173,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: -24,
    backgroundColor: '#0D0D0D',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: -27,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 20,
  },
  listSeparator: {
    margin: 4,
  },
});
