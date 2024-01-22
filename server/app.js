const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const wikipediaRoutes = require('./routes/wikipediaRoutes');
const weatherRoutes = require('./routes/weatherRoutes');
const gnewsRoutes = require('./routes/gnewsRoutes');
const cors = require('cors');

const app =express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', wikipediaRoutes);
app.use('/api/weather', weatherRoutes);
app.use('/news', gnewsRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist/', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);    
})

