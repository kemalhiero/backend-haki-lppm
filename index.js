require('dotenv').config()
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//halaman root
app.get('/', (req, res) => {
    res.send('halo halo')
});

// Router
app.use('/api/v1/user', require('./routes/userRoutes'));
app.use('/api/v1/pengajuan', require('./routes/pengajuanRoutes'));

// Server
app.listen(port, () => {
    console.log(`Server berjalan pada http://localhost:${port}`);
});
