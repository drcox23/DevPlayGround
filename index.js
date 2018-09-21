const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json('aloha');
});

// make a request to api
// receive the data
// you will serve the data to the webpage

const token = 'TMjRqtMNKNlKYCxyePmaETmPJmpyfbLr'

const noaaURL = "https://www.ncdc.noaa.gov/cdo-web/api/v2/locations"

// curl to get the json that I want to replicate
// curl -H "token:TMjRqtMNKNlKYCxyePmaETmPJmpyfbLr" "https://www.ncdc.noaa.gov/cdo-web/api/v2/locations"


app.listen(6969);