import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import colors from "../../colors";
import { Header, Body, Title, Left, Right } from "native-base";
import ScheduleCard from './ScheduleCard';

class Home extends Component {

  state = {
    schedules: []
  }

  render() {
    return (
      <>
        <ScrollView style={{ flex: 1, paddingVertical: 10 }}>
          <Header transparent noLeft span androidStatusBarColor={colors.white} iosBarStyle={"dark-content"} style={{ backgroundColor: colors.white }}>
            <Left />
            <Body>
              <Title style={{ color: colors.black, fontSize: 26 }}>Beranda</Title>
            </Body>
            <Right />
          </Header>
          <View style={{ flex: 1, marginBottom: 15 }}>
            {this.state.schedules.length > 0 ? this.state.schedules.map(schedule => <ScheduleCard />) : (
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontStyle: 'italic', fontSize: 12, color: colors.green02 }}>Kamu tidak memiliki Jadwal Kuliah </Text>
              </View>
            )}
          </View>
        </ScrollView>
      </>
    )
  }
}

export default Home;