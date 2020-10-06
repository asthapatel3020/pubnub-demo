/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ChatView} from './views/Chat';
import PubNub from 'pubnub';
import {PubNubProvider} from 'pubnub-react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const pubnub = new PubNub({
  subscribeKey: 'sub-c-0d2c87e4-ee66-11ea-a728-4ec3aefbf636',
  publishKey: 'pub-c-62a61102-4233-4bd6-af5e-b348ab327488',
  uuid: '0',
});

console.disableYellowBox = true;

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <PubNubProvider client={pubnub}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Chat" component={ChatView} />
        </Stack.Navigator>
      </PubNubProvider>
    </NavigationContainer>
  );
}
