import {StyleSheet} from 'react-native';
import common from './common';

const styles = StyleSheet.create({
  calendarPicker: {
    flex: 1,
    justifyContent: 'space-around',
  },
  addEntryFlatListItem: {
    backgroundColor: '#fff',
    fontSize: 18,
  },
  addEntryFlatListItemAlt: {
    backgroundColor: '#eee',
  },
  entryView: {
    padding: 10,
    fontFamily: 'Consolas',
  },
  entryViewHeader: {
    fontSize: 20,
    color: '#00142A',
  },
  entryViewTaskId: {
    fontStyle: 'italic',
  },
  entryHoursView: {
    flexDirection: 'row',
    color: '#888',
    justifyContent: 'space-evenly',
  },
});

export default styles;
