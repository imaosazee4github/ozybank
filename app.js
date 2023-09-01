const express = require('express');
const bankAccountRoute = require('./route/bankAccountRoute');


const app = express();
app.use(express.json());

app.use('/', bankAccountRoute);


const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);