import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Card from './components/card';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffeded"
  }
});
const { container } = styles;

const App = () => {
  return (
    <ScrollView style={container}>
      <Card
        titulo="O titulo para vc"
        sub="essa é a prova que eu consigo desenvolver"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ></Card>
      <Card
        titulo="Mais uma prova de amor"
        sub="Aqui esta a prova de quanto eu sou capaz de escrever coisas"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ></Card>
    </ScrollView>
  );
};


export default App;
