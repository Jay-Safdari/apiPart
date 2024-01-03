// server.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:4200' 
}));

app.use(express.json()); // Middleware to parse JSON


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


// server.js continued

app.post('/submit-form', (req, res) => {
  try {
      const formData = req.body; // You will get the form data in req.body
      console.log('Received form data:', formData);
      
      // TODO: Here you can add validation or database storage logic
      
      // If everything is fine, send a success response
      res.status(200).json({ message: 'Form data received successfully.', data: formData });
  } catch (error) {
      console.error('Error receiving form data:', error);
      // If there's an error, send an error response
      res.status(500).json({ message: 'Error receiving form data' });
  }
});
  