import React from 'react';

import { View, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7f7",
    width: "90%",
    margin: "5%",
    padding: "5%",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  cardTitulo: {
    fontSize: 20,
  },
  cardSub: {
    color: "#878787",
    fontSize: 16,
    textAlign: "justify",
  },
  cardTexto: {
    color: "#878787",
    fontSize: 18,
  },
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 1, height: 3 },
    textShadowRadius: 10
  }
});

const { container, cardTitulo, cardTexto, cardSub, textShadow } = styles;

const components = ({ titulo, sub, texto }) => (

  <View style={container}>
    <View>
      <Text style={[cardTitulo, textShadow]}>{titulo}</Text>
    </View>
    <View>
      <Text style={[cardSub, textShadow]}>{sub}</Text>
    </View>
    <View>
      <View
        style={{
          marginTop: 20,
          marginBottom: 20,
          borderBottomColor: '#878787',
          borderBottomWidth: 2,
        }}
      />
    </View>
    <View>
      <Text style={[cardTexto, textShadow]}>{texto}</Text>
    </View>
  </View >
);


export default components;
