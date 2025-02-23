const express = require('express');

const {PORT} = require('./config');
const apiRoutes = require('./routes');

const app = express();

//app resgistration
//we have just registered the api endpoint and there we will make different modules for routes
app.use('/api', apiRoutes);

app.listen(PORT, ()=>{
    console.log(`Successfully started the server on PORT : ${PORT}`);
});