import axios from "axios";

export default {
  // Gets all deliveries
  getDeliveries: function() {
    return axios.get("/api/delivery");
  },
  getJobs: function() {
    return axios.get("/api/job");
  },
};