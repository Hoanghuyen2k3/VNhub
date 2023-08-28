const express = require('express');
const https = require('https'); // Import the built-in http module
const app = express();
const bodyParser = require('body-parser'); // Import bodyParser middleware

const port = 3003;
const cors = require('cors');
require('dotenv').config();
app.use(bodyParser.json()); // Use bodyParser middleware to parse JSON

app.use(cors());
app.use(express.json());
const API_KEY = process.env.API_KEY;
const options = {
    hostname: 'api.openai.com',
    port: 443,
    path: '/v1/chat/completions',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    }
  };


app.post('/vnhub', async (req, res) => {
  const { message } = req.body;

  const postData = JSON.stringify({
    model: 'gpt-3.5-turbo',
    messages: [{
      role: 'user',
      content: message
    }],
    max_tokens: 200
  });

  
  try {
    const req = https.request(options, async (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      console.log(data);

      response.on('end', () => {
        if (response.headers['content-type'].startsWith('application/json')) {
          try {
            const responseJSON = JSON.parse(data);
            const answer = responseJSON.choices[0].message.content;
            res.json({ answer });
          } catch (jsonError) {
            console.error('Error parsing JSON response:', jsonError);
            res.status(500).json({ error: 'An error occurred while processing the response.' });
          }
        } else {
          // Handle HTML response
          console.log('HTML response:', data);
          res.status(500).json({ error: 'Received unexpected HTML response.' });
        }
      });
    });

    req.on('error', (error) => {
      console.error('An error occurred:', error);
      res.status(500).json({ error: 'An error occurred while processing the request.' });
    });

    req.write(postData);
    req.end();
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
});



  


app.listen(process.env.PORT || 3003, () => console.log(`Example app listening on port ${port}!`));