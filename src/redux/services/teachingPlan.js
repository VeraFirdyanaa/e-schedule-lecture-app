import axios from "axios";
import API from '../../utils/Api'

export function getTeachingPlans() {
  return API.get("/api/broadcasts");
}