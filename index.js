const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    service: 'payment-ui',
    team: 'team-angular',
    status: 'running'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(8080, () => {
  console.log('payment-ui running on port 8080');
});
