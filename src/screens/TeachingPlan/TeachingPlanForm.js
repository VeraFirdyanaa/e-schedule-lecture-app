import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Header, Body, Title, Button, Icon } from "native-base";
import colors from '../../colors';
import TeachingPlanCardCourse from './TeachingPlanCardCourse';

class TeachingPlanForm extends Component {

  state = {
    selected2: '',
    day: '',
    plans: [],
    date: new Date(),
    showTimePicker: false,
  }

  componentDidMount() {
    if (this.state.plans.length === 0) {
      let plans = [...this.state.plans];
      plans.push({
        course_id: null,
        day: '',
        timeType: '',
        time: null
      });
      this.setState({ plans });
    }
  }

  addNewCourse = e => {
    let plans = [...this.state.plans];
    plans.push({
      course_id: null,
      day: '',
      timeType: '',
      time: null
    });
    this.setState({ plans });
  }

  removePlan = index => {
    let plans = [...this.state.plans];
    plans.splice(index, 1);
    this.setState({ plans });
  }

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      showTimePicker: Platform.OS === 'ios' ? true : false,
      date,
    });
  }

  showPicker = () => {
    this.setState({
      showTimePicker: true
    })
  }

  render() {
    return (
      <>
        <ScrollView style={{ flex: 1, paddingVertical: 10 }}>
          <Header transparent noLeft span androidStatusBarColor={colors.white} iosBarStyle={"dark-content"} style={{ backgroundColor: colors.white }}>
            <Body>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                  <Button transparent onPress={() => this.props.navigation.goBack()}>
                    <Icon name='arrow-back' style={{ color: colors.black, fontSize: 26 }} />
                  </Button>
                </View>
                <View style={{ flex: 2, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                  <Title style={{ color: colors.black, fontSize: 26 }}>Teaching Plan Form</Title>
                </View>
              </View>
            </Body>
          </Header>
          <View style={{ flex: 1, marginHorizontal: 10, marginBottom: 60 }}>
            {this.state.plans.map((plan, index) => (
              <TeachingPlanCardCourse key={index}
                timepicker={this.showPicker}
                showtimePicker={this.state.showTimePicker}
                date={this.state.date}
                setDate={this.setDate}
                selected2={this.state.selected2}
                handleTipeKelas={e => this.setState({ selected2: e })}
                handleDay={e => this.setState({ day: e })}
                remove={() => this.removePlan(index)}
                no={index + 1}
                index={index} />
            ))}
          </View>
        </ScrollView>
        {
          this.state.plans.length < 3 ? (
            <TouchableOpacity style={{
              position: 'absolute',
              height: 70, width: 70,
              right: 10, bottom: 10,
              zIndex: 100,
              backgroundColor: colors.green01,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 35,
              elevation: 8
            }} onPress={this.addNewCourse}>
              <Icon name="add" type="Ionicons" style={{ color: colors.white, fontSize: 40 }} />
            </TouchableOpacity>
          ) : null
        }
      </>
    )
  }
}

export default TeachingPlanForm;