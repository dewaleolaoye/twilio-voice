const express = require("express");
const app = express();
require("dotenv/config");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const voiceServiceSid = process.env.TWILIO_VOICE_SERVICE_SID;
const sessionId = process.env.TWILIO_SESSION_SID;
const participantSid = process.env.PARTICIPANTS_SID;
const participantSid2 = process.env.PARTICIPANTS_SID_II;
const dayo = process.env.DAYO;
const wale = process.env.WALE;
// const voiceUrl = process.env.TWILIO_VOICE_URL;
// const myNumber = process.env.MY_NUMBER;

const twilioNumber = process.env.TWILIO_NUMBER;
const phoneSid = process.env.TWILIO_PHONE_NUMBER_SID;

const client = require("twilio")(accountSid, authToken);

// client.proxy.services
//   .create({ uniqueName: "talk_to_dayo" })
//   .then(service => console.log(service, "creating a service"));

// Add phone numbers
// client.proxy
//   .services(voiceServiceSid)
//   .phoneNumbers.create({ sid: phoneSid }, err => console.log(err))
//   .then(phone_number => console.log(phone_number.sid, "Add Phone number"));

// Create session
// client.proxy
//   .services(voiceServiceSid)
//   .sessions.create({ uniqueName: "Make_It_Work" }, (err, result) => {
//     err ? console.log(err) : console.log(result);
//   })
//   .then(session => console.log(session.sid, "from the session"));

// client.proxy
//   .services("KSa3662262e4863f84a3a63ee3991190a6")
//   .phoneNumbers(phoneSid)
//   .remove(err => console.log(err));

// client.proxy
//   .services("KSa3662262e4863f84a3a63ee3991190a6")
//   .remove((err, items) => {
//     err ? console.log(err) : console.log(items);
//   });

// client.proxy
//   .services(voiceServiceSid)
//   .sessions(sessionId)
//   .participants.create(
//     {
//       friendlyName: "Daniel Mercy",
//       identifier: dayo,
//       proxyIdentifier: twilioNumber
//     },
//     (err, res) => {
//       err ? console.log("From the Session", err) : console.log(res);
//     }
//   )
//   .then(participant => console.log(participant.proxyIdentifier));

client.proxy
  .services(voiceServiceSid)
  .sessions(sessionId)
  .participants(participantSid2)
  .messageInteractions.create({ body: "Hey how far " }, (err, response) => {
    err ? console.log(err) : console.log(response);
  })
  .then(message_interaction => console.log(message_interaction.sid));

// client.proxy
//   .services(voiceServiceSid)
//   .sessions(sessionId)
//   .participants(participantSid)
//   .messageInteractions.create();

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
