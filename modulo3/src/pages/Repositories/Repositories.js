import React, { useEffect } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as RepositoriesActions } from '../../store/ducks/repositories';
import { Container } from './styles';

const Repositories = ({ repositoriesRequest, repositories }) => {
  useEffect(() => {
    repositoriesRequest();
  }, []);

  const { data, loading } = repositories;

  return (
    <Container>
      {loading && <ActivityIndicator size="small" color="#999" />}
      {data.map(repository => <Text key={repository.id}>{repository.name}</Text>)}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  repositories: state.repositories,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(RepositoriesActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
