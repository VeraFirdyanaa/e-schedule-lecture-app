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
          <Text style={{ fontSize: 15, color: colors.black }}>Mata Kuliah {props.course ? props.course.name : '-'}</Text>
        </View>
        {/* {props.index !== 0 ? (
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={props.remove}>
              <Icon name="trash" style={{ color: colors.darkOrange }} />
            </TouchableOpacity>
          </View>
        ) : null} */}
      </View>
    </CardItem>
    <CardItem>
      <View style={{ flex: 1 }}>
        <Button onPress={props.takingCourse} block>
          {props.taken ? <Text>Batalkan</Text> : <Text>Ambil Mata Kuliah</Text>}
        </Button>
      </View>
    </CardItem>
    <CardItem style={{ borderRadius: 5 }}>
      {props.taken ? (
        <Form>
          {/* <Item fixedLabel>
          <Input placeholder={"Cari Mata Kuliah"} />
        </Item> */}
          <View>
            <View style={{ marginLeft: 15 }}>
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
                  selectedValue={props.dayReguler}
                  onValueChange={props.handleDayReguler}
                >
                  {
                    days.map(day => <Picker.Item key={day.value} label={day.value} value={day.key} />)
                  }
                </Picker>
              </Item>
            </Item>
            <View style={{ marginTop: 10 }}>
              {props.dateReguler ? (
                <Text style={{ marginLeft: 15, fontSize: 16 }}>Waktu Mengajar : {moment(new Date(props.dateReguler)).format("HH:mm")}</Text>
              ) : null}
              <Button onPress={props.RegulerTimepicker} transparent>
                <Text>Pilih Waktu Mengajar</Text>
              </Button>
            </View>
            {
              props.showRegulerTimepicker ? (
                <DateTimePicker value={props.dateReguler}
                  mode={'time'}
                  is24Hour={true}
                  display="default"
                  onChange={props.setDateReguler} />
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
                  selectedValue={props.dayNight}
                  onValueChange={props.handleDayNight}
                >
                  {
                    days.map(day => <Picker.Item key={day.value} label={day.value} value={day.key} />)
                  }
                </Picker>
              </Item>
            </Item>
            <View style={{ marginTop: 10 }}>
              {props.dateNight ? (
                <Text style={{ marginLeft: 15, fontSize: 16 }}>Waktu Mengajar : {moment(new Date(props.dateNight)).format("HH:mm")}</Text>
              ) : null}
              <Button onPress={props.NightTimepicker} transparent>
                <Text>Pilih Waktu Mengajar</Text>
              </Button>
            </View>
            {
              props.showNightTimepicker ? (
                <DateTimePicker value={props.dateNight}
                  mode={'time'}
                  is24Hour={true}
                  display="default"
                  onChange={props.setDateNight} />
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
                  selectedValue={props.dayExtension}
                  onValueChange={props.handleDayExtension}
                >
                  {
                    days.map(day => <Picker.Item key={day.value} label={day.value} value={day.key} />)
                  }
                </Picker>
              </Item>
            </Item>
            <View style={{ marginTop: 10 }}>
              {props.dateExtension ? (
                <Text style={{ marginLeft: 15, fontSize: 16 }}>Waktu Mengajar : {moment(new Date(props.dateExtension)).format("HH:mm")}</Text>
              ) : null}
              <Button onPress={props.ExtensionTimepicker} transparent>
                <Text>Pilih Waktu Mengajar</Text>
              </Button>
            </View>
            {
              props.showExtensionTimepicker ? (
                <DateTimePicker value={props.dateExtension}
                  mode={'time'}
                  is24Hour={true}
                  display="default"
                  onChange={props.setDateExtension} />
              ) : null
            }
          </View>
        </Form>) : null}
    </CardItem>
  </Card>
);

export default TeachingPlanCardCourse;