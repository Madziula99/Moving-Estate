const express = require('express');

express()
    .get('/api/status', (req, res) => res.json({ status: 'ok' }))
    .listen(3500, ()=>console.log('Server started on :3500'));