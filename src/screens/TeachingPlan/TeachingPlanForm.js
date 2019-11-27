import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, AsyncStorage } from "react-native";
import { Header, Body, Title, Button, Icon } from "native-base";
import colors from '../../colors';
import TeachingPlanCardCourse from './TeachingPlanCardCourse';
import { connect } from "react-redux";
import { START_GET_MY_COURSE } from '../../redux/reducers/coursesReducer';

class TeachingPlanForm extends Component {

  state = {
    selected2: '',
    day: '',
    plans: [],
    date: new Date(),
    showTimePicker: false,
    sksKuota: 12
  }

  async componentDidMount() {
    // if (this.state.plans.length === 0) {
    //   let plans = [...this.state.plans];
    //   plans.push({
    //     course_id: null,
    //     day: '',
    //     timeType: '',
    //     time: null
    //   });
    //   this.setState({ plans });
    // }
    let token = await AsyncStorage.getItem('token');
    console.log('token', token);
    this.props.getMyCourses(token);
    console.log('my courses', this.props.courses);
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
            {!this.props.loadingCourse ? this.state.plans.map((plan, index) => (
              <TeachingPlanCardCourse key={index}
                sksKuota={this.state.sksKuota}
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
            )) : <ActivityIndicator size="large" color={colors.green01} />}
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

const mapStateToProps = ({ course }) => ({
  courses: course.courses,
  loadingCourse: course.loadingCourse,
  error: course.error
});

const mapDispatchToProps = dispatch => ({
  getMyCourses: token => dispatch({ type: START_GET_MY_COURSE, token: token })
});

export default connect(mapStateToProps, mapDispatchToProps)(TeachingPlanForm);