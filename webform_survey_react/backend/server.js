const connectToMongo = require('./db')
const cors = require('cors')
connectToMongo();

const express = require('express')
const app = express()
const port = 5000

app.use(express.json());
app.use(cors());

// app.use('/api/login', require('./routes/auth'));
app.use('/api/responses', require('./routes/responses'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})