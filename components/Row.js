import React, {useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import Card from './Card';

const Row = (props) => {
  const [items, setItems] = useState(props.info);
  return (
    <FlatList
      style={styles.row}
      horizontal={true}
      data={items}
      renderItem={({item}) => (
        <Card
          info={item}
          screenHeight={props.screenHeight}
          screenWidth={props.screenWidth}
          handlers={props.handlers}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default Row;
