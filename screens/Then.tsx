import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import styles from '../styles/Then';
import DatePicker from 'react-native-date-picker';
import {TimeCard, Tasks} from '../lib/TimeCardClasses';
import {TaskList, Task, Week, Entry} from '../lib/Interfaces';

const Then = ({navigation, route}) => {
  const [date, setDate] = useState(getPreviousMonday(new Date()));
  const [dateSelection, setDateSelection] = useState(false);
  const [current, setCurrentTimeCard] = useState(new TimeCard(date));
  const [tasks, setTasks] = useState(new Tasks());

  function getPreviousMonday(date) {
    var day = date.getDay();
    var prevMonday = new Date();
    prevMonday.setDate(date.getDate() - (day - 1));
    return prevMonday;
  }

  const renderEntry = (item) => {
    let entry: Entry = item.item;
    return (
      <TouchableOpacity style={styles.entryView}>
        <Text style={styles.entryViewHeader}>{tasks.getTaskById(entry.TaskId).Description}</Text>
        <Text style={styles.entryViewTaskId}>{entry.TaskId}</Text>
        <View style={styles.entryHoursView}>
          <Text>M</Text>
          <Text>T</Text>
          <Text>W</Text>
          <Text>Th</Text>
          <Text>F</Text>
          <Text>Sa</Text>
          <Text>Su</Text>
          <Text>Total</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      {!dateSelection ? (
        <Button
          title={date.toDateString()}
          onPress={() => setDateSelection(!dateSelection)}
        />
      ) : (
        <>
          <DatePicker
            style={styles.calendarPicker}
            date={date}
            mode="date"
            maximumDate={new Date()}
            onDateChange={(dt) => setDate(getPreviousMonday(dt))}
          />
          <Button
            title="Set Date"
            onPress={() => setDateSelection(!dateSelection)}
          />
        </>
      )}
      <FlatList
        data={current.Entries}
        renderItem={renderEntry}
        keyExtractor={(item) => item.TaskId}
      />
      <Button title="+" onPress={() => navigation.navigate('Add')} />
    </>
  );
};

export default Then;
