import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';

import {
  View, Text, TouchableOpacity, StatusBar, AsyncStorage,
} from 'react-native';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

// import { Container } from './styles';

class Header extends Component {
  signOut = async () => {
    const { navigation } = this.props;
    await AsyncStorage.clear();
    navigation.navigate('Welcome');
  }

  render() {
    const { title } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />

        <View style={styles.left} />
        <Text style={styles.title}>
          {title}
        </Text>
        <TouchableOpacity onPress={() => this.signOut()}>
          <Icon name="sign-out-alt" size={16} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};


export default withNavigation(Header);
