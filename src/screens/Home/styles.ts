import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 62,
    backgroundColor: '#D0D2D8',
  },

  formContainer: {
    width: '100%',
    gap: 8,
    paddingHorizontal: 16,
    marginTop: 42,
  },

  content: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 24,
    padding: 24,
    paddingTop: 32,
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EC',
    paddingBottom: 12,
  },

  listContent: {
    paddingTop: 24,
    paddingBottom: 62,
  },

  emptyList: {
    fontSize: 14,
    color: '#808080',
    textAlign: 'center',
  },

  clearButton: {
    marginLeft: 'auto',
  },

  clearText: {
    fontSize: 12,
    color: '#828282',
    fontWeight: '600',
  },

  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#EEF0F5',
    marginVertical: 16,
  },

  logo: {
    height: 34,
    width: 134,
  },
});
