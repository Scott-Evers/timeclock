import React, {useState} from 'react';
import {StyleSheet, View, Text, StatusBar, FlatList} from 'react-native';
import {uuid} from 'uuid';
import Header from '../components/Header';
import Card from '../components/Card';
import Row from '../components/Row';
import pad_handlers from '../modules/pad_handlers';

const App: () => React$Node = () => {
  const [items, setItems] = useState([
    {
      id: '0',
      subs: [
        {
          id: '00',
          description: 'Milk',
        },
        {
          id: '01',
          description: 'Eggs',
        },
        {
          id: '02',
          description: 'Bread',
        },
        {
          id: '03',
          description: 'Juice',
        },
      ],
    },
    {
      id: '1',
      subs: [
        {
          id: '10',
          description: 'Milk',
        },
        {
          id: '11',
          description: 'Eggs',
        },
        {
          id: '12',
          description: 'Bread',
        },
        {
          id: '13',
          description: 'Juice',
        },
      ],
    },
    {
      id: '2',
      subs: [
        {
          id: '20',
          description: 'Milk',
        },
        {
          id: '21',
          description: 'Eggs',
        },
        {
          id: '22',
          description: 'Bread',
        },
        {
          id: '23',
          description: 'Juice',
        },
      ],
    },
    {
      id: '3',
      subs: [
        {
          id: '30',
          description: 'Milk',
        },
        {
          id: '31',
          description: 'Eggs',
        },
        {
          id: '32',
          description: 'Bread',
        },
        {
          id: '33',
          description: 'Juice',
        },
      ],
    },
  ]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <Row info={item.subs} handlers={pad_handlers} />
        )}
      />
    </>
  );
};

export default App;
