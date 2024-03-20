import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import recipesRoutes from './routes/recipes.routes.js';

dotenv.config({path: ['.env.local']});

const app = express();
const PORT = 6000;

app.use(recipesRoutes);

//Make database connection
await mongoose.connect(process.env.MONGO_URI)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`)
});