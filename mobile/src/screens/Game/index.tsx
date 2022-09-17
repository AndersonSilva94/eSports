import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from 'react-native';

import { styles } from './styles';
import { Background } from '../../components/Background';

export function Game() {
  return (
    <Background>
      <SafeAreaView style={styles.container}>

      </SafeAreaView>
    </Background>
  );
}