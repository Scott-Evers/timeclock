import React, {useState} from 'react';
import {StatusBar, FlatList, useWindowDimensions} from 'react-native';
import Header from '../components/Header';
import Row from '../components/Row';
import * as Handlers from '../modules/CardHandlers';

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

  let screenHeight = useWindowDimensions().height;
  let screenWidth = useWindowDimensions().width;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <Row
            info={item.subs}
            screenHeight={screenHeight}
            screenWidth={screenWidth}
            handlers={Handlers}
          />
        )}
      />
    </>
  );
};

export default App;
