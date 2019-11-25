import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { Card, CardItem, Body, Left, Icon } from "native-base";
import colors from '../../colors';

const filterStatus = status => {
  return status === 'started' ? 'Sedang Berlangsung' : 'Sudah Berakhir';
}

const ScheduleCard = props => (
  <>
    <TouchableOpacity onPress={props.goToFormTeachingPlan}>
      <View style={{ marginHorizontal: 10 }}>
        <Card style={{ backgroundColor: colors.green01 }}>
          <CardItem header style={{ backgroundColor: colors.green01 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 2 }}>
                <Text style={{ fontSize: 15, color: colors.white }}>{props.studyYear ? props.studyYear : 'Tahun Ajaran'}</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 15, color: colors.white, textTransform: 'capitalize' }}>Semester {props.semester ? props.semester : 'Ganjil'}</Text>
              </View>
            </View>
          </CardItem>
          <CardItem style={{ backgroundColor: colors.green01 }}>
            <Body>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 2 }}>
                  <Text style={{ fontSize: 15, marginBottom: 5, color: colors.white }}>Tanggal Mulai: {props.start ? props.start : 'N/A'}</Text>
                  <Text style={{ fontSize: 15, marginBottom: 5, color: colors.white }}>Tanggal Berakhir: {props.end ? props.end : 'N/A'}</Text>
                  <Text style={{ fontSize: 15, marginBottom: 5, color: colors.white }}>Status : <Text style={{ color: props.status === 'started' ? colors.white : 'red' }}>{props.status ? filterStatus(props.status) : 'N/A'}</Text></Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Icon name="medal" type="Ionicons" style={{ color: colors.white, fontSize: 70 }} />
                </View>
              </View>
            </Body>
          </CardItem>
        </Card>
      </View>
    </TouchableOpacity>
  </>
);

export default ScheduleCard;