import * as React from 'react';
import { Text, View } from 'react-native';
import { useState } from 'react';

interface State {
  teste: string
}

interface Props {
  teste: string
}

export default class Podcast extends React.Component<State, Props> {
  public render() {
    return (
      <View>
        <Text>state</Text>
      </View>
    );
  }
}
