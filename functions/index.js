

const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');
const stripe = require("stripe")(
  'sk_test_51KH8IeAyf1PcjiEMfaDFvFvtaM9facPmznMeQygxklIl8v5kg3eoxrKR5yP2HqFRs9J240w0rHsYbJjkV1dzcKhq00UQFu3VpB'
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Recieved for this amount >>> ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/aug-bc35b/us-central1/api
// http://localhost:5001/fir-fe4cf/us-central1/api