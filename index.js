const express = require('express');
const ZerodhaRoutes = require('./Routes/OderRoutes');
const UserRoutes = require('./Routes/Users');
const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', ZerodhaRoutes);
app.use('/api/users', UserRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});