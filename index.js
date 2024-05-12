import 'dotenv/config'
import express, { json } from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(json());

//halaman root
app.get('/', (req, res) => {
    res.send('halo halo')
});

// Router
app.use('/api/v1/user', userRoutes)

// Server
app.listen(port, () => {
    console.log(`Server berjalan pada http://localhost:${port}`);
});
