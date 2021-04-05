import React from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import {DefaultTasks} from '../lib/TimeCardClasses';
import styles from '../styles/Then';

const AddEntry = (navigator, route) => {
  let tasks = DefaultTasks().Tasks;
  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={
          item.index % 2 === 0
            ? [styles.addEntryFlatListItem]
            : [styles.addEntryFlatListItem, styles.addEntryFlatListItemAlt]
        }
        onPress={() => {
          console.log(item.item);
        }}>
        <Text>{item.item.TaskId}</Text>
        <Text>{item.item.Description}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={(item) => item.TaskId}
    />
  );
};

export default AddEntry;
