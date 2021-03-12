import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import styles from '../styles/Then';
import DatePicker from 'react-native-date-picker';

const Then = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <Text>{date.toDateString()}</Text>
      <DatePicker date={date} mode="date" onDateChange={setDate} />
    </>
  );
};

export default Then;
