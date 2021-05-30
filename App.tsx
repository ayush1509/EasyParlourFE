import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View>
          <Text>Hi lets get started</Text>
        </View>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
