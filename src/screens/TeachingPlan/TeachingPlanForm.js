import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, AsyncStorage } from "react-native";
import { Header, Body, Title, Button, Icon } from "native-base";
import colors from '../../colors';
import TeachingPlanCardCourse from './TeachingPlanCardCourse';
import { connect } from "react-redux";
import { START_GET_MY_COURSE } from '../../redux/reducers/coursesReducer';
import { showMessage } from "react-native-flash-message";

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
    let token = await AsyncStorage.getItem('token');
    console.log('token', token);
    this.props.getMyCourses(token);
    this.state.plans = this.props.courses ? this.props.courses.map(course => {
      return {
        ...course,
        name: course.name,
        fieldName: course.code,
        showRegulerTimePicker: false,
        showNightTimePicker: false,
        showExtensionTimePicker: false,
        // classRegulerSelected: '',
        dayReguler: '',
        dateReguler: new Date(),
        // classNightSelected: '',
        dayNight: '',
        dateNight: new Date(),
        // classExtensionSelected: '',
        dayExtension: '',
        dateExtension: new Date(),
        taken: false
      }
    }) : [];
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

  setDate = (event, date, index, key, keyTimePicker) => {
    console.log('event setDate', event, date, index);
    date = date || new Date();
    let plans = [...this.state.plans];
    plans[index][keyTimePicker] = Platform.OS === 'ios' ? true : false;
    plans[index][key] = date
    this.setState({
      plans
    });
  }

  showPicker = (index, key) => {
    let plans = [...this.state.plans];
    plans[index][key] = true;
    this.setState({
      plans: plans
    })
  }

  handleTipeKelas = (e, index, key) => {
    let plans = [...this.state.plans];
    plans[index][key] = e;
    console.log('plans', plans);
    this.setState({
      plans
    })
  }

  handleDay = (e, index, key) => {
    let plans = [...this.state.plans];
    plans[index][key] = e;
    this.setState({
      plans
    })
  }

  takingCourse = index => {
    let plans = [...this.state.plans];
    if (this.state.sksKuota < plans[index].sks) {
      showMessage({
        message: "Oops..!",
        description: 'Kamu telah melebihi Batas Kuota Mengajar (Maks: 12 SKS)',
        type: "warning",
        icon: "warning",
        duration: 3000
      });
      return
    }

    plans[index].taken = !plans[index].taken;
    this.setState(prevState => ({
      plans,
      sksKuota: plans[index].taken === true ? prevState.sksKuota - plans[index].sks : prevState.sksKuota + plans[index].sks
    }))
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
                course={plan}
                sksKuota={this.state.sksKuota}
                RegulerTimepicker={() => this.showPicker(index, 'showRegulerTimePicker')}
                NightTimepicker={() => this.showPicker(index, 'showNightTimePicker')}
                ExtensionTimepicker={() => this.showPicker(index, 'showExtensionTimePicker')}
                showRegulerTimepicker={plan.showRegulerTimePicker}
                showNightTimepicker={plan.showNightTimePicker}
                showExtensionTimepicker={plan.showExtensionTimePicker}
                dateReguler={plan.dateReguler}
                dateNight={plan.dateNight}
                dateExtension={plan.dateExtension}
                setDateReguler={(e, date) => this.setDate(e, date, index, 'dateReguler', 'showRegulerTimePicker')}
                setDateNight={(e, date) => this.setDate(e, date, index, 'dateNight', 'showNightTimePicker')}
                setDateExtension={(e, date) => this.setDate(e, date, index, 'dateExtension', 'showExtensionTimePicker')}
                dayReguler={plan.dayReguler}
                dayNight={plan.dayNight}
                dayExtension={plan.dayExtension}
                handleDayReguler={(e) => this.handleDay(e, index, 'dayReguler')}
                handleDayNight={(e) => this.handleDay(e, index, 'dayNight')}
                handleDayExtension={(e) => this.handleDay(e, index, 'dayExtension')}
                taken={plan.taken}
                takingCourse={() => this.takingCourse(index)}
                // classRegulerSelected={plan.classRegulerSelected}
                // classNightSelected={plan.classNightSelected}
                // classExtensionSelected={plan.classExtensionSelected}
                // handleTipeKelasReguler={(e) => this.handleTipeKelas(e, index, 'classRegulerSelected')}
                // handleTipeKelasNight={(e) => this.handleTipeKelas(e, index, 'classNightSelected')}
                // handleTipeKelasExtension={(e) => this.handleTipeKelas(e, index, 'classExtensionSelected')}
                remove={() => this.removePlan(index)}
                no={index + 1}
                index={index} />
            )) : <ActivityIndicator size="large" color={colors.green01} />}
          </View>
        </ScrollView>
        {/* {
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
        } */}
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