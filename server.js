const express = require('express');
const app = express();

app.use(express.static('build'));
app.use(express.urlencoded({ extended: true }));

app.post('/api/posttarget', (req, res) => {
  console.log('Received post request', req.body);
  res.send('all good');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
