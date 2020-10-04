const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactdeliveryinfo"
  );

  const deliverySeed = [
      {
          Address: "testing Delivery Address",
          Postcode: 3000,
          AdditionalInfo: "fragile",
          TimeFrame: 2
      },
      {
        Address: "testing Delivery Address 2",
        Postcode: 3001,
        AdditionalInfo: "Present",
        TimeFrame: 4
    },
    {
        Address: "testing Delivery Address 3",
        Postcode: 3003,
        AdditionalInfo: "ok to leave it at front door if not one is home",
        TimeFrame: 8
    }
  ];


  db.DeliveryInfo.remove({})
  .then(() => db.DeliveryInfo.collection.insertMany(deliverySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
