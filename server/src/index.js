const express = require('express');
const config = require('config');
const router = require('./routes/');
const PORT = config.get('port');

express()
    .use(express.json())
    .use('/api', router)
    .listen(PORT, ()=>console.log(`Server started on :${PORT}`));
