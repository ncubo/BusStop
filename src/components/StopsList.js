// Imports
import React, { Component } from 'react';
//import { ScrollView, Text, TextInput, Button } from 'react-native';
import { Container, Content, Button, Text, Item, Input, Icon, List } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
import StopsDetail from './StopsDetail';

class StopsList extends Component {
  state = { nextBus: [], visible: false, text: '' };
  renderNextBus() {
    //50163 example
    //50036 example
    this.setState({ visible: true });
    console.log('beforeee...');
    console.log(this.state.text);
    const stopnumber = this.state.text.trim();
    const privateKey = 'Nm2kNGl9nkY8FpD7c2bl';
    const url = 'http://api.translink.ca/rttiapi/v1/stops/' + stopnumber + '/estimates?apikey=' + privateKey;
    console.log(url);
    axios.get(url)
      .then(response =>
        this.setState({ nextBus: response.data, visible: false })
      );
  }

  renderStops() {
    return this.state.nextBus.map(nextbus =>
      <StopsDetail key={nextbus.RouteNo} nextbus={nextbus} />
    );
  }

  render() {
      return (
        <Container>
          <Content>
          <Spinner visible={this.state.visible} textContent={"Loading..."} overlayColor={'rgba(0, 0, 0, 0.5)'} textStyle={{color: '#fff'}} />
            <Item>
              <Input placeholder='Bus Stop Number' onChangeText={(text) => this.setState({ text })} />
              <Icon active name='search' />
            </Item>
            <Button disabled={this.state.text.length < 5} block primary onPress={() => this.renderNextBus()}><Text> Search </Text></Button>
            <Spinner visible={this.state.visible} color='green' />
            <List>
                {this.renderStops()}
            </List>
          </Content>
        </Container>
      );
  }
}


export default StopsList;
