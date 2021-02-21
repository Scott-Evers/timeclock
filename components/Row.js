import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Card from './Card';

const Row = ({info, handlers}) => {
  const [items, setItems] = useState(info);
  return (
    <FlatList
      style={styles.row}
      horizontal={true}
      data={items}
      renderItem={({item}) => <Card info={item} handlers={handlers} />}
    />
  );
};

const getHeight = () => {
  return useWindowDimensions().height * 0.8;
};
const styles = StyleSheet.create({
  row: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default Row;
