import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {login, register} from '../helpers/authHelper';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const authLogin = () => {
    setLoading(true);
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    } else {
      login(email, password)
        .then(() => {
          setLoading(false);
        })
        .catch(error => {
          setLoading(false);
          setError(error.message);
        });
    }
  };
  const authRegister = () => {
    setLoading(true);
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    } else {
      register(email, password)
        .then(() => {
          setLoading(false);
        })
        .catch(error => {
          setLoading(false);
          setError(error.message);
        });
    }
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginText}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        defaultValue={email}></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        defaultValue={password}></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={text => setConfirmPassword(text)}
        defaultValue={confirmPassword}></TextInput>
      <Button title="Login" onPress={authLogin} />
      <Button title="Register" onPress={authRegister} />
      <Text>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  loginText: {
    fontSize: 30,
    color: 'black',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginScreen;
