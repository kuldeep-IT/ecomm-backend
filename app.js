const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const errorMiddleware = require("./middlewares/errorMiddleware");
const productRoutes = require('./routes/productRoutes');
const comboRoutes = require('./routes/comboRoutes');


dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/combos', comboRoutes);



// Error handling middleware
app.use(errorMiddleware);

module.exports = app;



// const PORT = process.env.PORT || 5000;

// mongoose.connect(process.env.MONGODB_URI).then(() => {
//     console.log("MongoDB Connected");

//     app.listen(PORT, () => {
//         console.log(`Server running on port ${PORT}`);
//     })

// }).catch(err => {
//     console.error('Connection error', err.message);
// });