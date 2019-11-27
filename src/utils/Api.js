import axios from 'axios';
import { AsyncStorage } from "react-native";

export default axios.create({
  baseURL: 'http://e-schedule-banisaleh.herokuapp.com',
  // headers: {
  //   Authorization: AsyncStorage.getItem('token') ? `Bearer ${AsyncStorage.getItem('token')}` : null
  // }
})