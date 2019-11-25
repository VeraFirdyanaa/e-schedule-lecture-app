import React from 'react';
import { View, Text } from "react-native";
import { Card, CardItem, Body } from "native-base";
import colors from '../../colors';


const ScheduleCard = props => (
  <>
    <View style={{ marginHorizontal: 10 }}>
      <Card style={{ backgroundColor: colors.green01 }}>
        <CardItem header style={{ backgroundColor: colors.green01 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 2 }}>
              <Text style={{ fontSize: 12, color: colors.white }}>{props.studyYear ? props.studyYear : 'Tahun Ajaran'}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text style={{ fontSize: 12, color: colors.white }}>{props.classType ? props.classType : 'Reguler Pagi'}</Text>
            </View>
          </View>
        </CardItem>
        <CardItem style={{ backgroundColor: colors.green01 }}>
          <Body>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 30, color: colors.white }}>{props.date ? props.date : '10 OCT'}</Text>
                <Text style={{ color: colors.white }}>{props.year ? props.year : '2019'} | {props.time ? props.time : '08:00'} WIB</Text>
                <Text style={{ color: colors.white }}>{props.day ? props.day : 'Senin'}</Text>
              </View>
              <View style={{ flex: 1, marginLeft: '10%' }}>
                <Text style={{ fontSize: 15, marginBottom: 5, color: colors.white }}>{props.course ? props.course : 'Algoritma & Pemrograman'}</Text>
                <Text style={{ fontSize: 15, marginBottom: 5, color: colors.white }}>{props.kelas ? props.kelas : 'S1/TI/1B/P'}</Text>
                <Text style={{ fontSize: 15, marginBottom: 5, color: colors.white }}>{props.room ? props.room : 'Ruang 1.4A'}</Text>
              </View>
            </View>
          </Body>
        </CardItem>
      </Card>
    </View>
  </>
);

export default ScheduleCard;