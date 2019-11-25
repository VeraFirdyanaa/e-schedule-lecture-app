import React, { Component } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import colors from "../../colors";
import { Header, Body, Title, Left, Right } from "native-base";
import TeachingPlanCard from './TeachingPlanCard';
import { connect } from "react-redux";
import { doGetTp, START_GET_TP } from "../../redux/reducers/teachingPlanReducer";
import moment from "moment";

class TeachingPlan extends Component {

  state = {
    loading: false,
    teachingPlans: []
  }

  componentDidMount() {
    this.props.getTeachingPlansService;
    console.log(this.props.teachingPlans);
  }

  render() {
    return (
      <>
        <ScrollView style={{ flex: 1, paddingVertical: 10 }}>
          <Header transparent noLeft span androidStatusBarColor={colors.white} iosBarStyle={"dark-content"} style={{ backgroundColor: colors.white }}>
            <Left />
            <Body>
              <Title style={{ color: colors.black, fontSize: 26 }}>Teaching Plan</Title>
            </Body>
          </Header>
          <View style={{ flex: 1 }}>
            {this.props.loadingTP ? (
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={colors.green01} />
              </View>
            ) : null}
            {
              this.props.teachingPlans ? this.props.teachingPlans.map(tp => (
                <TeachingPlanCard key={tp._id}
                  studyYear={tp.studyYear.code}
                  semester={tp.studyYear.semester}
                  start={moment(new Date(tp.start)).format("DD/MM/YYYY")}
                  end={moment(new Date(tp.end)).format("DD/MM/YYYY")}
                  status={tp.status}
                  goToFormTeachingPlan={() => this.props.navigation.navigate('TeachingPlanForm')}
                />
              )) : null
            }
          </View>
        </ScrollView>
      </>
    )
  }
}

const mapStateToProps = ({ teachingPlanReducer }) => {
  return {
    teachingPlans: teachingPlanReducer.teachingPlans,
    loadingTP: teachingPlanReducer.loadingTP,
    errorTP: teachingPlanReducer.error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getTeachingPlansService: dispatch({ type: START_GET_TP })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeachingPlan);