import React from 'react';
import {View, StyleSheet, Button, Text, PermissionsAndroid} from 'react-native';
import {logout} from '../helpers/authHelper';
import MapView from 'react-native-maps';

const HomeScreen = () => {
  PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 38.90699,
          longitude: -77.073242,
          latitudeDelta: 0.0022,
          longitudeDelta: 0.0221,
        }}
        showsUserLocation={true}
      />
      <Button title="Logout" onPress={() => logout()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 400,
  },
  map: {
    height: 400,
    width: 400,
  },
});

export default HomeScreen;
