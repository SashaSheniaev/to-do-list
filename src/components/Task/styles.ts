import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#262626',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#333333',
  },
  textUnchecked: {
    flex: 1,
    color: '#F2F2F2',
    fontSize: 14,
    marginHorizontal: 12,
    fontWeight: '400',
  },
  textChecked: {
    textDecorationLine: 'line-through',
    color: '#808080',
    flex: 1,
    fontSize: 14,
    marginHorizontal: 12,
    fontWeight: '400',
  },
  unchecked: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4EA8DE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#5E60CE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
