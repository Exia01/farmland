const axios = require('axios');

// Make a request for a user with a given ID
const testCall = async function () {
  let configObj = {
    url: 'https://farmland.us.auth0.com/oauth/token',
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    data:
      '{"client_id":"Oau472ymOnCgNGZAEX3hEjA7sdvEGWyB","client_secret":"4RCFh-jIc74p2Tnf07moqbCc2qB_37YuY8MBCdptTRhJtlYYCYr8CVn6TSVrUe72","audience":"https://api.sample","grant_type":"client_credentials"}',
  };
  try {
    const res = await axios(configObj);
    console.log(res.data);
  } catch (err) {
    console.log('ERROR!!!', err);
  }
};

module.exports = testCall;
