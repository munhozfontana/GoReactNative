import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  View, AsyncStorage, ActivityIndicator, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import RepositoryItem from './RepositoryItem';
import api from '../../services/api';
import styles from './styles';

const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

 state = {
   data: [],
   loading: true,
   refreshing: false,
 }

 componentDidMount() {
   this.loadingRepositories();
 }

 loadingRepositories = async () => {
   this.setState({ refreshing: true });
   const username = await AsyncStorage.getItem('@Githuber:username');
   const { data } = await api.get(`/users/${username}/repos`);

   this.setState({ data, loading: false, refreshing: false });
 }


 renderList = () => {
   const { data, refreshing } = this.state;
   return (
     <FlatList
       data={data}
       keyExtractor={item => String(item.id)}
       renderItem={this.renderListItem}
       onRefresh={() => this.loadingRepositories()}
       refreshing={refreshing}
     />
   );
 }

   renderListItem = ({ item }) => <RepositoryItem repository={item} />

   render() {
     const { loading } = this.state;

     return (
       <View style={styles.container}>
         <Header title="Repositórios" />
         { loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
       </View>
     );
   }
}
