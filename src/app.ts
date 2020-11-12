import express = require('express');
import fs = require('fs');
const app = express();

import { BLOCKS, ITEMS } from '../data/db';

app.get('/items', (req, res) => {
    res.json(ITEMS);    
}) 

app.get('/blocks', (req, res) => {
    res.json(ITEMS);    
})

app.listen(30350, () => {
     console.log('Server listening on port http://localhost:30350');
});
