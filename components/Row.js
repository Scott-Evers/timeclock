import React, {useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import Card from './Card';

const Row = ({info, handlers, screenHeight, screenWidth}) => {
  console.log('row', handlers);
  const [items, setItems] = useState(info);
  return (
    <FlatList
      style={styles.row}
      horizontal={true}
      data={items}
      renderItem={({item}) => (
        <Card
          info={item}
          screenHeight={screenHeight}
          screenWidth={screenWidth}
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
