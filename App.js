// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainView from "./Views/MainView.js";

function App() {
  return (
    <NavigationContainer>
      <MainView></MainView>
    </NavigationContainer>
  );
}

export default App;