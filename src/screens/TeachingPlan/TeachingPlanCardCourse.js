import React from 'react';
import { TouchableOpacity } from "react-native";
import { View, Text, Icon, Input, Form, Item, Label, Picker, Card, CardItem, Button } from "native-base";
import colors from '../../colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const days = [
  { key: 'senin', value: 'Senin' },
  { key: 'selasa', value: 'Selasa' },
  { key: 'rabu', value: 'Rabu' },
  { key: 'kamis', value: 'Kamis' },
  { key: 'jumat', value: 'Jumat' },
  { key: 'sabtu', value: 'Sabtu' },
  { key: 'minggu', value: 'Minggu' },
]

const TeachingPlanCardCourse = props => (
  <Card style={{ borderRadius: 5 }}>
    <CardItem header style={{ borderRadius: 5 }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 2 }}>
          <Text style={{ fontSize: 15, color: colors.black }}>Mata Kuliah Pilihan {props.no}</Text>
        </View>
        {props.index !== 0 ? (
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={props.remove}>
              <Icon name="trash" style={{ color: colors.darkOrange }} />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </CardItem>
    <CardItem style={{ borderRadius: 5 }}>
      <Form>
        <Item fixedLabel>
          <Input placeholder={"Cari Mata Kuliah"} />
        </Item>
        <View>
          <View style={{ marginLeft: 15, marginTop: 35 }}>
            <Text style={{ fontSize: 20, fontStyle: 'italic' }}>Kelas Reguler Pagi</Text>
          </View>
          <Item fixedLabel style={{ marginVertical: 10 }}>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Pilih Hari"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={props.selected2}
                onValueChange={props.handleDay}
              >
                {
                  days.map(day => <Picker.Item key={day.value} label={day.value} value={day.key} />)
                }
              </Picker>
            </Item>
          </Item>
          <View style={{ marginTop: 10 }}>
            {props.date ? (
              <Text style={{ marginLeft: 15, fontSize: 16 }}>Waktu Mengajar : {moment(new Date(props.date)).format("HH:mm")}</Text>
            ) : null}
            <Button onPress={props.timepicker} transparent>
              <Text>Pilih Waktu Mengajar</Text>
            </Button>
          </View>
          {
            props.showtimePicker ? (
              <DateTimePicker value={props.date}
                mode={'time'}
                is24Hour={true}
                display="default"
                onChange={props.setDate} />
            ) : null
          }
        </View>

        <View>
          <View style={{ marginLeft: 15, marginTop: 35 }}>
            <Text style={{ fontSize: 20, fontStyle: 'italic' }}>Kelas Reguler Malam</Text>
          </View>
          <Item fixedLabel style={{ marginVertical: 10 }}>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Pilih Hari"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={props.selected2}
                onValueChange={props.handleDay}
              >
                {
                  days.map(day => <Picker.Item key={day.value} label={day.value} value={day.key} />)
                }
              </Picker>
            </Item>
          </Item>
          <View style={{ marginTop: 10 }}>
            {props.date ? (
              <Text style={{ marginLeft: 15, fontSize: 16 }}>Waktu Mengajar : {moment(new Date(props.date)).format("HH:mm")}</Text>
            ) : null}
            <Button onPress={props.timepicker} transparent>
              <Text>Pilih Waktu Mengajar</Text>
            </Button>
          </View>
          {
            props.showtimePicker ? (
              <DateTimePicker value={props.date}
                mode={'time'}
                is24Hour={true}
                display="default"
                onChange={props.setDate} />
            ) : null
          }
        </View>

        <View>
          <View style={{ marginLeft: 15, marginTop: 35 }}>
            <Text style={{ fontSize: 20, fontStyle: 'italic' }}>Kelas Khusus/Ekstension</Text>
          </View>
          <Item fixedLabel style={{ marginVertical: 10 }}>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Pilih Hari"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={props.selected2}
                onValueChange={props.handleDay}
              >
                {
                  days.map(day => <Picker.Item key={day.value} label={day.value} value={day.key} />)
                }
              </Picker>
            </Item>
          </Item>
          <View style={{ marginTop: 10 }}>
            {props.date ? (
              <Text style={{ marginLeft: 15, fontSize: 16 }}>Waktu Mengajar : {moment(new Date(props.date)).format("HH:mm")}</Text>
            ) : null}
            <Button onPress={props.timepicker} transparent>
              <Text>Pilih Waktu Mengajar</Text>
            </Button>
          </View>
          {
            props.showtimePicker ? (
              <DateTimePicker value={props.date}
                mode={'time'}
                is24Hour={true}
                display="default"
                onChange={props.setDate} />
            ) : null
          }
        </View>
      </Form>
    </CardItem>
  </Card>
);

export default TeachingPlanCardCourse;