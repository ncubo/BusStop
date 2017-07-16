// Index.android.js - place code in here for Android

// Import a library to help create a Component
import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
//import Header from './src/components/Header';
import { Header, Body, Right, Button, Icon, Title, Footer } from 'native-base';
import StopsList from './src/components/StopsList';

// Create a Component

const App = () => (
  <View style={{ flex: 1 }} >
  <Header>
       <Body>
         <Title>Bus Stop</Title>
       </Body>
       <Right>
         <Button transparent>
           <Icon name='menu' />
         </Button>
       </Right>
     </Header>
    <StopsList />
    <Footer>
          <Title>Created By Miguel Mayorga L.</Title>
    </Footer>

  </View>
);

// Render it to the device

AppRegistry.registerComponent('BusStop', () => App);
