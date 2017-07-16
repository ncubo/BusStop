import React from 'react';
import { Content, Text, Icon, ListItem, Left, Body } from 'native-base';

const StopsDetail = ({ nextbus }) => {
  // const with object
  const { Direction, RouteMap, RouteName, RouteNo, Schedules } = nextbus;

  if (Schedules.length !== 0) {
    const namesList = Schedules.map(next =>
                        <ListItem key={next.ExpectedCountdown} >
                          <Text>Time to arrive: {next.ExpectedCountdown} min
                          -
                          {next.ExpectedLeaveTime.split(' ')[0].trim()}</Text>
                        </ListItem>
                      );
    return (
      <Content>
        <ListItem itemDivider first icon>
          <Left>
            <Icon active name='bus' />
          </Left>
          <Body>
            <Text>
                 Bus Number: {RouteNo}
            </Text>
           </Body>

        </ListItem>
        {namesList}
     </Content>
    );
  }
};


export default StopsDetail;
