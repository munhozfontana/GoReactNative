import React, { Component } from 'react';
import {
  Button, ScrollView, StyleSheet, View,
} from 'react-native';
import Todo from './components/Todo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});

export default class App extends Component {
  state = {
    todos: [{ id: 0, text: 'Fazer cafe' }, { id: 1, text: 'Doar chocolate' }],
  };

  addTodo = () => {
    const { todos } = this.state;

    this.setState({
      todos: [...todos, { id: Math.random(), text: 'new TODO' }],
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <ScrollView>
        <View style={styles.container}>
          {todos.map(todo => (
            <Todo key={todo.id} title={todo.text} />
          ))}
          <Button title="Novo" onPress={() => this.addTodo()} />
        </View>
      </ScrollView>
    );
  }
}
