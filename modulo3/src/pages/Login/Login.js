import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LoginActions } from '../../store/ducks/login';
import {
  Button,
  ButtonText,
  Container,
  Error,
  Input,
} from './styles';


const Login = ({ error, loading, loginRequest }) => {
  const [username, setUsername] = useState('');

  async function handlerSubmit() {
    loginRequest(username);
  }


  return (
    <Container>
      {error && (
        <Error>Sinto muito, seu usuário não foi identificado :c</Error>
      )}

      <Input
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Dgite seu usuário"
      />
      <Button onPress={handlerSubmit}>
        {loading
          ? <ActivityIndicator size="small" color="#FFF" />
          : <ButtonText>Entrar</ButtonText>}
      </Button>
    </Container>
  );
};

const mapStateToProps = ({ login }) => ({
  error: login.error,
  loading: login.loading,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(LoginActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Login);
