import React from 'react';
import {Text as T} from 'react-native';
import {styles} from '../styles/common';

export function Text({children}) {
  return <T style={styles().text}>{children}</T>;
}
