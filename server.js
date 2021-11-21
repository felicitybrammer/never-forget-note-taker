const express = require('express');
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/notes', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server started on port ${PORT}`);
});