require('dotenv').config()
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

//halaman root
app.get('/', (req, res) => {
    res.send('halo halo')
});

// Router
app.use('/api/v1/user', require('./routes/userRoutes'))

// Server
app.listen(port, () => {
    console.log(`Server berjalan pada http://localhost:${port}`);
});
