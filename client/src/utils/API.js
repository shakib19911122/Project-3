import axios from "axios";

export default {
  // Gets all deliveries
  getDeliveries: function() {
    return axios.get("/api/delivery");
  },
  getJobs: function() {
    return axios.get("/api/job");
  },
  // // Gets the delivery with the given id
  // getDelivery: function(id) {
  //   return axios.get("/api/deliveries/" + id);
  // },
  // // Deletes the delivery with the given id
  // deletDelivery: function(id) {
  //   return axios.delete("/api/deliveries/" + id);
  // },
  // // Saves a delivery to the database
  // saveDelivery: function(deliveryData) {
  //   return axios.post("/api/deliveries", deliveryData);
  // }
};