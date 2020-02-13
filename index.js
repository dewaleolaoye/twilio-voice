const express = require("express");
const app = express();
require("dotenv/config");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);

// const client = twilio(accountSid, authToken);

client.calls.create(
  {
    url: process.env.TWILIO_VOICE_URL,
    to: process.env.MY_NUMBER,
    from: process.env.TWILIO_FROM_NUMBER
  },
  (err, call) => {
    if (err) {
      console.log(err);
    } else if (call) {
      console.log(call.accountSid);
    }
  }
);

app.get("/", (req, res) => {
  res.send({
    message: "hello express",
    status: 200
  });
});

const PORT = 3000;

app.listen(PORT, (req, res) => {
  console.log(`server runing on ${PORT}`);
});
