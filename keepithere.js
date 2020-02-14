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
      console.log(call.sid);
    }
  }
);
