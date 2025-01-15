const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const deliveriesRouter = require('./routes/deliveries');
const paymentsRouter = require('./routes/payments');

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/deliveries', deliveriesRouter);
app.use('/payments', paymentsRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
