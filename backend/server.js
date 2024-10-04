require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const userRouter = require('./routes/user.route.js');
const authRouter = require('./routes/auth.route.js');

const PORT = process.env.PORT || 5000


const app = express();
app.use(express.json());
app.use(express.static('public'));  
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200,
}
));

connectDB();


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message,
    status: statusCode
  });
});